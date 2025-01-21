"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Compass to the future",
    category: "Career",
    image:
      "/ctf_main.png",
    description: "Compass to the Future is a project dedicated to helping more children discover the opportunities that lie ahead.",
    fullDescription: `On August 24th, we had the honor of launching our very first project at Trinity Children's Home, diving into the world of career choices and exploring the limitless possibilities ahead!`,
    objectives: [
      "Understand the types of further studies pathways",
      "Learn about different jobs",
      "Explore and develop the concept of Ikigai",
      "Broaden their vision",
    ],
    impact: {
      students: "44",
      workshops: "8",
      projects: "4",
    },
    gallery: ["/ctf1.png", "/ctf2.png", "/ctf3.png"],
  },
  {
    id: 2,
    title: "Pages of hope",
    category: "Donation Drive",
    image:
      "/poh_main.png",
    description: "Supporting children's emotional and mental wellbeing",
    fullDescription: `Pages of hope is an initiative aimed at providing reading opportunities for underprivileged children who are lacking in reading resources by collecting and redistributing preloved books specifically for children, tackling illiteracy and building children's interest towards literature.`,
    objectives: [
      "Increase access to reading materials for underprivileged children",
      "Promote literacy and a love for reading among children",
      "Encourage knowledge sharing and recycling through the redistribution of preloved books",
      "Build a foundation for lifelong learning and education",
    ],
    impact: {
      BooksCollected: "700+",
      OrphansBenefited: "40+",
      RefugeesBenefited: "1000 ",
    },
    gallery: ["/poh1.png", "/poh2.png", "/poh3.png"],
  },
  //add more kat sini
]

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === Number.parseInt(params.id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-[#FFF9F0]">
      <main>
        <div className="relative h-[50vh] min-h-[400px]">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span className="bubblegum px-4 py-2 rounded-full text-sm text-white bg-[#4CD964] mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="bubblegum text-4xl md:text-6xl text-white mb-4">{project.title}</h1>
              </motion.div>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h2 className="bubblegum text-3xl text-[#4A90E2] mb-6">About This Project</h2>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{project.fullDescription}</p>

                  <h3 className="bubblegum text-2xl text-[#FF4B6E] mb-4">Key Objectives</h3>
                  <ul className="space-y-4 mb-8">
                    {project.objectives.map((objective, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3 text-gray-600"
                      >
                        <span className="text-[#4CD964]">•</span>
                        <span>{objective}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Object.entries(project.impact).map(([key, value], index) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-[#FFF9F0] p-6 rounded-2xl text-center"
                      >
                        <div className="bubblegum text-3xl text-[#FF4B6E] mb-2">{value}</div>
                        <div className="text-gray-600 capitalize">{key}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >

                <div className="mt-8 bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="bubblegum text-2xl text-[#4A90E2] mb-6">Project Gallery</h3>
                  <div className="space-y-4">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="relative h-48 rounded-2xl overflow-hidden"
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} gallery image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
