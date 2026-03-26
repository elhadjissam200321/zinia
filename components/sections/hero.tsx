"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import gsap from "gsap"

const slides = [
  {
    id: 1,
    tagline: "New Collection",
    title: "Hydrate your skin",
    subtitle: "for a radiant glow",
    cta: "Shop Now",
    ctaHref: "/shop",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-USHASJB8DJYuPiAVniYfek52EVuXHS.png",
  },
  {
    id: 2,
    tagline: "Moroccan Botanicals",
    title: "Nourish deeply,",
    subtitle: "transform your routine",
    cta: "Discover",
    ctaHref: "/shop",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1600&h=900&fit=crop&q=80",
  },
  {
    id: 3,
    tagline: "Premium Care",
    title: "Reveal your natural",
    subtitle: "luminous glow",
    cta: "Explore",
    ctaHref: "/shop",
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=1600&h=900&fit=crop&q=80",
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  // Refs for each slide layer
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === current) return
      setAnimating(true)

      const prevEl = slideRefs.current[current]
      const nextEl = slideRefs.current[next]
      const prevText = textRefs.current[current]
      const nextText = textRefs.current[next]

      if (!prevEl || !nextEl || !prevText || !nextText) {
        setCurrent(next)
        setAnimating(false)
        return
      }

      // Make next slide visible above previous
      gsap.set(nextEl, { opacity: 0, zIndex: 2 })
      gsap.set(prevEl, { zIndex: 1 })

      // Text out
      gsap.to(Array.from(prevText.children), {
        opacity: 0,
        y: -20,
        stagger: 0.05,
        duration: 0.35,
        ease: "power2.in",
      })

      // Image crossfade
      gsap.to(nextEl, {
        opacity: 1,
        duration: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrent(next)
          setAnimating(false)
        },
      })

      // Text in (after a short delay)
      gsap.set(Array.from(nextText.children), { opacity: 0, y: 30 })
      gsap.to(Array.from(nextText.children), {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.5,
      })
    },
    [animating, current]
  )

  const next = useCallback(() => {
    goTo(current === slides.length - 1 ? 0 : current + 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    autoRef.current = setTimeout(next, 6000)
    return () => {
      if (autoRef.current) clearTimeout(autoRef.current)
    }
  }, [current, next])

  // Entrance animation
  useEffect(() => {
    const text = textRefs.current[0]
    if (!text) return
    gsap.set(Array.from(text.children), { opacity: 0, y: 40 })
    gsap.to(Array.from(text.children), {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    })
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100svh" }}
      aria-label="Hero slider"
    >
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => { slideRefs.current[i] = el }}
          className="absolute inset-0"
          style={{
            opacity: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 1 : 0,
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />
        </div>
      ))}

      {/* Text layers */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => { textRefs.current[i] = el }}
          className="absolute inset-0 flex flex-col justify-end pb-24 md:pb-32"
          style={{
            zIndex: 10,
            pointerEvents: i === current ? "auto" : "none",
            visibility: i === current ? "visible" : "hidden",
          }}
        >
          <div className="container-luxury">
            {/* Tagline */}
            <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 mb-4 font-sans">
              {slide.tagline}
            </p>

            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-6 text-balance">
              {slide.title}
              <br />
              <span className="text-[#C4A77D]">{slide.subtitle}</span>
            </h1>

            {/* CTA */}
            <Link
              href={slide.ctaHref}
              className="inline-flex items-center gap-3 bg-white text-[#2C2825] text-sm font-sans font-medium tracking-widest uppercase px-8 py-4 hover:bg-[#C4A77D] hover:text-white transition-colors duration-300"
            >
              {slide.cta}
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      ))}

      {/* Controls — bottom right */}
      <div className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-4">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group relative h-[2px] bg-white/30 transition-all duration-300 overflow-hidden"
              style={{ width: i === current ? 40 : 16 }}
            >
              {i === current && (
                <ProgressBar key={current} duration={6000} />
              )}
            </button>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            disabled={animating}
            aria-label="Previous slide"
            className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors disabled:opacity-40"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            disabled={animating}
            aria-label="Next slide"
            className="w-10 h-10 flex items-center justify-center border border-white/30 text-white hover:border-white hover:bg-white/10 transition-colors disabled:opacity-40"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide counter */}
        <span className="text-white/60 text-xs font-sans tracking-widest hidden md:block">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-sans">Scroll</span>
        <div className="w-px h-8 bg-white/20 relative overflow-hidden">
          <div className="w-full bg-white/60 animate-scroll-line absolute top-0 left-0" style={{ height: "50%" }} />
        </div>
      </div>
    </section>
  )
}

// Animated progress bar for active dot
function ProgressBar({ duration }: { duration: number }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barRef.current) return
    gsap.fromTo(
      barRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      { scaleX: 1, duration: duration / 1000, ease: "linear" }
    )
  }, [duration])

  return (
    <div
      ref={barRef}
      className="absolute inset-0 bg-white"
      style={{ transformOrigin: "left center" }}
    />
  )
}
