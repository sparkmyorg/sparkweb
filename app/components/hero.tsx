"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { QuoteOfTheDay } from "./quote-of-the-day"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#FFF9F0] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative inline-block">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SPARKLOGOnoword-eXKtboTM3Uv9S2aVeltGshNjCJZ9da.png"
              alt="Spark Logo"
              width={300}
              height={300}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 opacity-40"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bubblegum text-6xl md:text-7xl lg:text-8xl mb-8 text-3d relative z-10"
            >
              <span className="text-[#FF4B6E]">Welcome to </span>
              <span className="text-[#4A90E2]">Spark!</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#666] max-w-2xl mb-12"
          >
            Empowering children through education, fun, and creativity
          </motion.p>
          <QuoteOfTheDay />
        </div>
      </div>
    </div>
  )
}
