"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Minus, Plus, X, ShoppingBag, ArrowRight, Sparkles, Trash2 } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CartPage() {
  const { items, subtotal, removeItem, updateQuantity, clearCart } = useCart()
  const shipping = subtotal >= 499 ? 0 : 49
  const total = subtotal + shipping
  const freeShippingProgress = Math.min((subtotal / 499) * 100, 100)

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-28 md:pt-32 min-h-screen">
          <section className="container-luxury section-padding">
            <div className="max-w-md mx-auto text-center">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h1 className="heading-medium mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                href="/shop"
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                Start Shopping
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32 min-h-screen">
        <section className="container-luxury section-padding">
          <div className="flex items-center justify-between mb-8">
            <h1 className="heading-large">Your Cart</h1>
            <button
              onClick={clearCart}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors"
            >
              <Trash2 className="h-4 w-4" />
              Clear All
            </button>
          </div>

          {/* Free Shipping Progress */}
          {subtotal < 499 && (
            <div className="bg-blush/50 rounded-2xl p-4 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-accent" />
                <p className="text-sm">
                  Add <span className="font-medium text-accent">{499 - subtotal} DHS</span> more for free shipping
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
            <div className="bg-sage/30 rounded-2xl p-4 mb-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-accent" />
                <p className="text-sm font-medium">You&apos;ve unlocked free shipping!</p>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-4 md:gap-6 p-4 bg-card rounded-2xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative w-24 h-32 md:w-28 md:h-36 rounded-xl overflow-hidden flex-shrink-0 bg-secondary">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="font-serif text-lg">{item.name}</h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1.5 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-accent font-medium">{item.price} DHS</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-background rounded-full transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="font-medium">{item.price * item.quantity} DHS</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-3xl p-6 md:p-8 sticky top-32">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal ({items.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>{subtotal} DHS</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? "text-accent font-medium" : ""}>
                      {shipping === 0 ? "FREE" : `${shipping} DHS`}
                    </span>
                  </div>
                </div>

                <div className="border-t border-border pt-4 mb-8">
                  <div className="flex justify-between font-serif text-xl">
                    <span>Total</span>
                    <span className="text-accent">{total} DHS</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="w-full btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl group flex items-center justify-center"
                >
                  Checkout
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/shop"
                  className="block text-center text-sm text-muted-foreground mt-4 hover:text-foreground transition-colors"
                >
                  Continue Shopping
                </Link>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-4">
                    We accept
                  </p>
                  <div className="flex justify-center gap-4 text-muted-foreground text-sm">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Cash on Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
