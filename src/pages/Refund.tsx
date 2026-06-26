import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function Refund() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 hero-gradient">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">
              Refund & Cancellation Policy
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">Last updated: December 2024</p>

              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 mb-8">
                <p className="text-foreground font-medium">
                  At GD Pro Academy, we are committed to providing high-quality training programs. We understand 
                  that circumstances may change, and we have created this policy to address refunds and cancellations 
                  fairly for all parties.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Program Bookings</h2>
              <p className="text-muted-foreground mb-4">
                For program bookings and registrations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li><strong>Within 7 days of booking:</strong> Full refund if the program has not yet started</li>
                <li><strong>After program commencement:</strong> No refund, but you may transfer enrollment to another person (one-time only)</li>
                <li><strong>Technical issues:</strong> If you experience technical problems preventing access to a virtual session, contact us within 48 hours for resolution or refund</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Corporate Training Programs</h2>
              <p className="text-muted-foreground mb-4">
                For on-site or virtual corporate training engagements:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-foreground">Cancellation Timing</th>
                      <th className="border border-border p-3 text-left text-foreground">Refund Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">More than 14 days before program</td>
                      <td className="border border-border p-3 text-muted-foreground">90% refund (10% administrative fee)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-muted-foreground">7-14 days before program</td>
                      <td className="border border-border p-3 text-muted-foreground">50% refund</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">Less than 7 days before program</td>
                      <td className="border border-border p-3 text-muted-foreground">No refund (rescheduling available)</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-muted-foreground">No-show on program date</td>
                      <td className="border border-border p-3 text-muted-foreground">No refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground mb-6">
                <strong>Rescheduling:</strong> Corporate programs may be rescheduled once without penalty if requested 
                at least 7 days in advance. Subsequent rescheduling requests may incur a 10% rescheduling fee.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Individual Training & Coaching</h2>
              <p className="text-muted-foreground mb-4">
                For one-on-one training sessions and coaching programs:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li><strong>Before first session:</strong> Full refund minus ₹500 processing fee</li>
                <li><strong>After first session:</strong> Pro-rata refund for unused sessions, minus 15% administrative fee</li>
                <li><strong>Session cancellation:</strong> Reschedule with 48 hours' notice; late cancellation counts as completed session</li>
                <li><strong>Package expiry:</strong> All sessions must be used within the validity period (typically 3-6 months); unused sessions are non-refundable after expiry</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Cancellation by GD Pro Academy</h2>
              <p className="text-muted-foreground mb-6">
                In the unlikely event that we need to cancel a program:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>You will receive a full 100% refund, or</li>
                <li>Option to transfer to an alternative date/program of equal value</li>
                <li>We will notify you at least 3 business days in advance (except in emergencies)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Force Majeure</h2>
              <p className="text-muted-foreground mb-6">
                In case of cancellation due to events beyond our control (natural disasters, government orders, 
                pandemic restrictions, etc.), we will offer:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Full credit towards future programs (valid for 12 months)</li>
                <li>Option to convert to virtual delivery where feasible</li>
                <li>80% refund if alternative arrangements are not acceptable</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Refund Process</h2>
              <p className="text-muted-foreground mb-4">To request a refund:</p>
              <ol className="list-decimal pl-6 text-muted-foreground mb-6">
                <li>Email your refund request to info@gdproacademy.in with your order details</li>
                <li>Include your name, program name, booking date, and reason for refund</li>
                <li>Our team will review and respond within 3 business days</li>
                <li>Approved refunds will be processed within 7-10 business days</li>
                <li>Refunds will be credited to the original payment method</li>
              </ol>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Refund Timeline</h2>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong>UPI/Net Banking:</strong> 5-7 business days</li>
                  <li><strong>Credit/Debit Cards:</strong> 7-10 business days</li>
                  <li><strong>Bank Transfer:</strong> 7-10 business days</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Note: Actual credit to your account depends on your bank's processing time.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Non-Refundable Items</h2>
              <p className="text-muted-foreground mb-4">The following are non-refundable:</p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Certificates and certification fees once issued</li>
                <li>Customized training materials prepared specifically for your organization</li>
                <li>Travel and accommodation costs arranged on your behalf</li>
                <li>Sessions/programs completed or attended</li>
                <li>Promotional or discounted purchases (unless defective)</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Quality Guarantee</h2>
              <p className="text-muted-foreground mb-6">
                If you are unsatisfied with the quality of our training, please inform us within 24 hours of 
                program completion. We will review your feedback and, where appropriate, offer a partial refund, 
                complimentary follow-up session, or alternative resolution.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For refund requests or questions about this policy:
              </p>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <p className="text-foreground font-medium mb-2">GD Pro Academy</p>
                <p className="text-muted-foreground">
                  Email: info@gdproacademy.in<br />
                  Phone: +91 8356 837052<br />
                  Address: Thane, Maharashtra, India<br />
                  Business Hours: Monday - Saturday, 10:00 AM - 6:00 PM IST
                </p>
              </div>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  This Refund & Cancellation Policy is governed by the Consumer Protection Act, 2019 and other 
                  applicable laws of India. We reserve the right to modify this policy at any time; changes will 
                  be effective upon posting to our website.
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