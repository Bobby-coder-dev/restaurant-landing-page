"use client"

import { motion } from "framer-motion"
import type { Language } from "@/app/page"

interface QuoteSectionProps {
  language: Language
}

const translations = {
  en: {
    quote: "In our kitchen, every recipe tells a story. Flavors of Brazil prepared with love for you.",
  },
  pt: {
    quote: "Na nossa cozinha, cada receita conta uma história. Sabores do Brasil preparados com carinho para você.",
  },
}

export function QuoteSection({ language }: QuoteSectionProps) {
  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed mb-8 text-balance">
            "{t.quote}"
          </p>
          <p className="text-lg font-medium text-primary-foreground/80">— Marina Gizzi —</p>
        </motion.div>
      </div>
    </section>
  )
}
