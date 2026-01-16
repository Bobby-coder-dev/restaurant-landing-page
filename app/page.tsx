"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeView } from "@/components/views/home-view"
import { EncomendasView } from "@/components/views/encomendas-view"
import { CardapioView } from "@/components/views/cardapio-view"
import { BolosView } from "@/components/views/bolos-view"
import { ContatoView } from "@/components/views/contato-view"

export type Language = "en" | "pt"
export type ViewType = "home" | "encomendas" | "cardapio" | "bolos" | "contato"

export default function Home() {
  const [language, setLanguage] = useState<Language>("en")
  const [currentView, setCurrentView] = useState<ViewType>("home")

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <HomeView language={language} setLanguage={setLanguage} setView={setCurrentView} />
      case "encomendas":
        return <EncomendasView language={language} />
      case "cardapio":
        return <CardapioView language={language} />
      case "bolos":
        return <BolosView language={language} />
      case "contato":
        return <ContatoView language={language} />
      default:
        return <HomeView language={language} setLanguage={setLanguage} setView={setCurrentView} />
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} currentView={currentView} setView={setCurrentView} />
      {renderView()}
      <Footer language={language} />
    </main>
  )
}
