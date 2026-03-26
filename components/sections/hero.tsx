"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"

const slides = [
  {
    id: 1,
    tagline: "Clean Beauty Essentials",
    title: "Hydrate your skin",
    highlight: "for a radiant glow",
    description: "Discover our curated collection of clean skincare crafted with natural ingredients for visibly healthier skin.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-USHASJB8DJYuPiAVniYfek52EVuXHS.png",
    productLabel: "Bestseller",
    productName: "Serum Hydratant",
    productPrice: "349 DHS",
  },
  {
    id: 2,
    tagline: "New Collection",
    title: "Nourish deeply",
    highlight: "transform your routine",
    description: "Experience the power of Moroccan botanicals combined with advanced skincare science for lasting results.",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&h=1000&fit=crop",
    productLabel: "New",
    productName: "Creme Nourrissante",
    productPrice: "299 DHS",
  },
  {
    id: 3,
    tagline: "Premium Care",
    title: "Reveal your glow",
    highlight: "naturally luminous",
    description: "Unlock your skin's natural radiance with our vitamin-enriched formulas designed for all skin types.",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=800&h=1000&fit=crop",
    productLabel: "Exclusive",
    productName: "Huile Eclat",
    productPrice: "399 DHS",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const productCardRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const animateSlide = useCallback((direction: "next" | "prev" = "next") => {
    if (isAnimating || !contentRef.current || !imageRef.current || !productCardRef.current) return
    setIsAnimating(true)

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    })

    // Animate out
    tl.to(contentRef.current.children, {
      opacity: 0,
      y: direction === "next" ? -30 : 30,
      stagger: 0.05,
      duration: 0.4,
      ease: "power2.inOut",
    })
    .to(imageRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.inOut",
    }, "<")
    .to(productCardRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.3,
      ease: "power2.inOut",
    }, "<0.1")

    // Update slide
    tl.call(() => {
      setCurrentSlide((prev) => {
        if (direction === "next") {
          return prev === slides.length - 1 ? 0 : prev + 1
        }
        return prev === 0 ? slides.length - 1 : prev - 1
      })
    })

    // Animate in
    tl.fromTo(
      contentRef.current.children,
      { opacity: 0, y: direction === "next" ? 30 : -30 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: "power2.out" }
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
      "<0.1"
    )
    .fromTo(
      productCardRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
      "<0.2"
    )
  }, [isAnimating])

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return
    const direction = index > currentSlide ? "next" : "prev"
    
    setIsAnimating(true)
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    })

    tl.to([contentRef.current?.children, imageRef.current, productCardRef.current], {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    })
    .call(() => setCurrentSlide(index))
    .to([contentRef.current?.children, imageRef.current, productCardRef.current], {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      stagger: 0.05,
    })
  }, [isAnimating, currentSlide])

  // Initial animation
  useEffect(() => {
    if (!contentRef.current || !imageRef.current || !productCardRef.current) return

    gsap.set([contentRef.current.children, imageRef.current, productCardRef.current], { opacity: 0 })

    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" }
    )
    .fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      "<0.2"
    )
    .fromTo(
      productCardRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
      "<0.3"
    )
  }, [])

  // Auto-play with progress
  useEffect(() => {
    const duration = 6000

    const startAutoPlay = () => {
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: duration / 1000, ease: "linear" }
        )
      }
      autoPlayRef.current = setTimeout(() => {
        animateSlide("next")
      }, duration)
    }

    startAutoPlay()

    return () => {
      if (autoPlayRef.current) clearTimeout(autoPlayRef.current)
      gsap.killTweensOf(progressRef.current)
    }
  }, [currentSlide, animateSlide])

  const slide = slides[currentSlide]

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-28 md:pt-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E8DED4]/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#D4DDD4]/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div ref={contentRef} className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              {slide.tagline}
            </p>
            <h1 className="heading-display mb-8 text-balance">
              {slide.title}
              <br />
              <span className="text-accent">{slide.highlight}</span>
            </h1>
            <p className="body-large text-muted-foreground max-w-md mx-auto lg:mx-0 mb-10">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/shop"
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Shop Now
              </Link>
              <Link
                href="/routines"
                className="btn-luxury border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Build Your Routine
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-8 justify-center lg:justify-start mt-12 pt-12 border-t border-border">
              <div className="text-center">
                <p className="font-serif text-2xl text-accent">100%</p>
                <p className="text-xs tracking-wide text-muted-foreground mt-1">Clean Ingredients</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-accent">+5000</p>
                <p className="text-xs tracking-wide text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-2xl text-accent">4.9</p>
                <p className="text-xs tracking-wide text-muted-foreground mt-1">Average Rating</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-accent/10 rounded-3xl hidden md:block" />

              <div ref={imageRef} className="relative h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#E8DED4] to-[#D4C4B0]">
                <Image
                  src={slide.image}
                  alt={`ZINAIA Skincare - ${slide.productName}`}
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>

              {/* Floating product card */}
              <div
                ref={productCardRef}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-card p-4 rounded-2xl shadow-xl max-w-[200px]"
              >
                <p className="text-xs tracking-wide text-muted-foreground mb-1">{slide.productLabel}</p>
                <p className="font-serif text-sm mb-2">{slide.productName}</p>
                <p className="text-accent font-medium">{slide.productPrice}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center lg:justify-start gap-4 mt-12">
          {/* Navigation Dots */}
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-accent w-8"
                    : "bg-border hover:bg-accent/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <div
                    ref={index === currentSlide ? progressRef : null}
                    className="absolute inset-0 bg-accent/50 rounded-full origin-left"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Arrow Controls */}
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => animateSlide("prev")}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-50"
              aria-label="Previous slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => animateSlide("next")}
              disabled={isAnimating}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-50"
              aria-label="Next slide"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-sm text-muted-foreground ml-4">
            <span className="text-foreground font-medium">{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="mx-1">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
