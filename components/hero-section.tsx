"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { Language } from "@/app/page"

interface HeroSectionProps {
  language: Language
}

const translations = {
  en: {
    headline: "Brazilian Taste in the USA",
    subheadline: "Typical recipes made with care and tradition",
  },
  pt: {
    headline: "Sabor do Brasil nos EUA",
    subheadline: "Receitas típicas feitas com carinho e tradição",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = translations[language]

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/delicious-brazilian-salgados-coxinha-empanadas-gol.jpg')`,
        }}
      >
        {/* Overlay escuro para dar leitura ao texto branco */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Logo Maranato acima do texto */}
        <motion.img
          src="/maranato.png"
          alt="Salgaderia Maranato"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="h-24 md:h-32 w-auto mb-8 drop-shadow-2xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance uppercase tracking-tight"
        >
          {t.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto text-pretty font-light"
        >
          {t.subheadline}
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  )
}