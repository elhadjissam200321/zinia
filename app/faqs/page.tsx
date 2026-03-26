import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Newsletter } from "@/components/sections/newsletter"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Mail, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

const faqCategories = [
  {
    title: "Orders & Shipping",
    faqs: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping within Morocco takes 2-4 business days. Express shipping is available for next-day delivery in major cities like Casablanca, Rabat, and Marrakech. International shipping typically takes 7-14 business days depending on your location.",
      },
      {
        question: "Do you offer free shipping?",
        answer:
          "Yes! We offer free standard shipping on all orders over 500 DHS within Morocco. International orders over 1000 DHS also qualify for free shipping to select countries.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Absolutely. Once your order ships, you will receive an email with a tracking number and link to monitor your package in real-time. You can also track your order by logging into your account on our website.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards (Visa, Mastercard, American Express), bank transfers, and cash on delivery (COD) for orders within Morocco. International orders can be paid via credit card or PayPal.",
      },
    ],
  },
  {
    title: "Products & Ingredients",
    faqs: [
      {
        question: "Are your products suitable for sensitive skin?",
        answer:
          "Yes, all ZINAIA products are formulated with sensitive skin in mind. We use gentle, non-irritating ingredients and avoid harsh chemicals, fragrances, and common allergens. However, we always recommend doing a patch test before using any new skincare product.",
      },
      {
        question: "Are your products cruelty-free and vegan?",
        answer:
          "Yes, ZINAIA is 100% cruelty-free. We never test on animals, and neither do our suppliers. Most of our products are vegan, but some contain naturally-derived ingredients like honey or beeswax. Each product page clearly indicates if it is vegan.",
      },
      {
        question: "What does clean beauty mean to ZINAIA?",
        answer:
          "At ZINAIA, clean beauty means formulating without parabens, sulfates, phthalates, synthetic fragrances, mineral oils, and other potentially harmful ingredients. We prioritize transparency and list all ingredients on our product pages.",
      },
      {
        question: "How should I store my skincare products?",
        answer:
          "Store your ZINAIA products in a cool, dry place away from direct sunlight. Most products have a shelf life of 12-24 months once opened. Our serums and oils benefit from being stored in a refrigerator for enhanced freshness and a cooling application experience.",
      },
      {
        question: "Can I use multiple ZINAIA products together?",
        answer:
          "Absolutely! Our products are designed to work harmoniously together. We recommend starting with our Routines page to find the perfect combination for your skin type and concerns. Layer products from thinnest to thickest consistency for best results.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day satisfaction guarantee. If you are not completely happy with your purchase, you can return unopened products in their original packaging for a full refund. Opened products may be eligible for store credit depending on the circumstances.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "To start a return, please contact our customer service team at contact@zinaia.ma with your order number and reason for return. We will provide you with a return shipping label and instructions. Refunds are processed within 5-7 business days of receiving the returned item.",
      },
      {
        question: "What if my product arrives damaged?",
        answer:
          "We take great care in packaging your orders, but if your product arrives damaged, please contact us within 48 hours with photos of the damage. We will send a replacement at no extra cost or issue a full refund.",
      },
    ],
  },
  {
    title: "Account & Membership",
    faqs: [
      {
        question: "Do I need an account to place an order?",
        answer:
          "No, you can checkout as a guest. However, creating an account allows you to track orders, save your favorite products, earn loyalty points, and receive exclusive member-only offers and early access to new launches.",
      },
      {
        question: "How does the loyalty program work?",
        answer:
          "Our loyalty program rewards you with points for every purchase. Earn 1 point for every 10 DHS spent. Points can be redeemed for discounts on future orders. Members also receive birthday rewards and exclusive access to sales and new products.",
      },
      {
        question: "How can I update my account information?",
        answer:
          "Log into your account and navigate to the Account Settings page to update your email, password, shipping address, and payment methods. If you need assistance, our customer service team is happy to help.",
      },
    ],
  },
]

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="container-luxury section-padding pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Help Center
            </p>
            <h1 className="heading-display mb-6">
              Frequently Asked
              <br />
              <span className="text-accent">Questions</span>
            </h1>
            <p className="body-large text-muted-foreground">
              Find answers to common questions about our products, orders, and
              policies. Can&apos;t find what you&apos;re looking for? Our team is here to
              help.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="container-luxury pb-16">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="heading-medium mb-6 text-center lg:text-left">
                  {category.title}
                </h2>
                <div className="bg-card rounded-3xl border border-border p-6 md:p-8">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border-border"
                      >
                        <AccordionTrigger className="text-left font-serif text-lg hover:no-underline hover:text-accent transition-colors py-5">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-secondary/30 section-padding">
          <div className="container-luxury">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  Still Have Questions?
                </p>
                <h2 className="heading-large mb-4">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Our customer support team is available to assist you.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="mailto:contact@zinaia.ma"
                  className="bg-card p-8 rounded-3xl border border-border text-center hover-lift group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@zinaia.ma
                  </p>
                </Link>

                <Link
                  href="tel:+212600000000"
                  className="bg-card p-8 rounded-3xl border border-border text-center hover-lift group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">
                    +212 6 00 00 00 00
                  </p>
                </Link>

                <Link
                  href="/contact"
                  className="bg-card p-8 rounded-3xl border border-border text-center hover-lift group"
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <MessageCircle className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg mb-2">Contact Form</h3>
                  <p className="text-sm text-muted-foreground">
                    Send us a message
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
