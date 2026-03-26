"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

const products = [
  {
    id: 1,
    name: "Gel Nettoyant Doux",
    description: "Gentle cleansing gel",
    price: 249,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop",
    category: "Cleanser",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Crème de Jour SPF30",
    description: "Daily moisturizer with sun protection",
    price: 399,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&h=800&fit=crop",
    category: "Moisturizer",
    badge: null,
  },
  {
    id: 3,
    name: "Sérum Hydratant",
    description: "Intensive hydration serum",
    price: 349,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=800&fit=crop",
    category: "Serum",
    badge: "New",
  },
  {
    id: 4,
    name: "Crème de Nuit Anti-Âge",
    description: "Night repair cream",
    price: 449,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=800&fit=crop",
    category: "Night Care",
    badge: null,
  },
]

export function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="section-padding bg-card">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Collection
          </p>
          <h2 className="heading-large mb-6 text-balance">
            Shop our best sellers
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Curated essentials for every skin type, formulated with clean, effective ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-500",
                    hoveredId === product.id && "scale-105"
                  )}
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                )}
                {/* Quick Add */}
                <div className={cn(
                  "absolute inset-x-4 bottom-4 transition-all duration-300",
                  hoveredId === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                )}>
                  <button className="w-full bg-card/95 backdrop-blur-sm text-card-foreground py-3 rounded-xl text-sm font-medium hover:bg-card transition-colors">
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs tracking-wide text-muted-foreground mb-1">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg mb-1 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                <p className="text-accent font-medium">{product.price} DHS</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="btn-luxury border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
