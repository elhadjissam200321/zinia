export function Marquee() {
  const items = [
    "Glaze now, glow later",
    "Clean ingredients",
    "Radiant skin",
    "Self-care ritual",
    "Premium formulas",
    "Made in Morocco",
  ]

  return (
    <section className="py-6 bg-accent text-accent-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 text-sm tracking-widest uppercase flex items-center gap-8">
            {item}
            <span className="w-2 h-2 rounded-full bg-accent-foreground/30" />
          </span>
        ))}
      </div>
    </section>
  )
}
