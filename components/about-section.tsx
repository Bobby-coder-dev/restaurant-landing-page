"use client"

import { motion } from "framer-motion"
import type { Language } from "@/app/page"

interface AboutSectionProps {
  language: Language
}

const translations = {
  en: {
    title: "Welcome to Salgaderia Maranato",
    description:
      "Welcome to Salgaderia Maranato. Experience the authentic taste of Brazil in the heart of the United States. Here, each dish is prepared with fresh ingredients and traditional recipes, bringing the best of our cuisine to your table. Come and enjoy a unique gastronomic experience, full of colors, aromas and flavors that evoke Brazil.",
  },
  pt: {
    title: "Bem-Vindo(a) a Salgaderia Maranato",
    description:
      "Sinta o sabor autêntico do Brasil no coração dos Estados Unidos. Aqui, cada prato é feito com ingredientes frescos e receitas tradicionais, trazendo o melhor da nossa culinária para a sua mesa. Venha viver uma experiência gastronômica única, repleta de cores, aromas e sabores que lembram o Brasil de verdade.",
  },
}

export function AboutSection({ language }: AboutSectionProps) {
  const t = translations[language]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{t.title}</h2>
            <p className="text-foreground/80 text-lg leading-relaxed">{t.description}</p>
          </motion.div>

          {/* Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2 relative h-[400px] md:h-[500px]"
          >
            {/* Exterior Image */}
            <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-xl z-10">
              <img src="/cozy-brazilian-restaurant-exterior-facade-warm-lig.jpg" alt="Restaurant exterior" className="w-full h-full object-cover" />
            </div>
            {/* Interior Image - Overlapping */}
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-xl z-20 border-4 border-background">
              <img src="/cozy-brazilian-restaurant-interior-warm-wood-decor.jpg" alt="Restaurant interior" className="w-full h-full object-cover" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
