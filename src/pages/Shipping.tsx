import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";

export default function Shipping() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-12 hero-gradient">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground text-center">
              Shipping & Delivery Policy
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
                  GD Pro Academy primarily provides digital services including online courses, virtual training, 
                  and on-site corporate training programs. This policy outlines the delivery of our services 
                  and any physical materials that may be included.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Digital Products & E-Courses</h2>
              <p className="text-muted-foreground mb-4">
                For online courses and digital learning materials:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">Instant Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Access is granted immediately upon successful payment confirmation
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">Login Credentials</h4>
                  <p className="text-sm text-muted-foreground">
                    Sent to your registered email within 30 minutes of purchase
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">Access Duration</h4>
                  <p className="text-sm text-muted-foreground">
                    Lifetime access for most courses; specific validity mentioned on course page
                  </p>
                </div>
                <div className="bg-muted rounded-xl p-5">
                  <h4 className="font-semibold text-foreground mb-2">Device Access</h4>
                  <p className="text-sm text-muted-foreground">
                    Access from any device with internet connection (desktop, mobile, tablet)
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                <strong>Note:</strong> If you don't receive access within 2 hours, please check your spam folder 
                and then contact us at info@gdproacademy.in.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Virtual Training Programs</h2>
              <p className="text-muted-foreground mb-4">
                For live virtual/online training sessions:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li><strong>Joining Link:</strong> Meeting link (Zoom/Google Meet) sent 24-48 hours before the session</li>
                <li><strong>Pre-session Materials:</strong> Any reading materials sent 2-3 days prior via email</li>
                <li><strong>Recording Access:</strong> Session recordings (where applicable) available within 24 hours post-session</li>
                <li><strong>Certificates:</strong> Digital certificates emailed within 3-5 business days of program completion</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Corporate Training (On-Site)</h2>
              <p className="text-muted-foreground mb-4">
                For in-person corporate training at your location:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li><strong>Service Delivery:</strong> Training delivered at client's specified location across India</li>
                <li><strong>Pre-training Kit:</strong> Digital materials shared 3-5 days before the program</li>
                <li><strong>Physical Materials:</strong> Workbooks, handouts delivered at the training venue</li>
                <li><strong>Trainer Travel:</strong> Trainer arrives at venue as per mutually agreed schedule</li>
              </ul>

              <div className="bg-muted rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-foreground mb-3">Coverage Area</h4>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Delhi NCR", "Bangalore", "Chennai", "Hyderabad", "Pune", "Kolkata", "All Major Cities"].map((city) => (
                    <span key={city} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Training available Pan-India. For Tier-2/3 cities, additional travel arrangements may apply.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Physical Materials (If Applicable)</h2>
              <p className="text-muted-foreground mb-4">
                When physical training materials, certificates, or merchandise are shipped:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left text-foreground">Delivery Location</th>
                      <th className="border border-border p-3 text-left text-foreground">Estimated Time</th>
                      <th className="border border-border p-3 text-left text-foreground">Shipping Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">Metro Cities (Mumbai, Delhi, etc.)</td>
                      <td className="border border-border p-3 text-muted-foreground">3-5 business days</td>
                      <td className="border border-border p-3 text-muted-foreground">Free for orders above ₹2,000</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-muted-foreground">Other Indian Cities</td>
                      <td className="border border-border p-3 text-muted-foreground">5-7 business days</td>
                      <td className="border border-border p-3 text-muted-foreground">₹100 - ₹200</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-muted-foreground">Remote Areas</td>
                      <td className="border border-border p-3 text-muted-foreground">7-10 business days</td>
                      <td className="border border-border p-3 text-muted-foreground">Actual shipping charges</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Order Confirmation & Tracking</h2>
              <p className="text-muted-foreground mb-4">Upon successful order placement:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Confirmation email with order details within 30 minutes",
                  "Invoice and receipt sent to registered email",
                  "Tracking details (for physical shipments) sent within 24-48 hours of dispatch",
                  "SMS/WhatsApp updates for delivery status (where applicable)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Delivery Issues</h2>
              <p className="text-muted-foreground mb-4">
                If you encounter any delivery issues:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li><strong>Digital Access Issues:</strong> Contact us within 48 hours; we'll resolve or provide refund</li>
                <li><strong>Damaged Physical Materials:</strong> Report within 48 hours of receipt with photos</li>
                <li><strong>Non-Delivery:</strong> Report if shipment not received within estimated time + 3 days</li>
                <li><strong>Wrong Address:</strong> Ensure accurate address during checkout; re-shipping costs may apply for incorrect addresses</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. International Delivery</h2>
              <p className="text-muted-foreground mb-6">
                Currently, our physical material shipping is limited to India. For international clients:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground mb-6">
                <li>Digital products and e-courses: Available worldwide with instant access</li>
                <li>Virtual training: Available globally via video conferencing</li>
                <li>Physical materials: Contact us for custom shipping arrangements</li>
                <li>International shipping costs and customs duties (if any) are buyer's responsibility</li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                For delivery queries or issues:
              </p>
              <div className="bg-muted rounded-xl p-6 mb-6">
                <p className="text-foreground font-medium mb-2">GD Pro Academy</p>
                <p className="text-muted-foreground">
                  Email: info@gdproacademy.in<br />
                  Phone: +91 8356 837052<br />
                  WhatsApp: +91 8356 837052<br />
                  Business Hours: Monday - Saturday, 10:00 AM - 6:00 PM IST
                </p>
              </div>

              <div className="border-t pt-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  This Shipping & Delivery Policy is subject to change. Please check this page periodically for updates. 
                  For any clarifications, feel free to reach out to our support team.
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