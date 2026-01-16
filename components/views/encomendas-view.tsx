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

const menuPages = [
  "/menu/page-1.jpg",
  "/menu/page-2.jpg",
  "/menu/page-3.jpg",
  "/menu/page-4.jpg",
  "/menu/page-5.jpg",
  "/menu/page-6.jpg",
  "/menu/page-7.jpg",
  "/menu/page-8.jpg",
  "/menu/page-9.jpg",
  "/menu/page-10.jpg",
  "/menu/page-11.jpg",
  "/menu/page-12.jpg",
  "/menu/page-13.jpg",
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
      // Preload adjacent pages
      setLoadedImages((prev) => new Set([...prev, newPage, Math.max(0, newPage - 1)]))
    }
  }

  const goToNext = () => {
    if (currentPage < menuPages.length - 1) {
      setDirection(1)
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      // Preload adjacent pages
      setLoadedImages((prev) => new Set([...prev, newPage, Math.min(menuPages.length - 1, newPage + 1)]))
    }
  }

  const goToPage = (index: number) => {
    setDirection(index > currentPage ? 1 : -1)
    setCurrentPage(index)
    // Preload adjacent pages
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
          {/* Menu Viewer Container */}
          <div className="bg-secondary rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20">
            {/* Page Display */}
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

              <div className="hidden">
                {Array.from(loadedImages).map((index) => (
                  <img key={`preload-${index}`} src={menuPages[index] || "/placeholder.svg"} alt="" loading="lazy" />
                ))}
              </div>

              {/* Touch/Click areas for mobile */}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 0}
                className="absolute left-0 top-0 w-1/3 h-full z-10 cursor-pointer disabled:cursor-default md:hidden"
                aria-label={t.previous}
              />
              <button
                onClick={goToNext}
                disabled={currentPage === menuPages.length - 1}
                className="absolute right-0 top-0 w-1/3 h-full z-10 cursor-pointer disabled:cursor-default md:hidden"
                aria-label={t.next}
              />
            </div>

            {/* Navigation Controls */}
            <div className="bg-primary/5 p-4 md:p-6">
              <div className="flex items-center justify-between gap-4">
                {/* Previous Button */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 0}
                  className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">{t.previous}</span>
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-foreground font-semibold text-lg">
                    {t.page} {currentPage + 1} {t.of} {menuPages.length}
                  </span>
                </div>

                {/* Next Button */}
                <button
                  onClick={goToNext}
                  disabled={currentPage === menuPages.length - 1}
                  className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary/90"
                >
                  <span className="hidden sm:inline">{t.next}</span>
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex justify-center gap-1.5 mt-4 flex-wrap max-w-xs mx-auto">
                {menuPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPage ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                    }`}
                    aria-label={`${t.page} ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Order Now Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto mt-12 text-center"
        >
          <div className="bg-accent/20 rounded-2xl p-8 md:p-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-4">{t.orderNow}</h2>
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
