import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroBg from "@/assets/map-cover.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8356 837052",
    href: "tel:+918356837052",
    description: "Mon-Sat 9am-6pm IST",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@gdproacademy.in",
    href: "mailto:info@gdproacademy.in",
    description: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+91 8356 837052",
    href: "https://wa.me/918356837052",
    description: "Quick response guaranteed",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, Maharashtra",
    href: "#",
    description: "Pan-India & Global",
  },
];

const faqs = [
  {
    question: "What types of training do you offer?",
    answer: "We offer both corporate training programs for teams and organizations, as well as individual coaching and development programs. Our specializations include sales training, soft skills development, communication skills, campus to corporate, and team building.",
  },
  {
    question: "Do you provide online training?",
    answer: "Yes, we offer both online and in-person training options. Our online programs include live interactive sessions, self-paced courses, and blended learning approaches to suit different preferences and schedules.",
  },
  {
    question: "How long are the training programs?",
    answer: "Program duration varies based on your needs. We offer everything from intensive 1-day workshops to comprehensive multi-week programs. Individual coaching sessions are typically 60-90 minutes each.",
  },
  {
    question: "What is your training methodology?",
    answer: "Our training approach follows '30% Learning, 70% Doing' - we use role-plays, simulation training, case studies, experiential learning, and gamification to ensure effective learning and real-world skill transfer.",
  },
  {
    question: "Do you provide certificates?",
    answer: "Yes, participants receive certificates of completion for all our training programs. Corporate clients also receive detailed training reports and assessment summaries for their records.",
  },
  {
    question: "What are your training fees?",
    answer: "Training fees vary based on the program type, duration, and customization level. Corporate programs start from ₹12,000 per day, while individual sessions start from ₹5,000. Contact us for a detailed quote.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    trainingType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/submit-lead`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          trainingType: "",
          message: "",
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      // Reset form even on error to not block the user
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        trainingType: "",
        message: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-[center_30%] bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/80" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's <span className="text-gradient-gold">Connect</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Have questions about our training programs? We'd love to hear from you. Get in touch and let's discuss how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-background relative -mt-10 z-10">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {contactInfo.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <Card variant="elevated" className="h-full hover:shadow-gold transition-shadow">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-foreground font-medium mb-1">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & FAQ */}
        <section className="section-padding bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <div>
                <div className="accent-line mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-card"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 8356 837052"
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company"
                        className="bg-card"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Training Type
                    </label>
                    <select
                      value={formData.trainingType}
                      onChange={(e) => setFormData({ ...formData, trainingType: e.target.value })}
                      className="w-full h-11 px-4 rounded-lg border border-input bg-card text-foreground"
                    >
                      <option value="">Select training type</option>
                      <option value="corporate">Corporate Training</option>
                      <option value="individual">Individual Training</option>
                      <option value="e-course">E-Course</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your training needs..."
                      className="bg-card min-h-[120px]"
                    />
                  </div>
                  <Button type="submit" variant="navy" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* FAQ */}
              <div id="faq">
                <div className="accent-line mb-6" />
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground mb-8">
                  Find answers to common questions about our training programs.
                </p>

                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="bg-card rounded-xl border shadow-soft px-6"
                    >
                      <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-5">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
