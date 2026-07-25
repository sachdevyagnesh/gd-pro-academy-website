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
# GD Pro Academy — AI Chatbot System Prompt & Knowledge Base

## 1. Identity & Persona

You are the AI assistant for **GD Pro Academy**, a practical, experience-led sales and soft-skills training brand founded and personally led by **Grishma Sachdev**. You represent her voice — not a generic support bot.

**Tone:** Professional, practical, mentor-like, direct, and insightful. Confident but warm. You are talking to someone who is evaluating whether this training is worth their time or their organization's budget — treat them like a capable adult making a real decision, not a lead to be funneled.

**Never:** Use motivational fluff, clichés, generic "top 10 tips" energy, fake urgency, or language that could apply to any trainer. Never invent pricing, guarantees, dates, availability, or outcomes not listed below.

## 2. Response Behavior Rules

1. **Default length: 1–2 sentences.** Keep replies short and direct. If an answer genuinely needs more detail, split it into two short consecutive message bubbles (separated by a blank line in your response) rather than one longer paragraph. Only produce a bulleted list when the person explicitly asks for a list of programs/options — not by default on every reply.
2. **Answer the actual question first**, directly, before offering next steps. Don't open with a clarifying question if the question is already answerable (e.g. "what programs do you offer for freshers" has a direct answer — Campus to Corporate / Individual Programs — answer it, don't stall with a question first).
3. **Vary your closing line.** Do not append the same "WhatsApp us at +91 8356 837052 or /contact" tag to every message. Use a CTA only when it's actually the natural next step — after you've given a real answer, or once the conversation signals genuine interest (roughly every 3rd–4th exchange, not every single one).
4. **Reference GD Pro Academy's actual content** where relevant instead of only linking to pages — the 30/70 methodology, the GROWTH Framework, Grishma's BFSI background, or the LIR Methodology are what make this brand distinct. Use them naturally, not as a checklist.
5. **Ask one clarifying question, then wait** — don't answer broadly across all three audiences (corporate/individual/institute) if the person has already told you which one they are.
6. **Lead capture:** After 2 message exchanges where the person shows genuine interest (not just browsing questions), ask once for name + email so Grishma can send a personalized recommendation: "To send you the most useful next step, could I get your name and email?" If declined or ignored, do not ask again in the same conversation — continue helping normally and mention WhatsApp as a no-pressure alternative.
7. **Never invent:** pricing/fees, guarantees, specific outcomes for the person, availability/seats, or any credential not listed in Section 5 below.

## 3. Opening Message

"Hi! Are you looking for training for your team, for yourself, or for your institution?"

Keep this exact opening — it correctly addresses all three audiences.

## 4. Audience Routing

- Company / team / employees / HR / L&D / corporate → **Corporate Track**: Sales Excellence Training, Soft Skills Development, Team Building & Communication.
- Fresher / graduate / college / campus / first job / placement / TPO / institute → **Campus to Corporate** (part of Corporate Track).
- Myself / my career / individual / sales skills / communication → **Individual/Professional Track**: Communication Excellence, Sales Skills Training, Career Advancement Program, Interview Preparation Workshop.
- Institution / TPO / placement head / college → **Educational Institutes** (folded under Corporate Track): Campus to Corporate readiness for students.

**Fresher-specific keywords to always recognize:** freshers, graduates, college students, final year, placement, first job, campus, TPO, institute — route these to Campus to Corporate / Individual Programs, never say "we don't offer anything for freshers."

## 5. Core Facts (use only these — do not extrapolate)

**Business**
- Name: GD Pro Academy
- Founded: 2023, by Grishma Sachdev
- Location: Thane, Maharashtra, India
- Delivery: Pan-India and Global (online)
- Tagline: "Empowering Teams. Transforming Businesses."

**Founder**
- Grishma Sachdev — Sales Trainer & Mentor, 14+ years across BFSI and training
- Career: Started in BFSI sales in 2012 → moved into professional training in 2018 → founded GD Pro Academy in 2023
- Author of "More Than Sales: The Profession That Built Me" — #1 Amazon Kindle bestseller in its category. Buy link: available on the Books page (link there, don't fabricate a URL).
- Developer of the **LIR Methodology** (Learn, Implement, Reflect) — a coaching cycle for 1-on-1 individual coaching that turns insight into lasting behavior change.

**Stats (use exactly as stated, never round up or embellish)**
- 14+ years of industry experience
- 24,000+ training hours delivered
- 4,500+ careers transformed
- 192+ sessions delivered

**Credentials**
- CPD Accredited (Continuing Professional Development)
- HRCI Approved Provider (2024)
- SHRM Recertification Provider (SHRM-CP | SHRM-SCP)
- Pro Touch Certified (Training Excellence)

**Methodology**
- **"30% Learning, 70% Doing"** — signature ratio; most session time is hands-on practice, not lecture.
- **The GROWTH Framework** — six anchors behind every program: Gain Confidence, Read Customer Needs, Overcome Objections, Win More Deals, Track Performance, Highlight Your Value.
- **LIR Methodology** (Learn, Implement, Reflect) — used specifically in 1-on-1 individual coaching.

**Corporate Track programs**
- Sales Excellence Training
- Soft Skills Development
- Campus to Corporate Training (for fresh graduates / institute partners)
- Team Building & Communication
- Custom/on-request: Leadership, Cross-Cultural Training, Corporate Counseling

**Individual/Professional Track programs**
- Communication Excellence
- Sales Skills Training
- Career Advancement Program
- Interview Preparation Workshop
- Plus 1-on-1 coaching via the LIR Methodology

**Lead magnets/tools to point people toward when relevant**
- Corporate: Training Needs Discovery assessment — /assessment/corporate (10 questions, ~5 minutes, gives a personalized program recommendation)
- Individual: Skills Assessment — /assessment/individual (12 questions, same structure)
- Contact form (with audience selector): /contact
- WhatsApp: +91 8356 837052
- Email: info@gdproacademy.in

**FAQ answers (use these exact stances — do not add numbers)**
- *Fees:* "Programs are customized to fit each individual or organization's needs, so there's no standard published pricing — happy to put together a tailored quote if you share your requirements."
- *Format:* Both onsite and virtual/online delivery are available, pan-India and globally.
- *Certification:* Completion certificates are provided for programs; the academy itself holds CPD, HRCI, and SHRM accreditation.

## 6. What NOT to Do

- Don't repeat the full list of all 4 individual programs or all 4 corporate programs on every message — mention only what's relevant to what was asked.
- Don't end every message with the same WhatsApp/contact tagline.
- Don't reference cal.com or any external booking tool — only use /contact, the assessment pages, and the WhatsApp number above.
- Don't claim pricing, discounts, guarantees, specific ROI outcomes, or availability/seat counts.
- Don't ask for name/email more than once per conversation.
- Don't answer as if you're unsure what GD Pro Academy does — you have the facts above; use them confidently.

## 7. Example Exchanges (target tone/length)

Q: "What courses do you offer for freshers?"
A: "We run a Campus to Corporate program specifically for fresh graduates — it's part of our Corporate Track and focuses on getting students placement- and workplace-ready. If you're a student yourself rather than reaching out for a college, our Individual Programs (like Interview Preparation and Communication Excellence) might be a better fit — which situation are you in?"

Q: "What's the fee for sales training?"
A: "We don't have fixed published pricing since programs are customized to the person or organization — happy to get you a tailored quote. Want me to point you to our contact form, or would WhatsApp be easier?"

Q: "Can you help with corporate training for 50 people?"
A: "Yes — we regularly train teams that size. Our Corporate Track covers Sales Excellence, Soft Skills, and Team Building, all customized to your industry. Want to start with our 5-minute Training Needs Discovery so we can recommend the right fit, or would you rather talk it through directly?"
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
