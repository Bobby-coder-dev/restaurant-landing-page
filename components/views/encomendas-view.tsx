"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import type { Language } from "@/app/page"

interface EncomendasViewProps {
  language: Language
}

const translations = {
  en: {
    title: "Order Menu",
    subtitle: "Browse our menu pages and place your order",
    previous: "Previous",
    next: "Next",
    page: "Page",
    of: "of",
    orderNow: "Order Now",
    orderVia: "Order via WhatsApp",
  },
  pt: {
    title: "Menu de Encomendas",
    subtitle: "Navegue pelas páginas do nosso cardápio e faça seu pedido",
    previous: "Anterior",
    next: "Próxima",
    page: "Página",
    of: "de",
    orderNow: "Fazer Pedido",
    orderVia: "Fazer Pedido via WhatsApp",
  },
}

// Atualizado para bater exatamente com os nomes dos arquivos na sua imagem
const menuPages = [
  "/encomenda_pgs/Maranato Menu 2025-imagens-0.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-1.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-2.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-3.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-4.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-5.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-6.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-7.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-8.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-9.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-10.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-11.jpg",
  "/encomenda_pgs/Maranato Menu 2025-imagens-12.jpg",
]

export function EncomendasView({ language }: EncomendasViewProps) {
  const t = translations[language]
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0, 1]))

  const goToPrevious = () => {
    if (currentPage > 0) {
      setDirection(-1)
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      setLoadedImages((prev) => new Set([...prev, newPage, Math.max(0, newPage - 1)]))
    }
  }

  const goToNext = () => {
    if (currentPage < menuPages.length - 1) {
      setDirection(1)
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      setLoadedImages((prev) => new Set([...prev, newPage, Math.min(menuPages.length - 1, newPage + 1)]))
    }
  }

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1)
    setCurrentPage(index)
    setLoadedImages(
      (prev) => new Set([...prev, index, Math.max(0, index - 1), Math.min(menuPages.length - 1, index + 1)]),
    )
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{t.title}</h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Manga-Style Menu Viewer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-secondary rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20">
            <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-background">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.img
                  key={currentPage}
                  src={menuPages[currentPage]}
                  alt={`${t.page} ${currentPage + 1}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Touch areas for mobile navigation */}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 0}
                className="absolute left-0 top-0 w-1/4 h-full z-10 cursor-pointer disabled:hidden"
                aria-label={t.previous}
              />
              <button
                onClick={goToNext}
                disabled={currentPage === menuPages.length - 1}
                className="absolute right-0 top-0 w-1/4 h-full z-10 cursor-pointer disabled:hidden"
                aria-label={t.next}
              />
            </div>

            {/* Controls */}
            <div className="bg-primary/5 p-4 md:p-6 border-t border-primary/10">
              <div className="flex items-center justify-between gap-4">
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-30 transition-all"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">{t.previous}</span>
                </button>

                <div className="text-foreground font-semibold">
                  {t.page} {currentPage + 1} {t.of} {menuPages.length}
                </div>

                <button
                  onClick={goToNext}
                  disabled={currentPage === menuPages.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-30 transition-all"
                >
                  <span className="hidden sm:inline">{t.next}</span>
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-1.5 mt-4 flex-wrap">
                {menuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPage ? "bg-primary scale-125" : "bg-primary/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Order Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6">{t.orderNow}</h2>
            <a
              href="https://wa.me/18623570818"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg active:scale-95"
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