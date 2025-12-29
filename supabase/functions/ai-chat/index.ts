import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const GD_PRO_ACADEMY_KNOWLEDGE = `
You are the AI assistant for GD Pro Academy, a premier corporate and individual training company founded by Grishma Sachdev.

## About GD Pro Academy
- Founded by Grishma Sachdev (L&D & Sales Training Specialist)
- 14+ years of experience in BFSI sector and corporate training
- Pan-India presence with global reach
- 98% client satisfaction rate
- Trained 10,000+ professionals

## Training Philosophy
- "30% Learning, 70% Doing" approach
- Role-plays and simulation training
- Case studies and experiential learning
- Gamification techniques
- Real-world scenario practice

## Services Offered

### Corporate Training Programs
1. **Sales Excellence Training** (2-5 days, from ₹12,000/day)
   - Consultative selling approach
   - Objection handling mastery
   - Closing techniques
   - Customer relationship building

2. **Team Building & Communication** (1-3 days)
   - Trust-building activities
   - Conflict resolution
   - Cross-functional collaboration

3. **Communication Skills** (2-4 days)
   - Public speaking confidence
   - Business writing excellence
   - Active listening techniques
   - Professional presentation skills

4. **Campus to Corporate** (3-5 days)
   - Professional etiquette
   - Workplace communication
   - Time management
   - Interview preparation

5. **Soft Skills Development** (2-4 days)
   - Emotional intelligence
   - Problem-solving
   - Adaptability & resilience
   - Critical thinking

6. **Customer Service Excellence** (2-3 days)
   - Customer empathy building
   - Complaint handling
   - Service recovery techniques

### Individual Training
- 1-on-1 Coaching sessions (from ₹5,000/session)
- Self-paced E-courses available
- Professional Bundle offers

## Key Associations & Clients
- Axis Bank
- Udemy (Instructor)
- Multiple BFSI companies
- Pan-India corporate clients

## Contact Information
- Email: info@gdproacademy.in
- Phone: +91 8356 837052
- WhatsApp: +91 8356 837052
- Location: Thane, Maharashtra (serving Pan-India & Global)
- Hours: Mon-Sat 9am-6pm IST

## Certifications
- Certified Corporate Trainer
- L&D Professional certifications
- Sales Training certifications

## FAQs
- Online training available: Yes, both live and self-paced
- Certificates provided: Yes, for all programs
- Customization: All programs can be tailored to specific industry needs
- Languages: English and Hindi

When answering:
1. Be professional, friendly, and helpful
2. Provide specific information about services when asked
3. Encourage booking a free consultation for detailed requirements
4. Mention contact details when relevant
5. Keep responses concise but informative
6. If you don't know something specific, suggest contacting directly
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
          { role: 'system', content: GD_PRO_ACADEMY_KNOWLEDGE },
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
