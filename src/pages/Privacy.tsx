import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 hero-gradient">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">
              Privacy Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                We collect information you provide directly to us, such as when you fill out a contact form, 
                sign up for our training programs, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Training requirements and preferences</li>
                <li>Payment information for course purchases</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process your training bookings and payments</li>
                <li>Send you updates about our programs and services</li>
                <li>Improve our training offerings and website experience</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground mb-6">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information only with service providers who assist us in operating our website and 
                conducting our business, provided they agree to keep this information confidential.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h2>
              <p className="text-muted-foreground mb-6">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground mb-6">
                You have the right to access, correct, or delete your personal information. You may also 
                opt out of receiving marketing communications from us at any time by contacting us.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-foreground font-medium">
                Email: info@gdproacademy.in<br />
                Phone: +91 8356 837052<br />
                Location: Thane, Maharashtra, India
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
