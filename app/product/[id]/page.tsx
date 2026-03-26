"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Minus, Plus, Star, Droplets, Clock, Sparkles, ChevronDown, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const product = {
  id: 3,
  name: "Sérum Hydratant",
  description: "Our bestselling intensive hydration serum that transforms your skin with a powerful blend of hyaluronic acid and natural botanicals.",
  longDescription: "Experience deep, lasting hydration with our signature Sérum Hydratant. This lightweight yet powerful formula penetrates multiple layers of skin to deliver intense moisture where it&apos;s needed most. Formulated with three molecular weights of hyaluronic acid, this serum plumps fine lines, smooths texture, and creates the perfect canvas for your skincare routine.",
  price: 349,
  images: [
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1617897903246-719242758050?w=800&h=1000&fit=crop",
    "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=1000&fit=crop",
  ],
  category: "Serum",
  rating: 4.9,
  reviews: 127,
  badge: "Bestseller",
  benefits: [
    { icon: Droplets, title: "Deep Hydration", description: "Locks in moisture for 24+ hours" },
    { icon: Clock, title: "Fast Absorbing", description: "Lightweight, non-greasy formula" },
    { icon: Sparkles, title: "Visible Results", description: "Plumper skin in 2 weeks" },
  ],
  ingredients: [
    "Hyaluronic Acid (3 molecular weights)",
    "Argan Oil",
    "Vitamin E",
    "Aloe Vera Extract",
    "Rose Water",
    "Niacinamide",
  ],
  howToUse: [
    "Apply 2-3 drops to clean, damp skin",
    "Gently press into face and neck",
    "Follow with moisturizer",
    "Use morning and evening",
  ],
}

const relatedProducts = [
  {
    id: 1,
    name: "Gel Nettoyant Doux",
    price: 249,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&h=800&fit=crop",
    category: "Cleanser",
  },
  {
    id: 2,
    name: "Crème de Jour SPF30",
    price: 399,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600&h=800&fit=crop",
    category: "Moisturizer",
  },
  {
    id: 4,
    name: "Crème de Nuit Anti-Âge",
    price: 449,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=800&fit=crop",
    category: "Night Care",
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [expandedSection, setExpandedSection] = useState<string | null>("benefits")

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Breadcrumb */}
        <nav className="container-luxury py-4">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
            </li>
            <li>/</li>
            <li className="text-foreground">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <section className="container-luxury py-8 md:py-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-secondary">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs tracking-wider uppercase px-4 py-2 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative aspect-square w-20 rounded-xl overflow-hidden border-2 transition-all",
                      selectedImage === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <Image src={image} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                {product.category}
              </p>
              <h1 className="heading-large mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating)
                          ? "fill-accent text-accent"
                          : "text-border"
                      )}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <p className="font-serif text-3xl text-accent mb-8">{product.price} DHS</p>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center border border-border rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-secondary rounded-l-full transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-secondary rounded-r-full transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex-1 btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                  Add to Cart
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border">
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  Free shipping over 499 DHS
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" />
                  30-day returns
                </span>
              </div>

              {/* Accordion Sections */}
              <div className="space-y-4">
                {/* Benefits */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => setExpandedSection(expandedSection === "benefits" ? null : "benefits")}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span className="font-serif text-lg">Benefits</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expandedSection === "benefits" && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedSection === "benefits" && (
                    <div className="pt-4 space-y-4">
                      {product.benefits.map((benefit) => (
                        <div key={benefit.title} className="flex gap-4">
                          <benefit.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">{benefit.title}</p>
                            <p className="text-sm text-muted-foreground">{benefit.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Ingredients */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => setExpandedSection(expandedSection === "ingredients" ? null : "ingredients")}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span className="font-serif text-lg">Ingredients</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expandedSection === "ingredients" && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedSection === "ingredients" && (
                    <ul className="pt-4 space-y-2">
                      {product.ingredients.map((ingredient) => (
                        <li key={ingredient} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* How to Use */}
                <div className="border-b border-border pb-4">
                  <button
                    onClick={() => setExpandedSection(expandedSection === "howto" ? null : "howto")}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span className="font-serif text-lg">How to Use</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 transition-transform",
                        expandedSection === "howto" && "rotate-180"
                      )}
                    />
                  </button>
                  {expandedSection === "howto" && (
                    <ol className="pt-4 space-y-3">
                      {product.howToUse.map((step, index) => (
                        <li key={index} className="text-muted-foreground flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-sm flex-shrink-0">
                            {index + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="section-padding bg-secondary/50">
          <div className="container-luxury">
            <h2 className="heading-medium text-center mb-12">Complete Your Routine</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/product/${item.id}`} className="group">
                  <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl bg-card">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xs tracking-wide text-muted-foreground mb-1">{item.category}</p>
                    <h3 className="font-serif text-lg mb-1 group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-accent font-medium">{item.price} DHS</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
