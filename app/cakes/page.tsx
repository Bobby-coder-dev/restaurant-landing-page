"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const cakes = [
  {
    id: 1,
    name: "Brigadeiro Cake",
    description: "Rich chocolate cake layered with creamy brigadeiro filling and topped with chocolate ganache.",
    price: "$45.00",
    image: "/brazilian-brigadeiro-chocolate-cake-layers-fudge.jpg",
  },
  {
    id: 2,
    name: "Carrot Cake",
    description: "Traditional Brazilian carrot cake with a generous chocolate ganache topping.",
    price: "$38.00",
    image: "/brazilian-carrot-cake-chocolate-ganache-topping.jpg",
  },
  {
    id: 3,
    name: "Passion Fruit Mousse",
    description: "Light and refreshing passion fruit mousse cake with a buttery crust.",
    price: "$42.00",
    image: "/passion-fruit-mousse-cake-yellow-tropical.jpg",
  },
  {
    id: 4,
    name: "Coconut Cake",
    description: "Moist coconut cake with creamy frosting and shredded coconut topping.",
    price: "$40.00",
    image: "/brazilian-coconut-cake-white-frosting-shredded-coc.jpg",
  },
  {
    id: 5,
    name: "Corn Cake",
    description: "Sweet and moist corn cake, a beloved Brazilian classic.",
    price: "$35.00",
    image: "/brazilian-corn-cake-bolo-de-milho-golden.jpg",
  },
  {
    id: 6,
    name: "Tres Leches",
    description: "Sponge cake soaked in three kinds of milk, topped with whipped cream.",
    price: "$44.00",
    image: "/tres-leches-cake-creamy-milk-soaked.jpg",
  },
]

export default function CakesPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 font-medium">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-serif text-4xl md:text-5xl font-bold text-primary mb-12 text-center"
        >
          Our Cakes
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cakes.map((cake, index) => (
            <motion.div
              key={cake.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={cake.image || "/placeholder.svg"}
                  alt={cake.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="font-serif text-xl font-bold text-primary mb-2">{cake.name}</h2>
                <p className="text-foreground/70 text-sm mb-4">{cake.description}</p>
                <p className="text-2xl font-bold text-primary">{cake.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
