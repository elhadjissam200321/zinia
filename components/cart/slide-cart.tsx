"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Minus, Plus, ShoppingBag, ArrowRight, Sparkles } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { cn } from "@/lib/utils"

export function SlideCart() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, subtotal } = useCart()
  const shipping = subtotal >= 499 ? 0 : 49
  const total = subtotal + shipping
  const freeShippingProgress = Math.min((subtotal / 499) * 100, 100)

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeCart}
      />

      {/* Slide Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transition-transform duration-500 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl">Your Bag</h2>
              <p className="text-sm text-muted-foreground">{itemCount} items</p>
            </div>
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {subtotal < 499 && subtotal > 0 && (
          <div className="px-6 py-4 bg-blush/50">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <p className="text-sm">
                Add <span className="font-medium text-accent">{499 - subtotal} DHS</span> for free shipping
              </p>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>
        )}

        {subtotal >= 499 && (
          <div className="px-6 py-4 bg-sage/30">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <p className="text-sm font-medium">You&apos;ve unlocked free shipping!</p>
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h3 className="font-serif text-xl mb-2">Your bag is empty</h3>
              <p className="text-muted-foreground mb-6">
                Discover our curated skincare collection
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-card rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="font-medium text-sm leading-tight">{item.name}</h4>
                      <p className="text-accent font-medium text-sm mt-1">{item.price} DHS</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive text-xs underline transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 bg-card/50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Subtotal</span>
                <span>{subtotal} DHS</span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Shipping</span>
                <span>{shipping === 0 ? "FREE" : `${shipping} DHS`}</span>
              </div>
              <div className="flex justify-between font-serif text-lg pt-2 border-t border-border">
                <span>Total</span>
                <span className="text-accent">{total} DHS</span>
              </div>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="w-full btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group flex items-center justify-center"
            >
              Checkout
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/cart"
              onClick={closeCart}
              className="block text-center text-sm text-muted-foreground mt-3 hover:text-foreground transition-colors"
            >
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
