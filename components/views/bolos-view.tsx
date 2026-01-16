"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import type { Language } from "@/app/page"

interface BolosViewProps {
  language: Language
}

const translations = {
  en: {
    title: "Order your birthday cake!",
    subtitle: "Handcrafted with love for every occasion",
    adultCakes: "Adult Cakes",
    boyCakes: "Boy Cakes",
    girlCakes: "Girl Cakes",
    orderCustom: "Order your custom cake",
    orderVia: "Order via WhatsApp",
  },
  pt: {
    title: "Encomende seu bolo de aniversário!",
    subtitle: "Feitos à mão com amor para cada ocasião",
    adultCakes: "Bolos Adultos",
    boyCakes: "Bolos Menino",
    girlCakes: "Bolos Menina",
    orderCustom: "Encomende seu bolo personalizado",
    orderVia: "Fazer Pedido via WhatsApp",
  },
}

const cakeCategories = {
  adult: [
    { id: 1, image: "/chocolate-brigadeiro-cake-elegant.jpg" },
    { id: 2, image: "/passion-fruit-mousse-cake-yellow.jpg" },
    { id: 3, image: "/brazilian-carrot-cake-chocolate.jpg" },
    { id: 4, image: "/white-coconut-cake-tropical.jpg" },
    { id: 5, image: "/tres-leches-cake-creamy.jpg" },
    { id: 6, image: "/red-velvet-cake-cream-cheese.jpg" },
  ],
  boy: [
    { id: 1, image: "/soccer-themed-birthday-cake-boys.jpg" },
    { id: 2, image: "/superhero-themed-birthday-cake.jpg" },
    { id: 3, image: "/dinosaur-themed-birthday-cake-kids.jpg" },
    { id: 4, image: "/racing-car-themed-birthday-cake.jpg" },
    { id: 5, image: "/space-rocket-themed-birthday-cake.jpg" },
  ],
  girl: [
    { id: 1, image: "/princess-themed-birthday-cake-pink.jpg" },
    { id: 2, image: "/unicorn-rainbow-birthday-cake.jpg" },
    { id: 3, image: "/butterfly-garden-themed-birthday-cake.jpg" },
    { id: 4, image: "/mermaid-themed-birthday-cake.jpg" },
    { id: 5, image: "/floral-elegant-birthday-cake.jpg" },
  ],
}

function CakeCarousel({
  title,
  cakes,
}: {
  title: string
  cakes: typeof cakeCategories.adult
  language: Language
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 280
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="mb-12">
      <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-6 text-center">{title}</h3>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background text-primary p-2 rounded-full shadow-lg transition-colors hidden md:block -translate-x-2"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/90 hover:bg-background text-primary p-2 rounded-full shadow-lg transition-colors hidden md:block translate-x-2"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex-shrink-0 snap-start"
            >
              <div className="w-[220px] bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img src={cake.image || "/placeholder.svg"} alt="Cake" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function BolosView({ language }: BolosViewProps) {
  const t = translations[language]

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-secondary min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t.title}</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Adult Cakes Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <CakeCarousel title={t.adultCakes} cakes={cakeCategories.adult} language={language} />
        </motion.div>

        {/* Boy Cakes Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <CakeCarousel title={t.boyCakes} cakes={cakeCategories.boy} language={language} />
        </motion.div>

        {/* Girl Cakes Carousel */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <CakeCarousel title={t.girlCakes} cakes={cakeCategories.girl} language={language} />
        </motion.div>

        {/* Order Custom Cake Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-8 text-center"
        >
          <div className="bg-background rounded-2xl p-8 md:p-10 shadow-lg">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">{t.orderCustom}</h2>
            <a
              href="https://wa.me/18623570818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              <MessageCircle size={24} />
              {t.orderVia}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
