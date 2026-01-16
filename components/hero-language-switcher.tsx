"use client"

import { motion } from "framer-motion"
import type { Language } from "@/app/page"

interface HeroLanguageSwitcherProps {
  language: Language
  setLanguage: (lang: Language) => void
}

export function HeroLanguageSwitcher({ language, setLanguage }: HeroLanguageSwitcherProps) {
  const isEnglish = language === "en"

  return (
    <div className="flex justify-center py-4">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        {/* Switch Container */}
        <button
          onClick={() => setLanguage(isEnglish ? "pt" : "en")}
          className="relative flex items-center w-28 h-14 bg-primary/10 rounded-full p-1 cursor-pointer border-2 border-primary/20 hover:border-primary/40 transition-colors shadow-lg"
          aria-label={`Switch to ${isEnglish ? "Portuguese" : "English"}`}
        >
          {/* Sliding Background */}
          <motion.div
            className="absolute w-12 h-12 bg-background rounded-full shadow-md"
            animate={{ x: isEnglish ? 0 : 56 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />

          {/* US Flag */}
          <div
            className={`relative z-10 w-12 h-12 flex items-center justify-center text-2xl transition-opacity ${
              isEnglish ? "opacity-100" : "opacity-50"
            }`}
          >
            🇺🇸
          </div>

          {/* BR Flag */}
          <div
            className={`relative z-10 w-12 h-12 flex items-center justify-center text-2xl transition-opacity ${
              !isEnglish ? "opacity-100" : "opacity-50"
            }`}
          >
            🇧🇷
          </div>
        </button>

        {/* Label */}
        <motion.p
          key={language}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-primary/70 mt-2 font-medium"
        >
          {isEnglish ? "English" : "Português"}
        </motion.p>
      </motion.div>
    </div>
  )
}
