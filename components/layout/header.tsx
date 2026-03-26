"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ShoppingBag, Search } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { SlideMenu } from "./slide-menu"
import { SlideCart } from "@/components/cart/slide-cart"
import { SearchModal } from "@/components/search/search-modal"

const navigation = [
  { name: "Shop", href: "/shop" },
  { name: "Routines", href: "/routines" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { openCart, itemCount } = useCart()

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm">
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
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
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
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 hover:text-accent transition-colors"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={openCart}
                className="p-2 hover:text-accent transition-colors relative"
                aria-label="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Slide Menu */}
      <SlideMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Slide Cart */}
      <SlideCart />

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
