"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400&h=400&fit=crop",
    alt: "Skincare routine flatlay",
  },
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop",
    alt: "Woman applying skincare",
  },
  {
    src: "https://images.unsplash.com/photo-1614859324967-bdf413c94bfb?w=400&h=400&fit=crop",
    alt: "Natural ingredients",
  },
  {
    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=400&fit=crop",
    alt: "Product photography",
  },
  {
    src: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
    alt: "Skincare texture",
  },
  {
    src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
    alt: "Clean beauty aesthetic",
  },
]

export function Gallery() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-luxury mb-12">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            @zinaia_skincare
          </p>
          <h2 className="heading-large mb-6 text-balance">
            Fresh + refresh
          </h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Join our community and share your glow. Tag us for a chance to be featured.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
        {galleryImages.map((image, index) => (
          <a
            key={index}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        ))}
      </div>

      {/* Follow CTA */}
      <div className="container-luxury mt-12 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-luxury border border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex items-center gap-2"
        >
          <Instagram className="h-4 w-4" />
          Follow Us on Instagram
        </a>
      </div>
    </section>
  )
}
