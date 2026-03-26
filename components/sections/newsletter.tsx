"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#E8DED4] via-[#F5F0EB] to-[#D4DDD4]">
      <div className="container-luxury">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Stay Connected
          </p>
          <h2 className="heading-large mb-6">
            Bathe your barrier
          </h2>
          <p className="body-large text-muted-foreground mb-10">
            Subscribe to receive exclusive offers, skincare tips, and be the first to know about new product launches.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-3 text-accent">
              <Check className="h-6 w-6" />
              <span className="font-serif text-xl">Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-card border border-border rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-xs text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  )
}
