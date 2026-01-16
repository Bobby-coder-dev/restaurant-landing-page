"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { Language } from "@/app/page"

interface CardapioViewProps {
  language: Language
}

const translations = {
  en: {
    title: "Our Menu",
    subtitle: "Authentic Brazilian Flavors",
    // Category titles
    salgados: "Baked & Fried Savories",
    salgadosDesc: "$3.00 each",
    pasteis: "Fried Hand Pies",
    pasteisDesc: "$4.50 each (unless noted)",
    breakfast: "Breakfast",
    omelets: "Special Omelets",
    omeletsDesc: "$8.90 each",
    lunch: "Daily Lunch Specials",
    lunchDesc: "Marmitex: Small $8.90 / Large $11.90",
    burgers: "Burgers & Sandwiches",
    desserts: "Desserts & Cake Jars",
    dessertsOffer: "Buy 3 Cake Jars, get 1 Mousse FREE!",
    party: "Party Savories",
    partyDesc: "Per 100 units",
    beverages: "Beverages",
    // Days of the week
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
  },
  pt: {
    title: "Nosso Cardápio",
    subtitle: "Sabores Autênticos Brasileiros",
    // Category titles
    salgados: "Salgados Assados e Fritos",
    salgadosDesc: "$3.00 cada",
    pasteis: "Pastéis",
    pasteisDesc: "$4.50 cada (exceto indicados)",
    breakfast: "Café da Manhã",
    omelets: "Omeletes Especiais",
    omeletsDesc: "$8.90 cada",
    lunch: "Almoço do Dia",
    lunchDesc: "Marmitex: Pequena $8.90 / Grande $11.90",
    burgers: "Lanches e Hambúrgueres",
    desserts: "Sobremesas & Bolo no Pote",
    dessertsOffer: "Compre 3 Bolos no Pote e ganhe 1 Mousse GRÁTIS!",
    party: "Salgadinhos para Eventos",
    partyDesc: "Por 100 unidades",
    beverages: "Bebidas",
    // Days of the week
    monday: "Segunda",
    tuesday: "Terça",
    wednesday: "Quarta",
    thursday: "Quinta",
    friday: "Sexta",
    saturday: "Sábado",
    sunday: "Domingo",
  },
}

// Menu data
const salgados = [
  { name: "Coxinha", price: "$3.00" },
  { name: "Risole de Carne", price: "$3.00" },
  { name: "Risole de Camarão", price: "$3.00" },
  { name: "Risole de Milho", price: "$3.00" },
  { name: "Quibe", price: "$3.00" },
  { name: "Esfiha", price: "$3.00" },
  { name: "Enroladinho", price: "$3.00" },
  { name: "Empada", price: "$3.00" },
]

const pasteis = [
  { name: "Carne", price: "$4.50" },
  { name: "Queijo", price: "$4.50" },
  { name: "Carne com Queijo", price: "$4.50" },
  { name: "Camarão", price: "$4.50" },
  { name: "3 Queijos", price: "$4.50" },
  { name: "Napolitano", price: "$4.50" },
  { name: "Pizza", price: "$4.50" },
  { name: "Pastudo (Queijo, Carne, Milho, Frango, Ovo, Bacon, Ervilha)", price: "$5.00" },
]

const breakfastItems = [
  { en: "Toasted Bread", pt: "Pão na Chapa", price: "$2.00" },
  { en: "Cheese Bread (3 pcs)", pt: "Pão de Queijo 3un", price: "$1.00" },
  { en: "Grilled Ham & Cheese", pt: "Misto Quente", price: "$4.00" },
  { en: "Bread with Egg & Bacon", pt: "Pão com Ovo e Bacon", price: "$4.50" },
  { en: "Homemade Cake Slice", pt: "Pedaço de Bolo Caseiro", price: "$3.00" },
  { en: "Bauru Sandwich", pt: "Bauru", price: "$4.50" },
]

const omelets = [
  { en: "Complete", pt: "Completo" },
  { en: "Chicken", pt: "Frango" },
  { en: "Simple", pt: "Simples" },
  { en: "Chicken with Catupiry", pt: "Frango com Catupiry" },
  { en: "Onion", pt: "Cebola" },
  { en: "Vegetarian", pt: "Vegetariano" },
]

const dailyLunch = [
  { day: "monday", en: "Strogonoff", pt: "Strogonoff" },
  { day: "tuesday", en: "Tropeiro Beans", pt: "Feijão Tropeiro" },
  { day: "wednesday", en: "Chicken with Okra", pt: "Frango com Quiabo" },
  { day: "thursday", en: "Cod Fish", pt: "Bacalhau" },
  { day: "friday", en: "Feijoada", pt: "Feijoada" },
  { day: "saturday", en: "BBQ", pt: "Churrasco" },
  { day: "sunday", en: "Pasta", pt: "Macarronada" },
]

const burgers = [
  { name: "X-Burger", price: "$7.90" },
  { name: "Maranato Burger", price: "$8.90" },
  { name: "Havaiano", price: "$8.90" },
  { name: "Super Bacon", price: "$8.90" },
  { name: "Burger Salgaderia", price: "$8.90" },
  { name: "Super Picanha", price: "$8.90" },
  { name: "Super Picanha Brasileiro", price: "$12.90" },
]

const desserts = [
  { en: "Brigadeiros (Various)", pt: "Brigadeiros (Variados)", price: "$2.75" },
  { en: "Cake Jar", pt: "Bolo no Pote", price: "$5.50" },
  { en: "Mousse Jar", pt: "Mousse no Pote", price: "$4.00" },
  { en: "Decorated Cake Slice", pt: "Fatia de Bolo Confeitado", price: "$5.00" },
  { en: "Pudding", pt: "Pudim", price: "$4.00" },
]

const partySavories = [
  { en: "Fried Savories", pt: "Fritos", price: "$60.00" },
  { en: "Frozen Savories", pt: "Congelados", price: "$58.00" },
  { en: "Sweets", pt: "Doces", price: "$55.00" },
]

const beverages = [
  { en: "Regular Coffee", pt: "Café", price: "$1.50" },
  { en: "Espresso", pt: "Café Expresso", price: "$2.00" },
  { en: "Juice (Small)", pt: "Suco (Pequeno)", price: "$3.00" },
  { en: "Juice (Large)", pt: "Suco (Grande)", price: "$4.00" },
  { en: "Natural Orange Juice (S)", pt: "Suco de Laranja Natural (P)", price: "$6.00" },
  { en: "Natural Orange Juice (L)", pt: "Suco de Laranja Natural (G)", price: "$8.00" },
  { en: "Soda Can", pt: "Refrigerante Lata", price: "$1.80" },
  { en: "Soda 2L", pt: "Refrigerante 2L", price: "$4.00" },
]

// Reusable menu card component
function MenuCard({
  title,
  subtitle,
  children,
  accent = false,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
  accent?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-secondary rounded-2xl p-6 md:p-8 shadow-lg border border-primary/10 h-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-8 bg-accent rounded-full" />
        <div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">{title}</h3>
          {subtitle && <p className="text-sm text-foreground/60 mt-1">{subtitle}</p>}
        </div>
      </div>
      {accent && (
        <div className="bg-accent/20 text-primary text-sm font-medium px-3 py-2 rounded-lg mb-4 inline-block">
          {subtitle}
        </div>
      )}
      <div className="space-y-2">{children}</div>
    </motion.div>
  )
}

// Menu item component
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-primary/10 last:border-0">
      <span className="text-foreground/80">{name}</span>
      <span className="font-semibold text-primary ml-4 whitespace-nowrap">{price}</span>
    </div>
  )
}

export function CardapioView({ language }: CardapioViewProps) {
  const t = translations[language]

  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-background min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="w-20 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">{t.title}</h1>
          <p className="text-foreground/70 text-lg">{t.subtitle}</p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* 1. Salgados */}
          <MenuCard title={t.salgados} subtitle={t.salgadosDesc}>
            {salgados.map((item) => (
              <MenuItem key={item.name} name={item.name} price={item.price} />
            ))}
          </MenuCard>

          {/* 2. Pastéis */}
          <MenuCard title={t.pasteis} subtitle={t.pasteisDesc}>
            {pasteis.map((item) => (
              <MenuItem key={item.name} name={item.name} price={item.price} />
            ))}
          </MenuCard>

          {/* 3. Breakfast */}
          <MenuCard title={t.breakfast}>
            {breakfastItems.map((item) => (
              <MenuItem key={item.pt} name={language === "en" ? item.en : item.pt} price={item.price} />
            ))}
          </MenuCard>

          {/* 4. Omelets */}
          <MenuCard title={t.omelets} subtitle={t.omeletsDesc}>
            {omelets.map((item) => (
              <MenuItem key={item.pt} name={language === "en" ? item.en : item.pt} price="$8.90" />
            ))}
          </MenuCard>

          {/* 5. Daily Lunch - spans 2 columns on md+ */}
          <div className="md:col-span-2">
            <MenuCard title={t.lunch} subtitle={t.lunchDesc}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {dailyLunch.map((item) => (
                  <div
                    key={item.day}
                    className="flex justify-between items-center py-2 border-b border-primary/10 last:border-0"
                  >
                    <span className="font-medium text-accent">{t[item.day as keyof typeof t]}</span>
                    <span className="text-foreground/80">{language === "en" ? item.en : item.pt}</span>
                  </div>
                ))}
              </div>
            </MenuCard>
          </div>

          {/* 6. Burgers */}
          <MenuCard title={t.burgers}>
            {burgers.map((item) => (
              <MenuItem key={item.name} name={item.name} price={item.price} />
            ))}
          </MenuCard>

          {/* 7. Desserts */}
          <MenuCard title={t.desserts}>
            {desserts.map((item) => (
              <MenuItem key={item.pt} name={language === "en" ? item.en : item.pt} price={item.price} />
            ))}
            <div className="mt-4 bg-accent/20 text-primary text-sm font-medium px-3 py-2 rounded-lg text-center">
              {t.dessertsOffer}
            </div>
          </MenuCard>

          {/* 8. Party Savories */}
          <MenuCard title={t.party} subtitle={t.partyDesc}>
            {partySavories.map((item) => (
              <MenuItem key={item.pt} name={language === "en" ? item.en : item.pt} price={item.price} />
            ))}
          </MenuCard>

          {/* 9. Beverages */}
          <MenuCard title={t.beverages}>
            {beverages.map((item) => (
              <MenuItem key={item.pt} name={language === "en" ? item.en : item.pt} price={item.price} />
            ))}
          </MenuCard>
        </div>

        {/* Footer decorative element */}
        <div className="flex items-center justify-center gap-4 mt-12 md:mt-16">
          <div className="h-px w-24 bg-primary/20" />
          <div className="w-3 h-3 rounded-full bg-accent" />
          <div className="h-px w-24 bg-primary/20" />
        </div>
      </div>
    </section>
  )
}
