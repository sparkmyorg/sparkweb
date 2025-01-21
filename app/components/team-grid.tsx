"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const teamMembers = [
  {
    name: "Ho Yean Khai",
    role: "Founder/Vice President",
    image: "/ykai.jpg",
    description: "It all started from Ray-ping",
  },
  {
    name: "Lok Yan Xi",
    role: "Co-founder/President",
    image: "/yxi.jpeg",
    description: "It all started from Bakers Cottage...",
  },
  {
    name: "Ng Xin Yue",
    role: "Co-founder/Vice President",
    image: "/xyue.jpg",
    description: "and everyday i learn something new",
  },
  // Add more team members as needed
]

const ITEMS_PER_PAGE = 8

export function TeamGrid() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const totalPages = Math.ceil(teamMembers.length / ITEMS_PER_PAGE)
  const currentMembers = teamMembers.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <AnimatePresence mode="wait">
          {currentMembers.map((member, index) => (
            <motion.div
              key={currentPage * ITEMS_PER_PAGE + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMember(currentPage * ITEMS_PER_PAGE + index)}
            >
              <div className="bg-white p-6 rounded-3xl shadow-lg transform transition-all duration-300 group-hover:scale-105">
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#4A90E2]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="bubblegum text-2xl text-[#FF4B6E] mb-2">{member.name}</h3>
                <p className="text-[#4A90E2] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button
            onClick={prevPage}
            className="p-2 rounded-full bg-[#4A90E2] text-white hover:bg-[#4A90E2]/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <span className="text-gray-600">
            Page {currentPage + 1} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            className="p-2 rounded-full bg-[#4A90E2] text-white hover:bg-[#4A90E2]/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedMember !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-3xl max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center space-x-6">
                <div className="relative w-32 h-32">
                  <Image
                    src={teamMembers[selectedMember].image || "/placeholder.svg"}
                    alt={teamMembers[selectedMember].name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="bubblegum text-3xl text-[#FF4B6E] mb-2">{teamMembers[selectedMember].name}</h3>
                  <p className="text-[#4A90E2] text-xl font-semibold mb-2">{teamMembers[selectedMember].role}</p>
                  <p className="text-gray-600">{teamMembers[selectedMember].description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
