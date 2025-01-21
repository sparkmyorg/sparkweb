"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { RocketIcon, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`py-4 px-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#FFF9F0] shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div className="flex items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <span className="bubblegum text-4xl text-3d">
                <span className="text-[#FF4B6E]">S</span>
                <span className="text-[#FF8A2C]">P</span>
                <span className="text-[#4CD964]">A</span>
                <span className="text-[#4A90E2]">R</span>
                <span className="text-[#FF4B6E]">K</span>
                <RocketIcon className="inline-block ml-2 transform rotate-45 text-[#FF8A2C]" />
              </span>
            </motion.div>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  href={item.href}
                  className="bubblegum text-xl text-[#4A90E2] hover:text-[#FF4B6E] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>
          <motion.button
            className="md:hidden p-2 rounded-full bg-[#4A90E2] text-white"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FFF9F0] mt-4"
          >
            <nav className="flex flex-col items-center space-y-4 py-4">
              {navItems.map((item) => (
                <motion.div key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={item.href}
                    className="bubblegum text-xl text-[#4A90E2] hover:text-[#FF4B6E] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
