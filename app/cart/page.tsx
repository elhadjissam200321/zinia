"use client"

import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Minus, Plus, X, ShoppingBag, ArrowRight } from "lucide-react"

// Demo cart items - in a real app this would come from state/context
const cartItems = [
  {
    id: 3,
    name: "Sérum Hydratant",
    price: 349,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Crème de Jour SPF30",
    price: 399,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=300&h=400&fit=crop",
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 499 ? 0 : 49
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-28 md:pt-32 min-h-screen">
          <section className="container-luxury section-padding">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="heading-medium mb-4">Your cart is empty</h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven&apos;t added anything to your cart yet.
              </p>
              <Link
                href="/shop"
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90"
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
          <h1 className="heading-large mb-12 text-center">Your Cart</h1>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 p-4 bg-card rounded-2xl"
                >
                  <div className="relative w-24 h-32 rounded-xl overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-serif text-lg">{item.name}</h3>
                        <button
                          className="p-1 hover:text-destructive transition-colors"
                          aria-label="Remove item"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-accent font-medium">{item.price} DHS</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/50 rounded-3xl p-8 sticky top-32">
                <h2 className="font-serif text-xl mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{subtotal} DHS</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `${shipping} DHS`}</span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Add {499 - subtotal} DHS more for free shipping
                    </p>
                  )}
                </div>

                <div className="border-t border-border pt-4 mb-8">
                  <div className="flex justify-between font-serif text-xl">
                    <span>Total</span>
                    <span className="text-accent">{total} DHS</span>
                  </div>
                </div>

                <button className="w-full btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl group">
                  Checkout
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-4">
                    We accept
                  </p>
                  <div className="flex justify-center gap-4 text-muted-foreground text-sm">
                    <span>Visa</span>
                    <span>Mastercard</span>
                    <span>Cash</span>
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
