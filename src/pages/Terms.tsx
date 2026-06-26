import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 hero-gradient">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">
              Terms & Conditions
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-6">
                Welcome to GD Pro Academy ("Company", "we", "our", "us"). These Terms and Conditions govern 
                your use of our website located at gdproacademy.in and any related services, including 
                training programs and consultations (collectively, the "Services"). By accessing 
                or using our Services, you agree to be bound by these Terms. If you disagree with any part 
                of these terms, you may not access our Services.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">GD Pro Academy provides:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Corporate training programs (on-site and virtual)</li>
                <li>Professional training programs and coaching sessions</li>
                <li>Sales, communication, and soft skills training</li>
                <li>Consultation services for organizations</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Eligibility</h2>
              <p className="text-muted-foreground mb-6">
                You must be at least 18 years of age to use our Services. By using our Services, you represent 
                and warrant that you are at least 18 years old and have the legal capacity to enter into a 
                binding agreement. If you are registering on behalf of an organization, you represent that you 
                have the authority to bind that organization to these Terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Registration and Account</h2>
              <p className="text-muted-foreground mb-6">
                For certain Services, you may be required to register and provide accurate, complete information. 
                You are responsible for maintaining the confidentiality of your account credentials and for all 
                activities under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                All payments for our Services are processed in Indian Rupees (INR) unless otherwise specified. 
                Payment terms include:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Corporate training: 50% advance, balance before program commencement</li>
                <li>Professional programs: Full payment required before first session</li>
                <li>All prices are inclusive of applicable GST as per Indian tax laws</li>
                <li>Payments are accepted via UPI, net banking, credit/debit cards, and bank transfers</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Intellectual Property Rights</h2>
              <p className="text-muted-foreground mb-6">
                All content, materials, training modules, presentations, videos, and other intellectual property 
                provided through our Services are owned by GD Pro Academy and protected under Indian Copyright Act, 1957 
                and international copyright laws. You may not reproduce, distribute, modify, create derivative works, 
                publicly display, or exploit any content without our prior written consent.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. User Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Share, distribute, or resell any training materials</li>
                <li>Record training sessions without prior written permission</li>
                <li>Use our Services for any unlawful purpose</li>
                <li>Impersonate any person or entity</li>
                <li>Interfere with the proper functioning of our Services</li>
                <li>Share login credentials with third parties</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Training Program Terms</h2>
              <p className="text-muted-foreground mb-6">
                <strong>For Corporate Training:</strong> Training schedules are mutually agreed upon. Rescheduling 
                requests must be made at least 7 business days in advance. Venue, logistics, and participant travel 
                (if applicable) are the client's responsibility unless otherwise agreed in writing.
              </p>
              <p className="text-muted-foreground mb-6">
                <strong>For Individual Training:</strong> Session schedules are confirmed upon booking. Rescheduling 
                is permitted with 48 hours' notice. No-shows without prior notice will be considered as a completed session.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Certification</h2>
              <p className="text-muted-foreground mb-6">
                Certificates of completion are issued upon successful completion of training programs. Certificates 
                are issued in the name provided during registration and cannot be transferred. GD Pro Academy reserves 
                the right to withhold certification if program requirements are not met.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-6">
                To the maximum extent permitted by applicable law, GD Pro Academy shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including loss of profits, data, or business 
                opportunities. Our total liability shall not exceed the amount paid by you for the specific Service 
                giving rise to the claim.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. Indemnification</h2>
              <p className="text-muted-foreground mb-6">
                You agree to indemnify and hold harmless GD Pro Academy, its directors, employees, and agents from 
                any claims, damages, losses, or expenses arising from your use of our Services or violation of these Terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground mb-6">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes 
                arising from these Terms or our Services shall be subject to the exclusive jurisdiction of the 
                courts in Thane, Maharashtra, India.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. Dispute Resolution</h2>
              <p className="text-muted-foreground mb-6">
                In case of any dispute, the parties shall first attempt to resolve the matter through mutual 
                discussion. If unresolved within 30 days, the dispute shall be referred to arbitration under 
                the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English, 
                with the seat of arbitration in Mumbai, Maharashtra.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-6">
                We reserve the right to modify these Terms at any time. Changes will be effective upon posting 
                to our website. Your continued use of our Services after such modifications constitutes acceptance 
                of the updated Terms.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. Severability</h2>
              <p className="text-muted-foreground mb-6">
                If any provision of these Terms is found to be unenforceable or invalid, such provision shall be 
                modified to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">16. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these Terms, please contact us:
              </p>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <p className="text-foreground font-medium mb-2">GD Pro Academy</p>
                <p className="text-muted-foreground">
                  Email: info@gdproacademy.in<br />
                  Phone: +91 8356 837052<br />
                  Address: Thane, Maharashtra, India<br />
                  Website: gdproacademy.in
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}