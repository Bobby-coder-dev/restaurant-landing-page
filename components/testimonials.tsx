"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import type { Language } from "@/app/page"

interface TestimonialsProps {
  language: Language
}

const translations = {
  en: {
    title: "What Our Customers Say",
  },
  pt: {
    title: "O Que Nossos Clientes Dizem",
  },
}

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    reviewEn:
      "The best coxinhas I've had outside of Brazil! The flavors are authentic and the service is wonderful. I come here every week!",
    reviewPt:
      "As melhores coxinhas que já comi fora do Brasil! Os sabores são autênticos e o atendimento é maravilhoso. Venho aqui toda semana!",
    rating: 5,
  },
  {
    id: 2,
    name: "John Miller",
    reviewEn: "My Brazilian wife says this is the real deal. The feijoada on Mondays is incredible. Highly recommend!",
    reviewPt: "Minha esposa brasileira diz que é autêntico. A feijoada das segundas é incrível. Super recomendo!",
    rating: 5,
  },
  {
    id: 3,
    name: "Ana Carolina",
    reviewEn: "Finally found a place that makes brigadeiro cake just like my grandmother used to make. Tears of joy!",
    reviewPt: "Finalmente encontrei um lugar que faz bolo de brigadeiro igual minha avó fazia. Chorei de alegria!",
    rating: 5,
  },
  {
    id: 4,
    name: "Roberto Oliveira",
    reviewEn: "The atmosphere feels like home. Great food, great people, great prices. What more could you ask for?",
    reviewPt: "O ambiente parece casa. Comida ótima, pessoas ótimas, preços ótimos. O que mais você pode pedir?",
    rating: 5,
  },
]

export function Testimonials({ language }: TestimonialsProps) {
  const t = translations[language]

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                "{language === "en" ? testimonial.reviewEn : testimonial.reviewPt}"
              </p>
              <p className="font-semibold text-primary">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
