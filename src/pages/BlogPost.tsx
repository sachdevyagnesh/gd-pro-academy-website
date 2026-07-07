import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import heroBg from "@/assets/hero-bg-3.jpg";

// Blog posts data - easily editable configuration
export const blogPostsData = [
  {
    slug: "essential-sales-skills-2024",
    title: "5 Essential Sales Skills Every Professional Needs",
    excerpt: "Discover the key skills that separate top performers from the rest in today's competitive market.",
    date: "December 15, 2024",
    category: "Sales Training",
    readTime: "6 min read",
    author: "Grishma Sachdev",
    featured: true,
    content: `
## Introduction

In today's rapidly evolving business landscape, sales professionals face unprecedented challenges. The skills that worked five years ago may no longer be sufficient to close deals and build lasting client relationships. Here are the five essential skills every sales professional needs to master in 2024.

## 1. Consultative Selling

Gone are the days of hard selling. Today's buyers are informed and prefer to work with sales professionals who understand their unique challenges. Consultative selling involves:

- **Active Listening**: Understanding the client's pain points before proposing solutions
- **Asking the Right Questions**: Uncovering hidden needs and priorities
- **Providing Value**: Offering insights and expertise, not just products

## 2. Digital Communication Mastery

With remote work becoming the norm, sales professionals must excel in digital communication:

- Virtual presentation skills
- Email communication that converts
- LinkedIn and social selling techniques
- Video conferencing etiquette

## 3. Emotional Intelligence

Understanding and managing emotions—both your own and your clients'—is crucial for:

- Building trust and rapport
- Handling objections gracefully
- Navigating difficult conversations
- Reading non-verbal cues in virtual settings

## 4. Data-Driven Decision Making

Modern sales requires understanding and leveraging data:

- CRM analytics and insights
- Customer behavior patterns
- Market trends and competitive analysis
- Performance metrics and KPIs

## 5. Resilience and Adaptability

The sales landscape is constantly changing. Top performers demonstrate:

- Ability to handle rejection positively
- Quick adaptation to new tools and processes
- Continuous learning mindset
- Stress management techniques

## Conclusion

Mastering these five skills will set you apart in 2024's competitive sales environment. At GD Pro Academy, we offer comprehensive training programs that help professionals develop these essential competencies through practical, hands-on learning.

Ready to elevate your sales skills? [Contact us](/contact) to learn about our upcoming training sessions.
    `,
  },
  {
    slug: "campus-to-corporate-transition",
    title: "How to Successfully Transition from Campus to Corporate",
    excerpt: "A comprehensive guide for fresh graduates entering the corporate world.",
    date: "December 8, 2024",
    category: "Career Development",
    readTime: "8 min read",
    author: "Grishma Sachdev",
    content: `
## The Big Leap

Transitioning from the academic world to a corporate environment is one of the most significant shifts in a young professional's life. This guide will help you navigate this journey successfully.

## Understanding Corporate Culture

The corporate world operates differently from campus life:

- **Hierarchy and Structure**: Understanding reporting lines and organizational structure
- **Professional Communication**: Formal emails, meetings, and presentations
- **Time Management**: Meeting deadlines and managing multiple priorities
- **Dress Code**: Professional attire appropriate for your industry

## Essential Skills for New Graduates

### Communication Skills
- Clear and concise verbal communication
- Professional email writing
- Presentation skills
- Active listening

### Workplace Etiquette
- Punctuality and attendance
- Meeting behavior and participation
- Office relationships and networking
- Handling feedback constructively

### Technical Adaptability
- Learning new software and tools quickly
- Embracing digital collaboration platforms
- Continuous skill development

## Common Challenges and Solutions

### Challenge 1: Imposter Syndrome
Many new graduates feel they don't belong. Remember:
- Everyone starts somewhere
- Asking questions shows initiative
- Your fresh perspective is valuable

### Challenge 2: Work-Life Balance
- Set boundaries early
- Learn to prioritize effectively
- Don't be afraid to ask for help

### Challenge 3: Building Relationships
- Take initiative in networking
- Find mentors in your organization
- Join company activities and groups

## Your First 90 Days Strategy

**Days 1-30**: Learn and Observe
- Understand your role and expectations
- Learn company processes and culture
- Build initial relationships

**Days 31-60**: Contribute
- Start taking on responsibilities
- Ask for feedback regularly
- Identify areas where you can add value

**Days 61-90**: Establish Yourself
- Demonstrate your capabilities
- Seek growth opportunities
- Set long-term career goals

## Conclusion

The transition from campus to corporate doesn't have to be overwhelming. With the right preparation and mindset, you can thrive in your new professional environment.

At GD Pro Academy, our Campus to Corporate program helps thousands of students each year make this transition successfully. [Learn more about our programs](/individual-training).
    `,
  },
  {
    slug: "effective-communication-workplace",
    title: "The Power of Effective Communication in the Workplace",
    excerpt: "Learn how improving your communication skills can accelerate your career growth.",
    date: "November 28, 2024",
    category: "Soft Skills",
    readTime: "5 min read",
    author: "Grishma Sachdev",
    content: `
## Why Communication Matters

Effective communication is the cornerstone of professional success. Whether you're presenting to clients, collaborating with colleagues, or leading a team, your ability to communicate can make or break your career.

## The Elements of Effective Communication

### 1. Clarity
- Know your main message before speaking
- Structure your thoughts logically
- Use simple, direct language
- Avoid jargon unless necessary

### 2. Active Listening
- Give full attention to the speaker
- Ask clarifying questions
- Paraphrase to confirm understanding
- Avoid interrupting

### 3. Non-Verbal Communication
- Maintain appropriate eye contact
- Use open body language
- Match your tone to your message
- Be mindful of cultural differences

## Communication in Different Contexts

### Meetings
- Prepare your points in advance
- Be concise and relevant
- Contribute constructively
- Follow up on action items

### Emails
- Use clear subject lines
- Keep messages brief
- Proofread before sending
- Respond promptly

### Presentations
- Know your audience
- Tell a story
- Use visuals effectively
- Practice, practice, practice

### Difficult Conversations
- Choose the right time and place
- Focus on facts, not emotions
- Listen to understand
- Seek win-win solutions

## Improving Your Communication Skills

1. **Seek Feedback**: Ask colleagues for honest feedback on your communication style
2. **Practice Regularly**: Take every opportunity to present and speak
3. **Record Yourself**: Review your presentations and identify areas for improvement
4. **Read Widely**: Expand your vocabulary and understanding
5. **Take Training**: Invest in professional communication training

## The Impact on Your Career

Strong communicators are:
- More likely to be promoted
- Better at building relationships
- More effective leaders
- Higher performers overall

## Conclusion

Communication is a skill that can be learned and improved. The investment you make in developing your communication abilities will pay dividends throughout your career.

Ready to transform your communication skills? [Explore our Communication Excellence program](/individual-training).
    `,
  },
  {
    slug: "role-play-training-sales",
    title: "Role-Play Training: Why It Works for Sales Teams",
    excerpt: "Discover how simulation-based training helps sales professionals overcome objections and build confidence.",
    date: "November 15, 2024",
    category: "Training Methodology",
    readTime: "7 min read",
    author: "Grishma Sachdev",
    content: `
## The Science Behind Role-Play Training

Role-play training is one of the most effective methods for developing sales skills. But why does it work so well? Let's explore the science and practice behind this powerful training technique.

## Why Traditional Training Falls Short

Lecture-based training has limitations:
- Passive learning leads to low retention
- Theory doesn't translate to practice
- No opportunity to make mistakes safely
- Limited feedback on actual performance

## The Power of Experiential Learning

Role-play training works because:
- **Active Participation**: Learners are engaged and involved
- **Safe Environment**: Mistakes are learning opportunities
- **Immediate Feedback**: Real-time corrections and coaching
- **Muscle Memory**: Physical practice builds confidence

## Key Elements of Effective Role-Play

### 1. Realistic Scenarios
The scenarios should mirror real-world situations:
- Common objections your team faces
- Typical customer personas
- Industry-specific challenges
- Various stages of the sales cycle

### 2. Skilled Facilitation
A good facilitator:
- Creates a safe learning environment
- Provides constructive feedback
- Encourages peer learning
- Adapts scenarios based on participant needs

### 3. Structured Debriefs
After each role-play:
- Discuss what worked well
- Identify areas for improvement
- Share alternative approaches
- Extract key learnings

## Benefits for Sales Teams

### Confidence Building
- Practice reduces anxiety
- Success in role-play builds belief
- Team members support each other

### Skill Development
- Objection handling improves dramatically
- Communication becomes more natural
- Closing techniques are refined

### Team Cohesion
- Shared learning experiences bond teams
- Best practices are exchanged
- Common language and approach develop

## Implementing Role-Play in Your Organization

### Start Small
Begin with simple scenarios and build complexity

### Create Psychological Safety
Ensure team members feel comfortable making mistakes

### Make It Regular
Consistent practice yields better results than occasional sessions

### Use Video Recording
Self-observation accelerates learning

## Real Results from Our Programs

At GD Pro Academy, we've seen remarkable results from role-play training:
- 40% improvement in objection handling
- 35% increase in closing rates
- Significant boost in team confidence

## Conclusion

Role-play training transforms sales teams by bridging the gap between knowing and doing. It's not just about learning what to say—it's about building the confidence to say it effectively.

Interested in role-play training for your team? [Contact us](/contact) to discuss your needs.
    `,
  },
  {
    slug: "high-performance-teams",
    title: "Building High-Performance Teams: A Practical Guide",
    excerpt: "Learn the key elements of team building that actually work.",
    date: "November 1, 2024",
    category: "Team Building",
    readTime: "6 min read",
    author: "Grishma Sachdev",
    content: `
## What Makes a High-Performance Team?

High-performance teams don't happen by accident. They are built through intentional effort, clear processes, and effective leadership. Here's how to create one.

## The Foundation: Trust

Trust is the bedrock of any successful team:
- **Vulnerability-Based Trust**: Team members can admit mistakes and ask for help
- **Reliability**: Everyone delivers on their commitments
- **Transparency**: Open communication about challenges and concerns

### Building Trust
- Start meetings with personal check-ins
- Share failures as well as successes
- Follow through on all commitments
- Address conflicts directly and respectfully

## Clear Goals and Roles

High-performance teams have:
- **Aligned Objectives**: Everyone understands the team's mission
- **Clear Roles**: Each member knows their responsibilities
- **Defined Processes**: Standard ways of working together
- **Measurable Outcomes**: Specific targets to work toward

## Effective Communication

### Regular Rituals
- Daily standups or check-ins
- Weekly team meetings
- Monthly retrospectives
- Quarterly planning sessions

### Open Channels
- Easy access to each other
- Multiple communication methods
- Quick response norms
- Psychological safety to speak up

## Productive Conflict

Healthy teams engage in productive conflict:
- Debate ideas, not people
- Encourage diverse perspectives
- Make decisions and commit
- Disagree and then align

## Accountability

In high-performance teams:
- Everyone holds each other accountable
- Standards are maintained consistently
- Feedback is given regularly
- Results are tracked and discussed

## Focus on Results

The ultimate measure is collective results:
- Team goals take priority over individual goals
- Success is celebrated together
- Failures are analyzed and learned from
- Continuous improvement is the norm

## Team Building Activities That Work

### For Trust Building
- Personal history exercises
- Strengths-based assessments
- Vulnerability circles
- Team meals and social events

### For Communication
- Feedback workshops
- Communication style assessments
- Role-play exercises
- Collaborative problem-solving

### For Alignment
- Vision and values sessions
- Goal-setting workshops
- Strategy offsites
- Cross-functional projects

## Maintaining High Performance

Building a great team is just the beginning. Maintaining performance requires:
- Regular team health checks
- Ongoing development opportunities
- Celebrating wins and learning from losses
- Adapting to changing circumstances

## Conclusion

High-performance teams are built, not born. With the right approach, any team can achieve exceptional results.

Want to transform your team? [Explore our Team Building programs](/corporate-training).
    `,
  },
  {
    slug: "overcoming-fear-of-targets",
    title: "Overcoming the Fear of Targets: A Sales Professional's Journey",
    excerpt: "Real strategies to help sales executives embrace targets as opportunities.",
    date: "October 20, 2024",
    category: "Sales Training",
    readTime: "5 min read",
    author: "Grishma Sachdev",
    content: `
## The Target Pressure Reality

Every sales professional knows the feeling: the weight of targets, the pressure of numbers, the fear of falling short. But what if we could transform this fear into fuel?

## Understanding Target Anxiety

Target anxiety manifests as:
- Procrastination and avoidance
- Negative self-talk
- Physical stress symptoms
- Decreased performance

The irony? The fear of missing targets often causes us to miss targets.

## Reframing Your Relationship with Targets

### From Threat to Challenge
Targets aren't punishments—they're challenges that help us grow. Top performers see targets as:
- Goals to achieve, not threats to avoid
- Measures of progress
- Motivation for improvement
- Opportunities to prove themselves

### From External to Internal
When targets feel imposed, they create resistance. Make them yours:
- Understand why the target matters
- Connect it to your personal goals
- Break it down into meaningful milestones
- Celebrate progress along the way

## Practical Strategies for Target Success

### 1. Daily Activity Focus
Focus on what you can control:
- Number of calls made
- Meetings scheduled
- Proposals sent
- Follow-ups completed

Results follow activities. Control your activities, and results will come.

### 2. Pipeline Management
A healthy pipeline reduces anxiety:
- Know your conversion rates
- Maintain 3x pipeline coverage
- Work deals at all stages
- Regularly clean and update

### 3. Skill Development
Confidence comes from competence:
- Master your product knowledge
- Improve your sales techniques
- Learn objection handling
- Practice presentations

### 4. Mindset Management
- Start each day with intention
- Visualize success
- Use positive affirmations
- Learn from rejections

## Building Resilience

### Handling Rejection
- Don't take it personally
- Ask for feedback
- Learn and improve
- Move on quickly

### Managing Stress
- Regular exercise
- Adequate sleep
- Work-life boundaries
- Support systems

### Celebrating Wins
- Acknowledge every success
- Track your progress
- Reward yourself
- Share with your team

## The Champion's Mindset

Top performers share certain mental characteristics:
- **Growth Mindset**: Believing skills can be developed
- **Optimism**: Expecting positive outcomes
- **Persistence**: Continuing despite setbacks
- **Focus**: Concentrating on what matters

## Conclusion

Targets don't have to be scary. With the right mindset and strategies, they become stepping stones to success. Transform your fear into fuel, and watch your performance soar.

Ready to build your sales confidence? [Join our Sales Excellence program](/individual-training).
    `,
  },
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPostsData.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section data-hero className="pt-32 pb-16 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              
              <span className="inline-block bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('- **')) {
                    const match = paragraph.match(/- \*\*(.+?)\*\*: (.+)/);
                    if (match) {
                      return (
                        <li key={index} className="ml-4 mb-2">
                          <strong>{match[1]}</strong>: {match[2]}
                        </li>
                      );
                    }
                  }
                  if (paragraph.startsWith('- ')) {
                    return <li key={index} className="ml-4 mb-1">{paragraph.replace('- ', '')}</li>;
                  }
                  if (paragraph.trim() === '') return null;
                  return <p key={index} className="mb-4">{paragraph}</p>;
                })}
              </div>

              {/* Inline CTA */}
              <div className="mt-10 rounded-2xl bg-primary/5 border border-primary/20 p-6 text-center">
                <p className="text-lg font-semibold text-foreground mb-3">
                  Ready to build these skills?
                </p>
                <Button variant="navy" asChild>
                  <a
                    href="https://wa.me/918356837052?text=Hi!%20I%20would%20like%20to%20book%20a%20free%20Sales%20Career%20Audit%20with%20Grishma."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Free Career Audit →
                  </a>
                </Button>
              </div>

              {/* Share & CTA */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Share2 className="w-4 h-4" />
                    Share Article
                  </Button>
                  <Button variant="navy" asChild>
                    <Link to="/contact">Get Training Consultation</Link>
                  </Button>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Related Posts CTA */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Read More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore more insights and training tips from our experts.
            </p>
            <Button variant="navy" asChild>
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
