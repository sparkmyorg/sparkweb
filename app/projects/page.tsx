"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Compass to the future",
    category: "Career",
    image:
      "/ctf_main.png",
    description: "Compass to the Future is a project dedicated to helping more children discover the opportunities that lie ahead.",
  },
  {
    id: 2,
    title: "Pages of hope",
    category: "Donation Drive",
    image:
      "/poh_main.png",
    description: "Every page tells a story, and every story brings hope! Our 'Pages of Hope' activity was a success, proving that together, we can write a brighter future.",
  },
  // Add more projects as needed
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="bubblegum text-5xl md:text-6xl text-3d mb-6">
                <span className="text-[#FF4B6E]">Our </span>
                <span className="text-[#4A90E2]">Projects</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our innovative programs designed to help children learn and grow
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                      <div className="relative h-64">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="bubblegum px-4 py-2 rounded-full text-sm text-white bg-[#4CD964]">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="bubblegum text-2xl text-[#FF4B6E] mb-2">{project.title}</h3>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex items-center text-[#4A90E2] font-semibold">
                          Learn more
                          <svg
                            className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="bubblegum text-4xl text-[#4A90E2] mb-8">Want to Start a Project?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Have an idea for a project that could help children? We'd love to hear from you!
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#FF4B6E] text-white rounded-full text-lg font-bold shadow-lg inline-block text-center"
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
