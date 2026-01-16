"use client"

import { Facebook, Instagram } from "lucide-react"
import type { Language } from "@/app/page"

interface FooterProps {
  language: Language
}

const translations = {
  en: {
    rights: "All rights reserved.",
    followUs: "Follow Us",
  },
  pt: {
    rights: "Todos os direitos reservados.",
    followUs: "Siga-nos",
  },
}

// TikTok icon component since Lucide doesn't have it
function TikTokIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
    </svg>
  )
}

export function Footer({ language }: FooterProps) {
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="font-serif text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity"
          >
            Salgaderia Maranato
          </button>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-primary-foreground/70">{t.followUs}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="TikTok">
                <TikTokIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Salgaderia Maranato. {t.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}
