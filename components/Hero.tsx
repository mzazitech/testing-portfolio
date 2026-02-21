"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="py-24 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-cyan-400"
      >
        Dominic Teddy
      </motion.h1>

      <p className="mt-4 text-gray-400">
        Web Developer | Bot Engineer | Tech Entrepreneur
      </p>
    </section>
  )
}
