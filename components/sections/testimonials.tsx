"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Casablanca",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    rating: 5,
    text: "My skin has never looked better. The sérum hydratant has transformed my morning routine completely. I get compliments on my skin every day!",
    product: "Sérum Hydratant",
  },
  {
    id: 2,
    name: "Leila B.",
    location: "Marrakech",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    rating: 5,
    text: "I was skeptical at first, but the results speak for themselves. The complete routine has given me the glow I&apos;ve always wanted. Worth every dirham.",
    product: "Complete Routine",
  },
  {
    id: 3,
    name: "Nadia K.",
    location: "Rabat",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop",
    rating: 5,
    text: "Finally, a brand that understands Moroccan skin. The night cream has reduced my fine lines visibly in just 4 weeks. Absolutely love it!",
    product: "Crème de Nuit Anti-Âge",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-[#2C2825] text-[#F5F0EB]">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#C4A77D] mb-4">
            Reviews
          </p>
          <h2 className="heading-large mb-6">
            A glow to remember
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#C4A77D] text-[#C4A77D]" />
            ))}
          </div>
          <p className="text-sm text-[#F5F0EB]/60">4.9 average rating from 500+ reviews</p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-[#3D3835] rounded-3xl p-8 md:p-12">
                    <Quote className="h-10 w-10 text-[#C4A77D] mb-6" />
                    <p className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-[#F5F0EB]/60">{testimonial.location}</p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-xs text-[#C4A77D] uppercase tracking-wide">Verified Purchase</p>
                        <p className="text-sm text-[#F5F0EB]/60">{testimonial.product}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 border border-[#F5F0EB]/20 rounded-full hover:bg-[#F5F0EB]/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === activeIndex ? "bg-[#C4A77D] w-6" : "bg-[#F5F0EB]/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 border border-[#F5F0EB]/20 rounded-full hover:bg-[#F5F0EB]/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
