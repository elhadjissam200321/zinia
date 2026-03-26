"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Sun, Moon, Sparkles, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const routines = [
  {
    id: "day",
    name: "Day Routine",
    icon: Sun,
    description: "Protect and hydrate for a radiant day ahead",
    products: ["Gel Nettoyant", "Sérum Hydratant", "Crème de Jour SPF30"],
    price: 897,
    savings: 100,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=800&fit=crop",
    color: "from-[#FAF8F5] to-[#F2E8E4]",
  },
  {
    id: "night",
    name: "Night Routine",
    icon: Moon,
    description: "Repair and rejuvenate while you sleep",
    products: ["Gel Nettoyant", "Sérum Hydratant", "Crème de Nuit Anti-Âge"],
    price: 947,
    savings: 100,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=800&fit=crop",
    color: "from-[#E8DED4] to-[#D4C4B0]",
  },
  {
    id: "complete",
    name: "Complete Routine",
    icon: Sparkles,
    description: "The full experience for transformative results",
    products: ["Gel Nettoyant", "Sérum Hydratant", "Crème de Jour SPF30", "Crème de Nuit Anti-Âge"],
    price: 1346,
    savings: 200,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=800&fit=crop",
    color: "from-[#D4DDD4] to-[#C4D4C4]",
  },
]

export function Routines() {
  const [activeRoutine, setActiveRoutine] = useState("complete")

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated Sets
          </p>
          <h2 className="heading-large mb-6 text-balance">
            Build your own routine
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Discover our expertly curated skincare sets designed for your unique needs. 
            Save more when you bundle.
          </p>
        </div>

        {/* Routine Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {routines.map((routine) => (
            <button
              key={routine.id}
              onClick={() => setActiveRoutine(routine.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                activeRoutine === routine.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-card/80"
              )}
            >
              <routine.icon className="h-4 w-4" />
              {routine.name}
            </button>
          ))}
        </div>

        {/* Active Routine Display */}
        {routines.map((routine) => (
          <div
            key={routine.id}
            className={cn(
              "transition-all duration-500",
              activeRoutine === routine.id
                ? "opacity-100 visible"
                : "opacity-0 invisible h-0 overflow-hidden"
            )}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image */}
              <div className={`relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br ${routine.color}`}>
                <Image
                  src={routine.image}
                  alt={routine.name}
                  fill
                  className="object-cover mix-blend-multiply"
                />
                {/* Savings Badge */}
                <div className="absolute top-6 right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Save {routine.savings} DHS
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <routine.icon className="h-6 w-6 text-accent" />
                  <h3 className="heading-medium">{routine.name}</h3>
                </div>
                <p className="text-muted-foreground mb-8 text-lg">
                  {routine.description}
                </p>

                {/* Products List */}
                <div className="space-y-4 mb-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Includes
                  </p>
                  {routine.products.map((product, index) => (
                    <div
                      key={product}
                      className="flex items-center gap-4 p-4 bg-card rounded-xl"
                    >
                      <span className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="font-serif">{product}</span>
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Set Price</p>
                    <p className="font-serif text-3xl text-accent">{routine.price} DHS</p>
                  </div>
                  <Link
                    href={`/routines/${routine.id}`}
                    className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    Shop This Set
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
