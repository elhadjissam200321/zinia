"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Newsletter } from "@/components/sections/newsletter"
import { Sun, Moon, Sparkles, Check, ArrowRight } from "lucide-react"

const routines = [
  {
    id: "day",
    name: "Day Routine",
    tagline: "Protect & Glow",
    icon: Sun,
    description: "Start your day with a refreshing routine designed to hydrate, protect, and prepare your skin for whatever comes your way.",
    products: [
      { name: "Gel Nettoyant Doux", price: 249, step: "Cleanse" },
      { name: "Sérum Hydratant", price: 349, step: "Treat" },
      { name: "Crème de Jour SPF30", price: 399, step: "Protect" },
    ],
    totalValue: 997,
    setPrice: 897,
    savings: 100,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=1000&fit=crop",
    benefits: ["UV Protection", "Deep Hydration", "Instant Glow"],
    color: "from-[#FAF8F5] to-[#F2E8E4]",
  },
  {
    id: "night",
    name: "Night Routine",
    tagline: "Repair & Renew",
    icon: Moon,
    description: "Let your skin recover while you sleep with our restorative night routine, formulated to repair and rejuvenate.",
    products: [
      { name: "Gel Nettoyant Doux", price: 249, step: "Cleanse" },
      { name: "Sérum Hydratant", price: 349, step: "Treat" },
      { name: "Crème de Nuit Anti-Âge", price: 449, step: "Repair" },
    ],
    totalValue: 1047,
    setPrice: 947,
    savings: 100,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=1000&fit=crop",
    benefits: ["Anti-Aging", "Cell Renewal", "Deep Nourishment"],
    color: "from-[#E8DED4] to-[#D4C4B0]",
  },
  {
    id: "complete",
    name: "Complete Routine",
    tagline: "The Full Experience",
    icon: Sparkles,
    description: "Get everything you need for a comprehensive day-to-night skincare ritual with our most popular bundle.",
    products: [
      { name: "Gel Nettoyant Doux", price: 249, step: "Cleanse" },
      { name: "Sérum Hydratant", price: 349, step: "Treat" },
      { name: "Crème de Jour SPF30", price: 399, step: "Day" },
      { name: "Crème de Nuit Anti-Âge", price: 449, step: "Night" },
    ],
    totalValue: 1446,
    setPrice: 1246,
    savings: 200,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&h=1000&fit=crop",
    benefits: ["Complete Care", "Best Value", "Visible Results"],
    color: "from-[#D4DDD4] to-[#C4D4C4]",
  },
]

export default function RoutinesPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="container-luxury section-padding text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Sets
          </p>
          <h1 className="heading-display mb-6 text-balance">
            Build your
            <br />
            <span className="text-accent">perfect routine</span>
          </h1>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Not sure where to start? Our expertly curated skincare sets take the guesswork 
            out of building an effective routine. Save more when you bundle.
          </p>
        </section>

        {/* Routines List */}
        <section className="container-luxury pb-20">
          <div className="space-y-24">
            {routines.map((routine, index) => (
              <div
                key={routine.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className={`relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${routine.color}`}>
                    <Image
                      src={routine.image}
                      alt={routine.name}
                      fill
                      className="object-cover mix-blend-multiply"
                    />
                    {/* Badge */}
                    <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Save {routine.savings} DHS
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <routine.icon className="h-6 w-6 text-accent" />
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {routine.tagline}
                    </p>
                  </div>
                  <h2 className="heading-large mb-4">{routine.name}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {routine.description}
                  </p>

                  {/* Products List */}
                  <div className="space-y-4 mb-8">
                    {routine.products.map((product, i) => (
                      <div
                        key={product.name}
                        className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                      >
                        <span className="w-8 h-8 bg-card rounded-full flex items-center justify-center text-sm font-medium">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-serif">{product.name}</p>
                          <p className="text-xs text-muted-foreground">{product.step}</p>
                        </div>
                        <p className="text-muted-foreground">{product.price} DHS</p>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    {routine.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-accent" />
                        {benefit}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-end justify-between pt-6 border-t border-border">
                    <div>
                      <p className="text-sm text-muted-foreground line-through mb-1">
                        {routine.totalValue} DHS
                      </p>
                      <p className="font-serif text-3xl text-accent">{routine.setPrice} DHS</p>
                    </div>
                    <Link
                      href={`/routines/${routine.id}`}
                      className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 group"
                    >
                      Add to Cart
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[#C4A77D] mb-4">
                Simple Steps
              </p>
              <h2 className="heading-large">How to Use Your Routine</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: "1", title: "Cleanse", description: "Start with our gentle gel cleanser to remove impurities" },
                { step: "2", title: "Treat", description: "Apply serum to target specific skin concerns" },
                { step: "3", title: "Moisturize", description: "Lock in hydration with day or night cream" },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="w-16 h-16 bg-[#C4A77D] text-[#2C2825] rounded-full flex items-center justify-center font-serif text-2xl mx-auto mb-6">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                  <p className="opacity-80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
