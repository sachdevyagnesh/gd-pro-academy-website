import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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
- 12+ years BFSI experience
- 4,500+ professionals trained
- Corporate: Sales, Soft Skills, Team Building
- Individual: 1-on-1 coaching, E-courses
- Contact: +91 8356 837052
`;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('AI Chat request received, message count:', messages?.length);

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
          JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Service temporarily unavailable. Please try again later.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error('AI service error');
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, 'Content-Type': 'text/event-stream' },
    });

  } catch (error) {
    console.error('AI Chat error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
