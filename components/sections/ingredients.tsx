"use client"

import { Sparkles, Leaf, Droplets, Shield } from "lucide-react"

const ingredients = [
  {
    icon: Droplets,
    name: "Hyaluronic Acid",
    description: "Deep hydration that plumps and smooths skin from within.",
    color: "bg-[#D4DDD4]",
  },
  {
    icon: Sparkles,
    name: "Vitamin C",
    description: "Brightens and evens skin tone while protecting from damage.",
    color: "bg-[#F2E8E4]",
  },
  {
    icon: Leaf,
    name: "Argan Oil",
    description: "Moroccan gold that nourishes and restores natural radiance.",
    color: "bg-[#E8DED4]",
  },
  {
    icon: Shield,
    name: "Niacinamide",
    description: "Strengthens skin barrier and minimizes pores visibly.",
    color: "bg-[#FAF8F5]",
  },
]

export function Ingredients() {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Clean Beauty
            </p>
            <h2 className="heading-large mb-6">
              Intentional
              <br />
              <span className="text-accent">ingredients</span>
            </h2>
            <p className="body-large text-muted-foreground mb-8 max-w-lg">
              Every formula is crafted with purpose. We select only the most effective, 
              clean ingredients that deliver real results without compromise.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Paraben-Free</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Sulfate-Free</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Cruelty-Free</span>
              <span className="px-4 py-2 bg-secondary rounded-full text-sm">Vegan</span>
            </div>
          </div>

          {/* Ingredients Grid */}
          <div className="grid grid-cols-2 gap-4">
            {ingredients.map((ingredient, index) => (
              <div
                key={ingredient.name}
                className={`${ingredient.color} p-6 rounded-2xl hover-lift cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ingredient.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-serif text-lg mb-2">{ingredient.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {ingredient.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
