export function PressBar() {
  return (
    <section className="py-12 md:py-16 border-y border-border bg-card/50">
      <div className="container-luxury">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
          As featured in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40">
          <span className="text-xl md:text-2xl font-serif tracking-wider">VOGUE</span>
          <span className="text-xl md:text-2xl font-serif tracking-wider">ELLE</span>
          <span className="text-xl md:text-2xl font-serif tracking-wider">MARIE CLAIRE</span>
          <span className="text-xl md:text-2xl font-serif tracking-wider">GLAMOUR</span>
          <span className="text-xl md:text-2xl font-serif tracking-wider">BAZAAR</span>
        </div>
      </div>
    </section>
  )
}
