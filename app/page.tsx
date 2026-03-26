import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { Benefits } from "@/components/sections/benefits"
import { Ingredients } from "@/components/sections/ingredients"
import { Routines } from "@/components/sections/routines"
import { Testimonials } from "@/components/sections/testimonials"
import { Gallery } from "@/components/sections/gallery"
import { Sustainability } from "@/components/sections/sustainability"
import { Marquee } from "@/components/sections/marquee"
import { Newsletter } from "@/components/sections/newsletter"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Benefits />
        <Ingredients />
        <Routines />
        <Testimonials />
        <Sustainability />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
