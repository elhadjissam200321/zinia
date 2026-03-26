import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 min-h-screen">
        <section className="container-luxury section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Legal
              </p>
              <h1 className="heading-display mb-6">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: March 2026</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the ZINAÏA Skincare website and purchasing our products, 
                  you agree to be bound by these Terms of Service. If you do not agree to these 
                  terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Products and Pricing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are listed in Moroccan Dirhams (DHS) and are subject to change without 
                  notice. We reserve the right to modify or discontinue products at any time. 
                  We make every effort to display product colors and images accurately, but we 
                  cannot guarantee exact representation on all devices.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Orders and Payment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you place an order, you agree that:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>All information provided is accurate and complete</li>
                  <li>You are authorized to use the payment method</li>
                  <li>You will pay the total amount including shipping fees</li>
                  <li>We reserve the right to refuse or cancel orders</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Shipping and Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Please refer to our Shipping Policy for detailed information about delivery 
                  times, costs, and procedures. We are not responsible for delays caused by 
                  customs, weather, or other factors beyond our control.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Returns and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We want you to be completely satisfied with your purchase. Our return policy includes:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>30-day return window for unopened products</li>
                  <li>Products must be in original packaging</li>
                  <li>Refunds processed within 7-10 business days</li>
                  <li>Shipping costs are non-refundable</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and 
                  software, is the property of ZINAÏA Skincare and is protected by intellectual 
                  property laws. You may not reproduce, distribute, or create derivative works 
                  without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ZINAÏA Skincare shall not be liable for any indirect, incidental, special, 
                  or consequential damages arising from the use of our products or services. 
                  Our liability is limited to the amount paid for the specific product in question.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Product Use</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our products are intended for external use only. Always perform a patch test 
                  before using a new product. If irritation occurs, discontinue use immediately. 
                  Consult a dermatologist if you have specific skin concerns.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update these Terms of Service at any time. Changes 
                  will be effective immediately upon posting to the website. Your continued use 
                  of our services constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us at:{" "}
                  <a href="mailto:contact@zinaia-skincare.com" className="text-accent hover:underline">
                    contact@zinaia-skincare.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
