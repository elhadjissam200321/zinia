"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, X, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const popularSearches = ["Sérum", "Hydratant", "Anti-âge", "SPF", "Nettoyant"]

const allProducts = [
  { id: 1, name: "Nettoyant Doux", price: 249, category: "Cleanser", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=200&h=200&fit=crop" },
  { id: 2, name: "Crème de Jour SPF30", price: 399, category: "Moisturizer", image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=200&h=200&fit=crop" },
  { id: 3, name: "Sérum Hydratant", price: 349, category: "Serum", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop" },
  { id: 4, name: "Crème de Nuit", price: 429, category: "Night Care", image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=200&h=200&fit=crop" },
  { id: 5, name: "Contour des Yeux", price: 299, category: "Eye Care", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=200&h=200&fit=crop" },
  { id: 6, name: "Masque Éclat", price: 279, category: "Mask", image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&h=200&fit=crop" },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredProducts = query.length > 0
    ? allProducts.filter(
        product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ""
      setQuery("")
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/60 backdrop-blur-md z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-background max-h-[85vh] overflow-hidden shadow-2xl">
          {/* Search Input */}
          <div className="border-b border-border">
            <div className="container-luxury py-6">
              <div className="flex items-center gap-4">
                <Search className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="flex-1 bg-transparent text-xl md:text-2xl font-light outline-none placeholder:text-muted-foreground"
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                  aria-label="Close search"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="container-luxury py-8 overflow-y-auto max-h-[calc(85vh-100px)]">
            {query.length === 0 ? (
              /* Popular Searches */
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-accent" />
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Popular Searches</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-5 py-2.5 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-full text-sm transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>

                <div className="mt-10">
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Quick Links</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Shop All", "New Arrivals", "Best Sellers", "Routines"].map((link) => (
                      <Link
                        key={link}
                        href={link === "Shop All" || link === "New Arrivals" || link === "Best Sellers" ? "/shop" : "/routines"}
                        onClick={onClose}
                        className="p-4 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors group"
                      >
                        <span className="font-medium">{link}</span>
                        <ArrowRight className="h-4 w-4 mt-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : filteredProducts.length > 0 ? (
              /* Search Results */
              <div>
                <p className="text-sm text-muted-foreground mb-4">
                  {filteredProducts.length} results for &quot;{query}&quot;
                </p>
                <div className="grid gap-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.id}`}
                      onClick={onClose}
                      className="flex items-center gap-4 p-3 bg-card rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">{product.category}</p>
                        <h4 className="font-medium">{product.name}</h4>
                        <p className="text-accent font-medium">{product.price} DHS</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* No Results */
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-xl mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  Try searching for something else
                </p>
                <Link
                  href="/shop"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  Browse all products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
