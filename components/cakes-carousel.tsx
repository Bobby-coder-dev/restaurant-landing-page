"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Language, ViewType } from "@/app/page"

interface CakesCarouselProps {
  language: Language
  setView: (view: ViewType) => void
}

const translations = {
  en: {
    title: "Our Cakes",
    viewAll: "View All Cakes",
  },
  pt: {
    title: "Nossos Bolos",
    viewAll: "Ver Todos os Bolos",
  },
}

const cakes = [
  { id: 1, image: "/brazilian-brigadeiro-chocolate-cake-layers-fudge.jpg" },
  { id: 2, image: "/brazilian-carrot-cake-chocolate-ganache-topping.jpg" },
  { id: 3, image: "/passion-fruit-mousse-cake-yellow-tropical.jpg" },
  { id: 4, image: "/brazilian-coconut-cake-white-frosting-shredded-coc.jpg" },
  { id: 5, image: "/brazilian-corn-cake-bolo-de-milho-golden.jpg" },
  { id: 6, image: "/tres-leches-cake-creamy-milk-soaked.jpg" },
]

export function CakesCarousel({ language, setView }: CakesCarouselProps) {
  const t = translations[language]
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="cakes" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t.title}</h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background text-primary p-2 rounded-full shadow-lg transition-colors hidden md:block -translate-x-4"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background text-primary p-2 rounded-full shadow-lg transition-colors hidden md:block translate-x-4"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {cakes.map((cake, index) => (
              <motion.div
                key={cake.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-shrink-0 snap-start"
              >
                <div className="w-[280px] bg-background rounded-xl overflow-hidden shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img src={cake.image || "/placeholder.svg"} alt="Cake" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => {
              setView("bolos")
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            {t.viewAll}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
