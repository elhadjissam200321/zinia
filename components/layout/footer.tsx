import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "All Products", href: "/shop" },
    { name: "Serums", href: "/shop?category=serum" },
    { name: "Creams", href: "/shop?category=cream" },
    { name: "Routines", href: "/routines" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl tracking-wider">ZINAÏA</span>
            </Link>
            <p className="text-sm leading-relaxed opacity-80 mb-6 max-w-xs">
              Premium skincare crafted with clean, effective ingredients for radiant, healthy skin.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-primary-foreground/20 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 opacity-60">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-60 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 opacity-60">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-60 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-xs tracking-widest uppercase mb-6 opacity-60">Contact</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <a href="mailto:contact@zinaia-skincare.com" className="hover:opacity-60 transition-opacity">
                  contact@zinaia-skincare.com
                </a>
              </li>
              <li>
                <a href="tel:+212525213027" className="hover:opacity-60 transition-opacity">
                  05 25 21 30 27
                </a>
              </li>
              <li>
                <a href="https://wa.me/212664742602" className="hover:opacity-60 transition-opacity">
                  WhatsApp: 06 64 74 26 02
                </a>
              </li>
            </ul>
            <h4 className="text-xs tracking-widest uppercase mb-4 opacity-60">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-60 transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
          <p>&copy; {new Date().getFullYear()} ZINAÏA Skincare. All rights reserved.</p>
          <p>Made with care in Morocco</p>
        </div>
      </div>
    </footer>
  )
}
