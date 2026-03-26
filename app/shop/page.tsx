"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { SlidersHorizontal, ChevronDown, ShoppingBag } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { cn } from "@/lib/utils"

const categories = ["All", "Cleansers", "Serums", "Moisturizers", "Sets"]
const sortOptions = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"]

const products = [
  {
    id: 1,
    name: "Gel Nettoyant Doux",
    description: "Gentle cleansing gel",
    price: 249,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop",
    category: "Cleansers",
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Crème de Jour SPF30",
    description: "Daily moisturizer with sun protection",
    price: 399,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&h=800&fit=crop",
    category: "Moisturizers",
    badge: null,
  },
  {
    id: 3,
    name: "Sérum Hydratant",
    description: "Intensive hydration serum",
    price: 349,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=800&fit=crop",
    category: "Serums",
    badge: "New",
  },
  {
    id: 4,
    name: "Crème de Nuit Anti-Âge",
    description: "Night repair cream",
    price: 449,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=800&fit=crop",
    category: "Moisturizers",
    badge: null,
  },
  {
    id: 5,
    name: "Sérum Éclat Vitamine C",
    description: "Brightening vitamin C serum",
    price: 379,
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&h=800&fit=crop",
    category: "Serums",
    badge: null,
  },
  {
    id: 6,
    name: "Routine Complète",
    description: "Complete skincare set",
    price: 1346,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=800&fit=crop",
    category: "Sets",
    badge: "Save 200 DHS",
  },
  {
    id: 7,
    name: "Huile Visage Argan",
    description: "Nourishing face oil",
    price: 299,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&h=800&fit=crop",
    category: "Serums",
    badge: null,
  },
  {
    id: 8,
    name: "DUO Crème Jour + Nuit",
    description: "Day and night cream set",
    price: 749,
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=800&fit=crop",
    category: "Sets",
    badge: "Popular",
  },
]

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortBy, setSortBy] = useState("Featured")
  const [showFilters, setShowFilters] = useState(false)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const { addItem } = useCart()

  const handleQuickAdd = (e: React.MouseEvent, product: typeof products[0]) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
  }

  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  )

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 min-h-screen">
        {/* Page Header */}
        <section className="container-luxury py-12 md:py-16">
          <div className="text-center">
            <h1 className="heading-display mb-4">Shop All</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover our complete collection of clean, effective skincare formulated for radiant results.
            </p>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="border-y border-border sticky top-[calc(2.5rem+4rem)] md:top-[calc(2.5rem+5rem)] bg-background z-30">
          <div className="container-luxury">
            <div className="flex items-center justify-between py-4">
              {/* Categories - Desktop */}
              <div className="hidden md:flex items-center gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={cn(
                      "px-4 py-2 text-sm rounded-full transition-all",
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Mobile Filter Button */}
              <button
                className="md:hidden flex items-center gap-2 text-sm"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-2 text-sm hover:text-accent transition-colors">
                  Sort: {sortBy}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="md:hidden py-4 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setActiveCategory(category)
                        setShowFilters(false)
                      }}
                      className={cn(
                        "px-4 py-2 text-sm rounded-full transition-all",
                        activeCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="container-luxury section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product) => (
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
                  <div
                    className={cn(
                      "absolute inset-x-4 bottom-4 transition-all duration-300",
                      hoveredId === product.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                  >
                    <button
                      onClick={(e) => handleQuickAdd(e, product)}
                      className="w-full bg-card/95 backdrop-blur-sm text-card-foreground py-3 rounded-xl text-sm font-medium hover:bg-card transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
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
        </section>
      </main>
      <Footer />
    </>
  )
}
