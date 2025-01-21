"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TeamGrid } from "../components/team-grid"

export default function AboutUs() {
  const exampleText = 'This is an example with an apostrophe &apos; and more text.';
  const anotherExample = 'Here is another example with an apostrophe &apos; in it.';

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
                <span className="text-[#FF4B6E]">About </span>
                <span className="text-[#4A90E2]">Spark</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're on a mission to empower childrens!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  src= '/logo.png'
                  alt="About Spark"
                  width={600}
                  height={400}
                  className="rounded-3xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="bubblegum text-3xl text-[#FF8A2C] mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Spark was founded with a simple yet powerful idea: every child deserves to learn in a way that's
                  engaging, fun, and tailored to their needs. We started as a small community initiative and have grown
                  into a vibrant organization touching thousands of young lives.
                </p>
                <p className="text-gray-600">
                  Our approach combines education with creativity, ensuring that children not only learn but also
                  develop a lifelong love for learning. Through our various programs, we address different aspects of
                  child development, from academic skills to emotional well-being to career paths and many more.
                </p>
              </motion.div>
            </div>

            <div className="text-center mb-16">
              <h2 className="bubblegum text-4xl text-[#4CD964] mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                The passionate individuals who make the magic happen
              </p>
              <TeamGrid />
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="bubblegum text-4xl text-[#4A90E2] mb-8">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Fun Learning", icon: "🎨", color: "#FF4B6E" },
                  { title: "Inclusivity", icon: "🤝", color: "#4CD964" },
                  { title: "Innovation", icon: "💡", color: "#FF8A2C" },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="p-6 rounded-3xl bg-[#FFF9F0] shadow-lg"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="bubblegum text-xl mb-2" style={{ color: value.color }}>
                      {value.title}
                    </h3>
                    <p className="text-gray-600">Making a difference through {value.title.toLowerCase()}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
