"use client"

import { HeroLanguageSwitcher } from "@/components/hero-language-switcher"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CakesCarousel } from "@/components/cakes-carousel"
import { DailySpecials } from "@/components/daily-specials"
import { Testimonials } from "@/components/testimonials"
import { QuoteSection } from "@/components/quote-section"
import type { Language, ViewType } from "@/app/page"

interface HomeViewProps {
  language: Language
  setLanguage: (lang: Language) => void
  setView: (view: ViewType) => void
}

export function HomeView({ language, setLanguage, setView }: HomeViewProps) {
  return (
    <>
      <div className="pt-20 md:pt-24 bg-secondary">
        <HeroLanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      <HeroSection language={language} />
      <AboutSection language={language} />
      <CakesCarousel language={language} setView={setView} />
      <DailySpecials language={language} />
      <Testimonials language={language} />
      <QuoteSection language={language} />
    </>
  )
}
