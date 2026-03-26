"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Mail, Phone, MessageCircle, MapPin, Send, Check } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@zinaia-skincare.com",
    href: "mailto:contact@zinaia-skincare.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "05 25 21 30 27",
    href: "tel:+212525213027",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "06 64 74 26 02",
    href: "https://wa.me/212664742602",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Morocco",
    href: null,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 min-h-screen">
        {/* Hero Section */}
        <section className="container-luxury section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h1 className="heading-display mb-6">
              We&apos;d love to
              <br />
              <span className="text-accent">hear from you</span>
            </h1>
            <p className="body-large text-muted-foreground">
              Have a question about our products, need skincare advice, or just want to say hello? 
              We&apos;re here to help.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="bg-secondary/50 rounded-2xl p-6 text-center hover-lift"
              >
                <method.icon className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-lg mb-2">{method.title}</h3>
                {method.href ? (
                  <a
                    href={method.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{method.value}</p>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-sm">
              <h2 className="font-serif text-2xl mb-2 text-center">Send us a message</h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll respond to your inquiry soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us more..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl group"
                  >
                    Send Message
                    <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="bg-secondary/30 py-16">
          <div className="container-luxury text-center">
            <h2 className="font-serif text-2xl mb-4">Looking for quick answers?</h2>
            <p className="text-muted-foreground mb-6">
              Check out our frequently asked questions for instant help.
            </p>
            <a
              href="/faqs"
              className="btn-luxury border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View FAQs
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
