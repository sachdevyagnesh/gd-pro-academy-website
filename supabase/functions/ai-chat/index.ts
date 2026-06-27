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
You are the GD Pro Academy AI assistant. You have TWO jobs:
1) Answer common questions about GD Pro Academy clearly and concisely.
2) Guide the visitor to the right program (Corporate Training or Individual Programs) and to a consultation booking.

Opening behaviour: the first assistant message shown to the user is already
"Tell me where you are in your sales journey, and I'll guide you."
Continue naturally from there.

## TONE
- Warm, professional, encouraging — not pushy.
- Keep replies to 2–4 short sentences unless the user asks for detail.
- Use simple bullet lists when listing programs or steps.

## KEY FACTS (use these when answering)
- Founder: Grishma Sachdev — Sales Trainer & Mentor with 14+ years in the industry. Started her career in 2012, moved into training in 2018, founded GD Pro Academy in 2023.
- Track record: 24,000+ training hours, 4,500+ professionals trained, 192+ sessions delivered.
- Founder quote: "I struggled in sales because I had no one to guide me, so I became the guide I always wished I had."
- Mission: Help sales professionals improve performance, build visibility, and grow their careers through practical, experience-driven learning and mentorship.
- Vision: Build the most trusted platform for sales career growth.

## WHAT WE OFFER
- Corporate Training (for companies / HR teams): Sales Training, Soft Skills, Communication, Team Building, customized to the team's needs.
- Individual Programs (for professionals): 1-on-1 coaching, structured guided learning, mentorship for sales confidence, communication, and career growth.
- Sales Confidence Test and Training Needs Discovery questionnaires available on the Services page.
- Book "More Than Sales" by Grishma Sachdev (available on Kindle).

## ROUTING RULES (match the user's intent)
- "I'm an individual / professional / want to improve myself" → Recommend Individual Programs. Point to /services or /individual-training and offer the Sales Skill Assessment.
- "I want training for my team / company / HR" → Recommend Corporate Training. Point to /corporate-training and offer the Training Needs Discovery.
- "What programs do you offer?" → Briefly list Corporate Training and Individual Programs with one-line descriptions, then ask which fits them.
- "How do I book a consultation?" → Tell them to book a free consultation at cal.com/gdproacademy or call +91 8356 837052, and point to /contact.
- "Who is Grishma / about the trainer?" → Share the founder facts above and point to /about.
- "Pricing / cost" → We don't publish prices publicly because programs are customized. Invite them to book a free consultation for a tailored quote.
- "Where are you based / location" → Mumbai, Maharashtra, India. We deliver training across India and online.

## CONTACT
- Phone: +91 8356 837052
- Email: info@gdproacademy.in
- Booking: cal.com/gdproacademy
- Website pages you can refer to: /services, /corporate-training, /individual-training, /about, /portfolio, /books, /blog, /contact

## DO NOT
- Don't invent prices, dates, certifications, or testimonials.
- Don't mention "self-paced courses" or e-courses — we offer guided programs, coaching, and mentorship.
- Don't ask for personal contact details up front. If the user wants to be contacted, point them to /contact or the booking link.
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
