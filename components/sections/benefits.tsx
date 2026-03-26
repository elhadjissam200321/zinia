"use client"

import Image from "next/image"
import { Droplets, Clock, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    description: "Plump, dewy skin that glows from within",
  },
  {
    icon: Clock,
    title: "Anti-Aging",
    description: "Visibly reduce fine lines and wrinkles",
  },
  {
    icon: Sparkles,
    title: "Radiant Glow",
    description: "Achieve that coveted lit-from-within look",
  },
]

export function Benefits() {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=600&fit=crop"
                    alt="Skincare texture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative rounded-2xl overflow-hidden bg-[#F2E8E4]">
                  <Image
                    src="https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=400&fit=crop"
                    alt="Natural ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&h=400&fit=crop"
                    alt="Skincare application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-[#E8DED4]">
                  <Image
                    src="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=600&fit=crop"
                    alt="Clean beauty products"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent/20 rounded-full" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Why ZINAÏA
            </p>
            <h2 className="heading-large mb-6">
              One of everything
              <br />
              <span className="text-accent">really good</span>
            </h2>
            <p className="body-large text-muted-foreground mb-12 max-w-lg">
              We believe in quality over quantity. Each product in our collection is 
              meticulously formulated to deliver visible results you can feel and see.
            </p>

            {/* Benefits List */}
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <div key={benefit.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
