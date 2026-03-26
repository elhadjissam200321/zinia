"use client"

import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E8DED4]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#D4DDD4]/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in-up">
              Clean Beauty Essentials
            </p>
            <h1 className="heading-display mb-8 text-balance animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Hydrate your skin
              <br />
              <span className="text-accent">for a radiant glow</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Discover our curated collection of clean skincare crafted with natural ingredients for visibly healthier skin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                href="/shop"
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Shop Now
              </Link>
              <Link
                href="/routines"
                className="btn-luxury border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Build Your Routine
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-8 justify-center lg:justify-start mt-12 pt-12 border-t border-border animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <p className="font-serif text-2xl text-accent">100%</p>
                <p className="text-xs tracking-wide text-muted-foreground mt-1">Clean Ingredients</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-accent">+5000</p>
                <p className="text-xs tracking-wide text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-accent">4.9</p>
                <p className="text-xs tracking-wide text-muted-foreground mt-1">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-accent/10 rounded-3xl hidden md:block" />
              
              <div className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#E8DED4] to-[#D4C4B0]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-USHASJB8DJYuPiAVniYfek52EVuXHS.png"
                  alt="ZINAÏA Skincare - Premium clean beauty products"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Floating product card */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-card p-4 rounded-2xl shadow-xl max-w-[200px] animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <p className="text-xs tracking-wide text-muted-foreground mb-1">Bestseller</p>
                <p className="font-serif text-sm mb-2">Sérum Hydratant</p>
                <p className="text-accent font-medium">349 DHS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
