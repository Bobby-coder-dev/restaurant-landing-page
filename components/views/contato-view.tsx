"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import type { Language } from "@/app/page"

interface ContatoViewProps {
  language: Language
}

const translations = {
  en: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you",
    address: "Address",
    phone: "Phone",
    email: "Email",
    findUs: "Find Us",
  },
  pt: {
    title: "Contato",
    subtitle: "Adoraríamos ouvir você",
    address: "Endereço",
    phone: "Telefone",
    email: "E-mail",
    findUs: "Encontre-nos",
  },
}

const contactInfo = {
  address: "114-116 Wilson Avenue, Newark, NJ, 07105",
  phone: "862-357-0818 | 862-234-2291",
  email: "contato@salgaderiamaranato.com",
}

export function ContatoView({ language }: ContatoViewProps) {
  const t = translations[language]

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"
        >
          <img
            src="/placeholder.svg?height=400&width=1200"
            alt="Salgaderia Maranato"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{t.title}</h1>
            <p className="text-white/90 text-lg">{t.subtitle}</p>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {/* Address */}
          <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-primary mb-2">{t.address}</h3>
            <p className="text-foreground/70 leading-relaxed">{contactInfo.address}</p>
          </div>

          {/* Phone */}
          <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-primary mb-2">{t.phone}</h3>
            <p className="text-foreground/70 leading-relaxed">{contactInfo.phone}</p>
          </div>

          {/* Email */}
          <div className="bg-secondary rounded-xl p-6 text-center shadow-lg">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={28} />
            </div>
            <h3 className="font-serif text-lg font-semibold text-primary mb-2">{t.email}</h3>
            <p className="text-foreground/70 leading-relaxed break-all">{contactInfo.email}</p>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary text-center mb-6">{t.findUs}</h2>
          <div className="bg-secondary rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6!2d-74.15!3d40.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQzJzQ4LjAiTiA3NMKwMDknMDAuMCJX!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salgaderia Maranato Location"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
