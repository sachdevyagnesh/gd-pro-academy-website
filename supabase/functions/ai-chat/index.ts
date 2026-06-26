import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Safe error messages to avoid leaking internal details
const SAFE_ERROR_MESSAGES = {
  RATE_LIMIT: 'Rate limit exceeded. Please try again in a moment.',
  SERVICE_UNAVAILABLE: 'Service temporarily unavailable. Please try again later.',
  AI_ERROR: 'AI assistant is temporarily unavailable. Please try again later.',
  VALIDATION_ERROR: 'Invalid request. Please refresh and try again.',
  DEFAULT: 'An error occurred. Please try again later.',
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20; // 20 messages per minute per IP (allows for conversation)

// In-memory rate limit store (resets on function cold start)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function getClientIp(req: Request): string {
  // Get IP from various headers (in order of preference)
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIp = req.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }
  return 'unknown';
}

function checkRateLimit(clientIp: string): { allowed: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const record = rateLimitStore.get(clientIp);
  
  // Clean up old entries periodically
  if (rateLimitStore.size > 1000) {
    for (const [ip, data] of rateLimitStore.entries()) {
      if (now > data.resetTime) {
        rateLimitStore.delete(ip);
      }
    }
  }
  
  if (!record || now > record.resetTime) {
    // New window - allow and set counter
    rateLimitStore.set(clientIp, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1, resetIn: RATE_LIMIT_WINDOW_MS };
  }
  
  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return { allowed: false, remaining: 0, resetIn: record.resetTime - now };
  }
  
  // Increment counter
  record.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count, resetIn: record.resetTime - now };
}

// Input validation schema
const MessageSchema = z.object({
  role: z.enum(['user', 'assistant', 'system']),
  content: z.string().max(10000, 'Message too long'),
});

const ChatRequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(50),
});

const LEAD_GEN_SYSTEM_PROMPT = `
You are a friendly lead capture assistant for GD Pro Academy. Your PRIMARY goal is to collect contact information FIRST, then help with course details.

## CONVERSATION FLOW (Follow This Order!)

### Step 1: Greeting (Keep it SHORT - 1-2 sentences max)
"Hi! 👋 Welcome to GD Pro Academy. What brings you here today?"

### Step 2: After they respond, ask for NAME
"Great! What's your name?"

### Step 3: Ask for EMAIL  
"Nice to meet you, [Name]! What's your email address so I can send you relevant information?"

### Step 4: Ask for PHONE
"Thanks! And your phone number with country code? (This helps for quick follow-up)"

### Step 5: Ask about INTEREST AREA
"Perfect! Which area interests you most?
- Sales Training
- Soft Skills  
- Communication
- Team Building
- Other"

### Step 6: Corporate or Individual?
"Are you looking for corporate training for a team, or individual coaching?"

### Step 7: AFTER Getting Info - Provide Value
"Thanks [Name]! 🎯 Based on your interest in [area], I'd recommend our [specific program]. Someone from our team will reach out soon!

Book a free consultation: cal.com/gdproacademy
Or call: +91 8356 837052"

## RESPONSE RULES
- Keep EVERY response to 2-3 sentences MAX
- Be warm and conversational, not salesy
- Don't provide detailed course info UNTIL you have name + email minimum
- If they ask questions before sharing info: "I'd love to help! Quick question first - what's your name?"
- After info collected, answer any questions helpfully

## Quick Facts (only share AFTER lead capture)
- 14+ years BFSI & training experience
- 4,500+ professionals trained
- Corporate: Sales, Soft Skills, Team Building
- Individual Programs: 1-on-1 coaching, mentoring, structured guided learning
- Contact: +91 8356 837052
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Get client IP for rate limiting
  const clientIp = getClientIp(req);
  
  // Check rate limit
  const rateLimit = checkRateLimit(clientIp);
  if (!rateLimit.allowed) {
    console.log(`Rate limit exceeded for IP: ${clientIp.substring(0, 8)}***`);
    return new Response(
      JSON.stringify({ error: SAFE_ERROR_MESSAGES.RATE_LIMIT }),
      { 
        status: 429, 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json',
          'Retry-After': Math.ceil(rateLimit.resetIn / 1000).toString(),
        } 
      }
    );
  }

  try {
    // Parse and validate input
    const requestData = await req.json();
    
    let validatedData;
    try {
      validatedData = ChatRequestSchema.parse(requestData);
    } catch (validationError) {
      console.error('Validation error:', validationError);
      return new Response(
        JSON.stringify({ error: SAFE_ERROR_MESSAGES.VALIDATION_ERROR }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { messages } = validatedData;
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: SAFE_ERROR_MESSAGES.AI_ERROR }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('AI Chat request received, message count:', messages?.length, 'IP:', clientIp.substring(0, 8) + '***');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: LEAD_GEN_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: SAFE_ERROR_MESSAGES.RATE_LIMIT }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: SAFE_ERROR_MESSAGES.SERVICE_UNAVAILABLE }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: SAFE_ERROR_MESSAGES.AI_ERROR }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });

  } catch (error) {
    // Log detailed error for debugging (server-side only)
    console.error('AI Chat error:', error);
    
    // Return generic error message to client
    return new Response(
      JSON.stringify({ error: SAFE_ERROR_MESSAGES.DEFAULT }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
