"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  color: string
  delay?: number
}

export function FeatureCard({ title, description, icon, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <div className="relative p-6 bg-white rounded-3xl shadow-lg transform transition-transform group-hover:scale-105">
        <div className="relative w-20 h-20 rounded-2xl mb-6 overflow-hidden">
          <Image src={icon || "/placeholder.svg"} alt={title} layout="fill" objectFit="cover" />
        </div>
        <h3 className="bubblegum text-2xl mb-4 text-3d">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div className="absolute top-4 right-4">
          <div className="w-3 h-3 rounded-full bg-[#FFD60A] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </motion.div>
  )
}
