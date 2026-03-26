import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Newsletter } from "@/components/sections/newsletter"
import { Heart, Leaf, Sparkles, Globe } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Clean Beauty",
    description: "Every ingredient is chosen with purpose. No parabens, sulfates, or harmful chemicals—ever.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "From recyclable packaging to ethical sourcing, we care for our planet as much as your skin.",
  },
  {
    icon: Sparkles,
    title: "Effective",
    description: "Science-backed formulas that deliver visible results you can see and feel.",
  },
  {
    icon: Globe,
    title: "Moroccan Heritage",
    description: "Inspired by Morocco&apos;s rich beauty traditions and precious natural ingredients.",
  },
]

const timeline = [
  {
    year: "2025",
    title: "The Beginning",
    description: "ZINAÏA was born from a simple belief: everyone deserves access to clean, effective skincare.",
  },
  {
    year: "2025",
    title: "First Collection",
    description: "We launched our signature collection, starting with our bestselling Sérum Hydratant.",
  },
  {
    year: "2025",
    title: "Growing Community",
    description: "Over 5,000 customers trust ZINAÏA for their daily skincare rituals.",
  },
  {
    year: "2026",
    title: "The Future",
    description: "Expanding our collection while staying true to our clean beauty mission.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="container-luxury section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Our Story
              </p>
              <h1 className="heading-display mb-6">
                Inspired by nature,
                <br />
                <span className="text-accent">driven by science</span>
              </h1>
              <p className="body-large text-muted-foreground mb-8">
                ZINAÏA was born from a belief that luxury skincare should be accessible, 
                effective, and kind to both your skin and our planet. We combine Morocco&apos;s 
                rich beauty heritage with modern science to create products that truly work.
              </p>
              <Link
                href="/shop"
                className="btn-luxury bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Explore Our Collection
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=1000&fit=crop"
                  alt="ZINAÏA brand story"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-accent/20 rounded-full hidden md:block" />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-primary text-primary-foreground section-padding">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-[#C4A77D] mb-6">
                Our Mission
              </p>
              <h2 className="heading-large mb-8">
                To make clean, effective skincare a daily ritual that everyone can afford and enjoy.
              </h2>
              <p className="text-lg opacity-80 leading-relaxed">
                We believe that taking care of your skin should be a moment of self-care, 
                not a compromise. That&apos;s why we create products that are as gentle as they 
                are powerful, as luxurious as they are accessible.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                What We Stand For
              </p>
              <h2 className="heading-large">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-8 bg-secondary/50 rounded-3xl hover-lift">
                  <value.icon className="h-10 w-10 text-accent mx-auto mb-6" />
                  <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Our Journey
              </p>
              <h2 className="heading-large">The ZINAÏA Story</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />
                
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-serif text-lg relative z-10">
                        {item.year.slice(2)}
                      </div>
                      <div className="pt-2">
                        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
                          {item.year}
                        </p>
                        <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Image Section */}
        <section className="section-padding">
          <div className="container-luxury">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=800&fit=crop"
                  alt="ZINAÏA products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden md:translate-y-8">
                <Image
                  src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&h=800&fit=crop"
                  alt="Natural ingredients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1614859324967-bdf413c94bfb?w=600&h=800&fit=crop"
                  alt="Moroccan botanicals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
