"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Check, Package, Truck, MessageCircle, ArrowRight, Home, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface OrderData {
  orderNumber: string
  items: Array<{ id: number; name: string; price: number; quantity: number; image: string }>
  total: number
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
    address: string
    city: string
  }
}

export default function ThankYouPage() {
  const [order, setOrder] = useState<OrderData | null>(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder))
    }
  }, [])

  const copyOrderNumber = () => {
    if (order) {
      navigator.clipboard.writeText(order.orderNumber)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const whatsappMessage = order
    ? encodeURIComponent(
        `Bonjour ZINAÏA!\n\nJe viens de passer une commande:\n\nNuméro: ${order.orderNumber}\nNom: ${order.customer.firstName} ${order.customer.lastName}\nTotal: ${order.total} DHS\n\nMerci!`
      )
    : ""

  if (!order) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="font-serif text-2xl mb-4">No recent order found</h1>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container-luxury py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wider">
            ZINAÏA
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
        </div>
      </header>

      <div className="container-luxury py-12 md:py-20">
        {/* Success Animation */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-sage/30 rounded-full animate-ping" />
            <div className="relative w-24 h-24 bg-sage rounded-full flex items-center justify-center">
              <Check className="h-12 w-12 text-foreground" strokeWidth={2.5} />
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Thank you, {order.customer.firstName}!
          </h1>
          <p className="text-muted-foreground text-lg">
            Your order has been confirmed and will be shipped soon.
          </p>
        </div>

        {/* Order Number */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-card rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Order Number</p>
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-2xl font-medium tracking-wider">{order.orderNumber}</span>
              <button
                onClick={copyOrderNumber}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
                aria-label="Copy order number"
              >
                <Copy className={cn("h-4 w-4 transition-colors", copied ? "text-accent" : "text-muted-foreground")} />
              </button>
            </div>
            {copied && (
              <p className="text-xs text-accent mt-2 animate-fade-in-up">Copied!</p>
            )}
          </div>
        </div>

        {/* WhatsApp Confirmation */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6 text-center">
            <MessageCircle className="h-10 w-10 text-[#25D366] mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-2">Confirm via WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Send us a message to confirm your order and get delivery updates
            </p>
            <a
              href={`https://wa.me/212600000000?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Confirm on WhatsApp
            </a>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="max-w-md mx-auto mb-12">
          <h3 className="font-serif text-xl mb-6 text-center">What happens next</h3>
          <div className="space-y-6">
            {[
              { icon: Check, label: "Order Confirmed", desc: "We&apos;ve received your order", active: true },
              { icon: Package, label: "Preparing", desc: "Your order is being packed", active: false },
              { icon: Truck, label: "On the way", desc: "Your order is out for delivery", active: false },
            ].map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center",
                      step.active ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    )}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  {index < 2 && (
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-px h-6 bg-border" />
                  )}
                </div>
                <div>
                  <p className={cn("font-medium", step.active ? "text-foreground" : "text-muted-foreground")}>
                    {step.label}
                  </p>
                  <p className="text-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: step.desc }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Details */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-3xl p-6 md:p-8">
            <h3 className="font-serif text-xl mb-6">Order Details</h3>

            {/* Items */}
            <div className="space-y-4 mb-6 pb-6 border-b border-border">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    <p className="text-accent">{item.price * item.quantity} DHS</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping Address */}
            <div className="mb-6 pb-6 border-b border-border">
              <h4 className="text-sm text-muted-foreground mb-2">Shipping Address</h4>
              <p className="font-medium">{order.customer.firstName} {order.customer.lastName}</p>
              <p className="text-muted-foreground">{order.customer.address}</p>
              <p className="text-muted-foreground">{order.customer.city}</p>
              <p className="text-muted-foreground">{order.customer.phone}</p>
            </div>

            {/* Total */}
            <div className="flex justify-between font-serif text-xl">
              <span>Total Paid</span>
              <span className="text-accent">{order.total} DHS</span>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 btn-luxury bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
          >
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
