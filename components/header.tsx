"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { Language, ViewType } from "@/app/page"

interface HeaderProps {
  language: Language
  setLanguage: (lang: Language) => void
  currentView: ViewType
  setView: (view: ViewType) => void
}

const translations = {
  en: {
    orders: "Orders",
    menu: "Menu",
    cakes: "Cakes",
    contact: "Contact",
  },
  pt: {
    orders: "Encomendas",
    menu: "Cardápio",
    cakes: "Bolos",
    contact: "Contato",
  },
}

export function Header({ language, setLanguage, currentView, setView }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[language]

  const goToHome = () => {
    setView("home")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigateTo = (view: ViewType) => {
    setView(view)
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks: { label: string; view: ViewType }[] = [
    { label: t.orders, view: "encomendas" },
    { label: t.menu, view: "cardapio" },
    { label: t.cakes, view: "bolos" },
    { label: t.contact, view: "contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={goToHome} className="flex items-center">
          <img src="/logo-placeholder.jpg" alt="Salgaderia Maranato" className="h-10 md:h-12 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => navigateTo(link.view)}
              className={`transition-colors font-medium ${
                currentView === link.view ? "text-primary font-semibold" : "text-primary/80 hover:text-primary"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-primary/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => navigateTo(link.view)}
                  className={`transition-colors font-medium text-left py-2 ${
                    currentView === link.view ? "text-primary font-semibold" : "text-primary/80 hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
