import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function PrivacyPage() {
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
              <h1 className="heading-display mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: March 2026</p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="font-serif text-2xl mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ZINAÏA Skincare (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or make a purchase.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Name and contact information (email, phone, address)</li>
                  <li>Payment information (processed securely through our payment provider)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our customer service team</li>
                  <li>Newsletter subscription preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your orders and inquiries</li>
                  <li>Send promotional communications (with your consent)</li>
                  <li>Improve our products and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information with service providers who assist us in operating 
                  our website, conducting our business, or serving our customers, as long as those 
                  parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website uses cookies to enhance your browsing experience. You can choose 
                  to disable cookies through your browser settings, but this may affect some 
                  functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:{" "}
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
