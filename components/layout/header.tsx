"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Routines", href: "/routines" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2.5 text-xs tracking-widest uppercase">
        Free shipping on orders over 499 DHS
      </div>
      
      <nav className="container-luxury">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 -ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <span className="font-serif text-2xl md:text-3xl tracking-wider">
              ZINAÏA
            </span>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 hover:text-accent transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="p-2 hover:text-accent transition-colors hidden md:block" aria-label="Account">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="p-2 hover:text-accent transition-colors relative" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[calc(2.5rem+4rem)] bg-background z-40 transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="container-luxury py-8">
          <div className="flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-serif tracking-wide hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-6 border-t border-border">
              <Link
                href="/account"
                className="flex items-center gap-3 text-sm tracking-wide hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-5 w-5" />
                Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
