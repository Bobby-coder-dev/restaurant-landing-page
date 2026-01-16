"use client"

import { motion } from "framer-motion"
import type { Language } from "@/app/page"

interface DailySpecialsProps {
  language: Language
}

const translations = {
  en: {
    title: "Daily Specials",
    subtitle: "Fresh plates prepared with love, every day of the week.",
  },
  pt: {
    title: "Prato do Dia",
    subtitle: "Pratos frescos preparados com carinho, todos os dias da semana.",
  },
}

const specials = [
  {
    id: 1,
    dayEn: "Monday",
    dayPt: "Segunda",
    dishEn: "Feijoada Completa",
    dishPt: "Feijoada Completa",
    price: "$18.99",
    image: "/brazilian-feijoada-black-beans-pork-rice-orange.jpg",
  },
  {
    id: 2,
    dayEn: "Tuesday",
    dayPt: "Terça",
    dishEn: "Picanha Grelhada",
    dishPt: "Picanha Grelhada",
    price: "$24.99",
    image: "/brazilian-picanha-steak-grilled-rice-farofa.jpg",
  },
  {
    id: 3,
    dayEn: "Wednesday",
    dayPt: "Quarta",
    dishEn: "Frango à Parmegiana",
    dishPt: "Frango à Parmegiana",
    price: "$16.99",
    image: "/chicken-parmegiana-cheese-tomato-sauce-rice.jpg",
  },
  {
    id: 4,
    dayEn: "Thursday",
    dayPt: "Quinta",
    dishEn: "Moqueca de Peixe",
    dishPt: "Moqueca de Peixe",
    price: "$22.99",
    image: "/brazilian-moqueca-fish-stew-coconut-palm-oil.jpg",
  },
  {
    id: 5,
    dayEn: "Friday",
    dayPt: "Sexta",
    dishEn: "Costela no Bafo",
    dishPt: "Costela no Bafo",
    price: "$26.99",
    image: "/brazilian-slow-cooked-beef-ribs-tender-mandioca.jpg",
  },
]

export function DailySpecials({ language }: DailySpecialsProps) {
  const t = translations[language]

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t.title}</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="space-y-16 md:space-y-24">
          {specials.map((special, index) => {
            const isEven = index % 2 === 0

            return (
              <div
                key={special.id}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-12 items-center`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-xl">
                    <img
                      src={special.image || "/placeholder.svg"}
                      alt={language === "en" ? special.dishEn : special.dishPt}
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-primary px-4 py-2 rounded-full font-semibold text-sm">
                      {language === "en" ? special.dayEn : special.dayPt}
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-1/2 text-center md:text-left"
                >
                  <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                    {language === "en" ? special.dayEn : special.dayPt}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">
                    {language === "en" ? special.dishEn : special.dishPt}
                  </h3>
                  <p className="text-3xl font-bold text-primary/80">{special.price}</p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
