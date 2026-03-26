"use client"

import { useEffect } from "react"
import Link from "next/link"
import { X, ArrowRight, Instagram, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Routines", href: "/routines" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const categories = [
  { name: "Cleansers", href: "/shop?category=cleanser" },
  { name: "Serums", href: "/shop?category=serum" },
  { name: "Moisturizers", href: "/shop?category=moisturizer" },
  { name: "Sets", href: "/routines" },
]

interface SlideMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function SlideMenu({ isOpen, onClose }: SlideMenuProps) {
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
        onClick={onClose}
      />

      {/* Slide Panel */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full max-w-sm bg-background z-50 shadow-2xl transition-transform duration-500 ease-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="font-serif text-2xl tracking-wider">ZINAÏA</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-6">
            <ul className="space-y-1">
              {navigation.map((item, index) => (
                <li
                  key={item.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-4 text-2xl font-serif tracking-wide hover:text-accent transition-colors group"
                  >
                    {item.name}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories */}
          <div className="px-6 py-4 border-t border-border">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Categories</h3>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    href={cat.href}
                    onClick={onClose}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border bg-secondary/30">
          <div className="flex gap-4 mb-4">
            <a
              href="https://instagram.com/zinaia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="mailto:hello@zinaia.com"
              className="p-3 bg-background rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Free shipping on orders over 499 DHS
          </p>
        </div>
      </div>
    </>
  )
}
