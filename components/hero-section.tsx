"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import type { Language } from "@/app/page"

interface HeroSectionProps {
  language: Language
}

const translations = {
  en: {
    headline: "Authentic Brazilian Flavors",
    subheadline: "Handcrafted salgados and traditional recipes from Brazil, made fresh daily with love.",
  },
  pt: {
    headline: "Sabores Autênticos do Brasil",
    subheadline: "Salgados artesanais e receitas tradicionais brasileiras, feitos fresquinhos com amor.",
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
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-background mb-6 text-balance"
        >
          {t.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl lg:text-2xl text-background/90 max-w-2xl mx-auto text-pretty"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-background/80 hover:text-background transition-colors"
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
