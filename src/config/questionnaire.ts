// Questionnaire Configuration
// This file contains all questions, scoring logic, and recommendations
// Edit this file to modify the questionnaires without changing code

export interface QuestionOption {
  text: string;
  score: number;
}

export interface Question {
  id: string;
  question: string;
  options: QuestionOption[];
}

export interface ScoreRange {
  min: number;
  max: number;
  level: "low" | "medium" | "high";
  title: string;
  description: string;
  recommendation: string;
  program: string;
}

export interface QuestionnaireConfig {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  targetAudience: string;
  questions: Question[];
  scoreRanges: ScoreRange[];
  maxScore: number;
}

// Corporate Questionnaire
export const corporateQuestionnaire: QuestionnaireConfig = {
  id: "corporate",
  title: "Training Needs Discovery",
  subtitle: "Let's Understand Your Team's Development Goals",
  description: "As your training partner, we'd like to understand your organization's current capabilities and goals. This helps us recommend the most effective program for your team.",
  targetAudience: "HR Managers, Team Leaders, Business Owners",
  maxScore: 10,
  questions: [
    {
      id: "c1",
      question: "How confident is your sales team in handling customer objections?",
      options: [
        { text: "Very confident - they handle objections smoothly", score: 10 },
        { text: "Somewhat confident - occasional struggles", score: 7 },
        { text: "Not very confident - often lose deals to objections", score: 4 },
        { text: "Not confident at all - major area of concern", score: 1 },
      ],
    },
    {
      id: "c2",
      question: "How would you rate your team's communication skills in client meetings?",
      options: [
        { text: "Excellent - clear, persuasive, and professional", score: 10 },
        { text: "Good - generally effective with some gaps", score: 7 },
        { text: "Average - room for significant improvement", score: 4 },
        { text: "Below average - frequent miscommunication issues", score: 1 },
      ],
    },
    {
      id: "c3",
      question: "How effective is your team at closing deals?",
      options: [
        { text: "Very effective - high conversion rates", score: 10 },
        { text: "Moderately effective - average conversion", score: 7 },
        { text: "Somewhat ineffective - below target conversion", score: 4 },
        { text: "Ineffective - struggling to meet targets", score: 1 },
      ],
    },
    {
      id: "c4",
      question: "How well does your team collaborate across departments?",
      options: [
        { text: "Excellent collaboration - seamless teamwork", score: 10 },
        { text: "Good collaboration - occasional silos", score: 7 },
        { text: "Poor collaboration - frequent conflicts", score: 4 },
        { text: "No collaboration - departments work in isolation", score: 1 },
      ],
    },
    {
      id: "c5",
      question: "How confident are team members in giving presentations?",
      options: [
        { text: "Very confident - engaging and impactful", score: 10 },
        { text: "Somewhat confident - could be more polished", score: 7 },
        { text: "Not very confident - nervous and unclear", score: 4 },
        { text: "Avoid presentations altogether", score: 1 },
      ],
    },
    {
      id: "c6",
      question: "How effectively does your team handle difficult customer conversations?",
      options: [
        { text: "Very effectively - turns complaints into opportunities", score: 10 },
        { text: "Moderately - manages most situations", score: 7 },
        { text: "Struggles - often escalates situations", score: 4 },
        { text: "Poorly - customer complaints are a major issue", score: 1 },
      ],
    },
    {
      id: "c7",
      question: "How would you rate your team's ability to build client relationships?",
      options: [
        { text: "Excellent - strong, lasting relationships", score: 10 },
        { text: "Good - relationships but could be deeper", score: 7 },
        { text: "Average - transactional relationships only", score: 4 },
        { text: "Poor - difficulty retaining clients", score: 1 },
      ],
    },
    {
      id: "c8",
      question: "How proactive is your team in following up with prospects?",
      options: [
        { text: "Very proactive - consistent, timely follow-ups", score: 10 },
        { text: "Moderately proactive - sometimes delayed", score: 7 },
        { text: "Reactive - only follows up when reminded", score: 4 },
        { text: "Minimal follow-up - loses many opportunities", score: 1 },
      ],
    },
    {
      id: "c9",
      question: "How well does your team adapt to changing market conditions?",
      options: [
        { text: "Very adaptable - quick to pivot strategies", score: 10 },
        { text: "Somewhat adaptable - adjusts with guidance", score: 7 },
        { text: "Slow to adapt - resistant to change", score: 4 },
        { text: "Not adaptable - stuck in old ways", score: 1 },
      ],
    },
    {
      id: "c10",
      question: "What is your primary training goal for your team?",
      options: [
        { text: "Fine-tune advanced skills", score: 10 },
        { text: "Build intermediate capabilities", score: 7 },
        { text: "Establish foundational skills", score: 4 },
        { text: "Complete transformation needed", score: 1 },
      ],
    },
  ],
  scoreRanges: [
    {
      min: 0,
      max: 4,
      level: "low",
      title: "Foundational Training Recommended",
      description: "Your team would benefit from comprehensive foundational training to build core sales and communication skills.",
      recommendation: "We recommend our Sales Excellence Training combined with Soft Skills Development to establish strong fundamentals for your team.",
      program: "Sales Excellence Training + Soft Skills Development",
    },
    {
      min: 4.1,
      max: 7,
      level: "medium",
      title: "Intermediate Development Recommended",
      description: "Your team has good basics but needs focused development in specific areas to reach peak performance.",
      recommendation: "We recommend our Sales Excellence Training or Team Building & Communication program to address specific skill gaps and elevate performance.",
      program: "Sales Excellence Training / Team Building & Communication",
    },
    {
      min: 7.1,
      max: 10,
      level: "high",
      title: "Advanced Mastery Recommended",
      description: "Your team is performing well! Fine-tune their skills with advanced techniques and role-play based training.",
      recommendation: "We recommend our Sales Excellence Training with intensive role-play sessions, complemented by Team Building & Communication.",
      program: "Sales Excellence Training / Team Building & Communication",
    },
  ],

};

// Individual/Professional Questionnaire
export const individualQuestionnaire: QuestionnaireConfig = {
  id: "individual",
  title: "Professional Skills Assessment",
  subtitle: "Discover Your Growth Areas",
  description: "Answer these questions to understand your current skill level and get personalized program recommendations.",
  targetAudience: "Professionals aged 18-40 seeking career growth",
  maxScore: 10,
  questions: [
    {
      id: "i1",
      question: "How confident do you feel when speaking in meetings or presentations?",
      options: [
        { text: "Very confident - I speak up easily and clearly", score: 10 },
        { text: "Somewhat confident - I can manage most situations", score: 7 },
        { text: "Not very confident - I often hesitate to speak", score: 4 },
        { text: "Not confident at all - I avoid speaking up", score: 1 },
      ],
    },
    {
      id: "i2",
      question: "How well do you handle rejection or objections in sales/client situations?",
      options: [
        { text: "Very well - I see them as opportunities", score: 10 },
        { text: "Fairly well - I recover quickly", score: 7 },
        { text: "With difficulty - rejection affects my confidence", score: 4 },
        { text: "Poorly - I take rejection personally", score: 1 },
      ],
    },
    {
      id: "i3",
      question: "How effective are you at building professional relationships?",
      options: [
        { text: "Very effective - I have a strong network", score: 10 },
        { text: "Moderately effective - I connect with some people", score: 7 },
        { text: "Not very effective - networking feels awkward", score: 4 },
        { text: "Ineffective - I struggle to connect professionally", score: 1 },
      ],
    },
    {
      id: "i4",
      question: "How well do you communicate your ideas to colleagues and clients?",
      options: [
        { text: "Very well - clear, concise, and persuasive", score: 10 },
        { text: "Fairly well - usually understood", score: 7 },
        { text: "With some difficulty - often misunderstood", score: 4 },
        { text: "Poorly - frequent miscommunication", score: 1 },
      ],
    },
    {
      id: "i5",
      question: "How confident are you in closing deals or achieving desired outcomes in negotiations?",
      options: [
        { text: "Very confident - I close most opportunities", score: 10 },
        { text: "Somewhat confident - I succeed more often than not", score: 7 },
        { text: "Not very confident - I often fall short", score: 4 },
        { text: "Not confident - I rarely achieve my targets", score: 1 },
      ],
    },
    {
      id: "i6",
      question: "How well do you handle pressure and stress at work?",
      options: [
        { text: "Very well - I thrive under pressure", score: 10 },
        { text: "Fairly well - I manage most stressful situations", score: 7 },
        { text: "With difficulty - stress affects my performance", score: 4 },
        { text: "Poorly - pressure overwhelms me", score: 1 },
      ],
    },
    {
      id: "i7",
      question: "How proactive are you in following up on opportunities?",
      options: [
        { text: "Very proactive - I never let opportunities slip", score: 10 },
        { text: "Moderately proactive - I follow up on most things", score: 7 },
        { text: "Reactive - I only follow up when reminded", score: 4 },
        { text: "Not proactive - I often forget to follow up", score: 1 },
      ],
    },
    {
      id: "i8",
      question: "How effective are you at time management and meeting deadlines?",
      options: [
        { text: "Very effective - always organized and on time", score: 10 },
        { text: "Fairly effective - usually meet deadlines", score: 7 },
        { text: "Sometimes struggle - occasional missed deadlines", score: 4 },
        { text: "Often struggle - frequently miss deadlines", score: 1 },
      ],
    },
    {
      id: "i9",
      question: "How would you rate your interview and self-presentation skills?",
      options: [
        { text: "Excellent - I present myself confidently", score: 10 },
        { text: "Good - I can make a decent impression", score: 7 },
        { text: "Average - I get nervous in interviews", score: 4 },
        { text: "Below average - interviews are very stressful", score: 1 },
      ],
    },
    {
      id: "i10",
      question: "What best describes your career development approach?",
      options: [
        { text: "Proactive - I continuously seek growth", score: 10 },
        { text: "Active - I take opportunities when they come", score: 7 },
        { text: "Passive - I wait for things to happen", score: 4 },
        { text: "Stagnant - I'm stuck in my current position", score: 1 },
      ],
    },
    {
      id: "i11",
      question: "How well do you handle difficult conversations at work?",
      options: [
        { text: "Very well - I navigate them confidently", score: 10 },
        { text: "Fairly well - I can manage most situations", score: 7 },
        { text: "With difficulty - I avoid confrontation", score: 4 },
        { text: "Poorly - difficult conversations stress me out", score: 1 },
      ],
    },
    {
      id: "i12",
      question: "How clear are you about your career goals?",
      options: [
        { text: "Very clear - I have a detailed plan", score: 10 },
        { text: "Somewhat clear - I have general direction", score: 7 },
        { text: "Not very clear - I'm exploring options", score: 4 },
        { text: "Not clear at all - I feel lost", score: 1 },
      ],
    },
  ],
  scoreRanges: [
    {
      min: 0,
      max: 4,
      level: "low",
      title: "Foundation Building Recommended",
      description: "You would benefit from comprehensive training to build strong foundational skills in sales, communication, and professional development.",
      recommendation: "We recommend our Communication Excellence or Sales Skills Training program to establish a solid foundation for your career growth.",
      program: "Communication Excellence / Sales Skills Training",
    },
    {
      min: 4.1,
      max: 7,
      level: "medium",
      title: "Skill Enhancement Recommended",
      description: "You have good fundamentals! Focus on specific areas to take your career to the next level.",
      recommendation: "We recommend our Career Advancement Program or Sales Skills Training to address specific skill gaps.",
      program: "Career Advancement Program / Sales Skills Training",
    },
    {
      min: 7.1,
      max: 10,
      level: "high",
      title: "Advanced Development Recommended",
      description: "You're performing well! Fine-tune your skills with advanced techniques and targeted preparation.",
      recommendation: "We recommend our Interview Preparation Workshop or Career Advancement Program for targeted, advanced skill development.",
      program: "Interview Preparation Workshop / Career Advancement Program",
    },
  ],
};

// Sales Confidence Test (Secondary, shorter assessment)
export const salesConfidenceTest: QuestionnaireConfig = {
  id: "sales-confidence",
  title: "Sales Confidence Test",
  subtitle: "How Confident Are You in Sales?",
  description: "Take this quick 5-question test to discover your sales confidence level and get personalized recommendations.",
  targetAudience: "Sales professionals, entrepreneurs, client-facing roles",
  maxScore: 100,
  questions: [
    {
      id: "sc1",
      question: "You're about to call a high-value prospect. How do you feel?",
      options: [
        { text: "Excited and ready to have a great conversation", score: 100 },
        { text: "A bit nervous but prepared", score: 75 },
        { text: "Anxious and hoping they don't answer", score: 50 },
        { text: "Dreading it and might delay the call", score: 25 },
      ],
    },
    {
      id: "sc2",
      question: "A client says 'Your price is too high.' What's your reaction?",
      options: [
        { text: "I see this as an opportunity to demonstrate value", score: 100 },
        { text: "I feel slightly uncomfortable but have prepared responses", score: 75 },
        { text: "I start thinking about offering discounts immediately", score: 50 },
        { text: "I panic and often lose the deal", score: 25 },
      ],
    },
    {
      id: "sc3",
      question: "After three rejections in a row, how do you feel?",
      options: [
        { text: "Motivated - each 'no' gets me closer to a 'yes'", score: 100 },
        { text: "Slightly down but I bounce back quickly", score: 75 },
        { text: "Discouraged and my performance drops", score: 50 },
        { text: "Ready to give up for the day", score: 25 },
      ],
    },
    {
      id: "sc4",
      question: "When presenting to a group of decision-makers, you...",
      options: [
        { text: "Feel in your element and enjoy the challenge", score: 100 },
        { text: "Are professional but feel some nervousness", score: 75 },
        { text: "Often lose your train of thought", score: 50 },
        { text: "Avoid such situations whenever possible", score: 25 },
      ],
    },
    {
      id: "sc5",
      question: "When it's time to ask for the sale/close the deal, you...",
      options: [
        { text: "Confidently ask for the business", score: 100 },
        { text: "Sometimes hesitate but eventually ask", score: 75 },
        { text: "Often wait for the client to bring it up", score: 50 },
        { text: "Rarely ask directly - it feels too pushy", score: 25 },
      ],
    },
  ],
  scoreRanges: [
    {
      min: 0,
      max: 50,
      level: "low",
      title: "Sales Confidence Needs Work",
      description: "Your sales confidence could use a significant boost. The good news? This is a skill that can be developed!",
      recommendation: "We recommend our Sales Skills Training program with intensive role-play sessions to build your confidence from the ground up.",
      program: "Sales Skills Training",
    },
    {
      min: 51,
      max: 75,
      level: "medium",
      title: "Solid Foundation, Room to Grow",
      description: "You have a decent foundation but there's room to elevate your confidence to the next level.",
      recommendation: "Our Career Advancement Program would help you overcome specific barriers and boost your closing confidence.",
      program: "Career Advancement Program",
    },
    {
      min: 76,
      max: 100,
      level: "high",
      title: "High Sales Confidence!",
      description: "Congratulations! You show strong sales confidence. Fine-tune your skills to become even more effective.",
      recommendation: "Consider our Interview Preparation Workshop or Career Advancement Program for advanced techniques and strategies.",
      program: "Interview Preparation Workshop / Career Advancement Program",
    },
  ],
};

// Discount configuration
export const discountConfig = {
  enabled: true,
  threshold: 50, // Score percentage above which discount is shown
  discountPercentage: 15,
  couponCode: "GDPRO15",
  validDays: 7,
  message: "Congratulations! You've unlocked an exclusive discount.",
};

// Calculate score from answers
export function calculateScore(
  answers: Record<string, number>,
  config: QuestionnaireConfig
): { score: number; percentage: number; range: ScoreRange } {
  const totalQuestions = config.questions.length;
  const maxPossible = totalQuestions * 10; // Assuming max score per question is 10
  
  const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
  const averageScore = totalScore / totalQuestions;
  const percentage = (totalScore / maxPossible) * 100;
  
  // For sales confidence test, use percentage-based scoring
  const scoreToCompare = config.id === "sales-confidence" ? percentage : averageScore;
  
  const range = config.scoreRanges.find(
    (r) => scoreToCompare >= r.min && scoreToCompare <= r.max
  ) || config.scoreRanges[0];

  return {
    score: config.id === "sales-confidence" ? Math.round(percentage) : parseFloat(averageScore.toFixed(1)),
    percentage: Math.round(percentage),
    range,
  };
}
