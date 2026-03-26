import Image from "next/image"
import Link from "next/link"
import { Leaf, Recycle, Heart, Package } from "lucide-react"

const commitments = [
  {
    icon: Leaf,
    title: "Clean Formulas",
    description: "No parabens, sulfates, or harmful chemicals",
  },
  {
    icon: Recycle,
    title: "Recyclable Packaging",
    description: "Sustainable materials that respect our planet",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Never tested on animals, certified vegan",
  },
  {
    icon: Package,
    title: "Minimal Waste",
    description: "Thoughtfully designed to reduce impact",
  },
]

export function Sustainability() {
  return (
    <section className="section-padding bg-[#D4DDD4]/30">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Commitment
            </p>
            <h2 className="heading-large mb-6 text-balance">
              From clean beauty ingredients to reusable boxes,
              <span className="text-accent"> we care committed to mindful packaging</span>
            </h2>
            <p className="body-large text-muted-foreground mb-10 max-w-lg">
              Sustainability isn&apos;t just a trend for us—it&apos;s a core value. Every decision we make considers 
              its impact on both your skin and our planet.
            </p>

            {/* Commitments Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {commitments.map((commitment) => (
                <div key={commitment.title} className="flex gap-4">
                  <commitment.icon className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">{commitment.title}</h4>
                    <p className="text-sm text-muted-foreground">{commitment.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="btn-luxury border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-O3HGAnk8T9GBDWJ4aNEvrIxRvZsCIg.png"
                alt="ZINAÏA sustainable beauty approach"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl max-w-[240px]">
              <p className="text-4xl font-serif text-accent mb-2">100%</p>
              <p className="text-sm text-muted-foreground">
                of our packaging is recyclable or reusable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
