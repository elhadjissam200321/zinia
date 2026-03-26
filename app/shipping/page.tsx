import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Truck, Clock, Package, MapPin } from "lucide-react"

const shippingInfo = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on all orders over 499 DHS. Standard shipping fee of 49 DHS applies to orders below this amount.",
  },
  {
    icon: Clock,
    title: "Delivery Time",
    description: "Orders are processed within 1-2 business days. Delivery typically takes 3-5 business days within Morocco.",
  },
  {
    icon: Package,
    title: "Order Tracking",
    description: "Once your order ships, you&apos;ll receive a tracking number via email to monitor your delivery.",
  },
  {
    icon: MapPin,
    title: "Delivery Areas",
    description: "We currently ship to all major cities in Morocco. International shipping coming soon.",
  },
]

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 min-h-screen">
        <section className="container-luxury section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Delivery Information
              </p>
              <h1 className="heading-display mb-6">Shipping Policy</h1>
              <p className="body-large text-muted-foreground">
                Everything you need to know about getting your ZINAÏA products delivered.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {shippingInfo.map((info) => (
                <div key={info.title} className="bg-secondary/50 rounded-2xl p-6">
                  <info.icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-serif text-xl mb-2">{info.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Detailed Policy */}
            <div className="prose prose-neutral max-w-none">
              <h2 className="font-serif text-2xl mb-4">Shipping Rates</h2>
              <table className="w-full mb-8">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3">Order Value</th>
                    <th className="text-left py-3">Shipping Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3">Under 499 DHS</td>
                    <td className="py-3">49 DHS</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3">499 DHS and above</td>
                    <td className="py-3 text-accent font-medium">FREE</td>
                  </tr>
                </tbody>
              </table>

              <h2 className="font-serif text-2xl mb-4">Processing Time</h2>
              <p className="text-muted-foreground mb-8">
                All orders are processed within 1-2 business days (excluding weekends and holidays). 
                You will receive an email confirmation once your order has been shipped with tracking information.
              </p>

              <h2 className="font-serif text-2xl mb-4">Delivery Estimates</h2>
              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>Casablanca, Rabat, Marrakech: 2-3 business days</li>
                <li>Other major cities: 3-5 business days</li>
                <li>Rural areas: 5-7 business days</li>
              </ul>

              <h2 className="font-serif text-2xl mb-4">Order Tracking</h2>
              <p className="text-muted-foreground mb-8">
                Once your order has been dispatched, you will receive a shipping confirmation email 
                with a tracking number. You can use this number to track your package through our 
                delivery partner&apos;s website.
              </p>

              <h2 className="font-serif text-2xl mb-4">Questions?</h2>
              <p className="text-muted-foreground">
                If you have any questions about shipping or your order, please don&apos;t hesitate to 
                contact us at{" "}
                <a href="mailto:contact@zinaia-skincare.com" className="text-accent hover:underline">
                  contact@zinaia-skincare.com
                </a>{" "}
                or via WhatsApp at{" "}
                <a href="https://wa.me/212664742602" className="text-accent hover:underline">
                  06 64 74 26 02
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
