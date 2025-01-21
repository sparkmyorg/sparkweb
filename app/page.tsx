import { Hero } from "./components/hero"
import { FeatureCard } from "./components/feature-card"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="bubblegum text-4xl md:text-5xl text-3d mb-6">
              <span className="text-[#FF4B6E]">What We </span>
              <span className="text-[#4A90E2]">Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create fun and engaging programs to help children learn and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Educational Content"
              description="We share educational content regularly through our social media to inspire learning and raising childrens awareness."
              icon="/wwd1.png"
              color="bg-[#FF4B6E]/10"
              delay={0.2}
            />
            <FeatureCard
              title="Engaging Sessions"
              description="Supporting children's growth by engaging sessions, including talks and workshops, for the children."
              icon="/ctf2.png"
              color="bg-[#4CD964]/10"
              delay={0.4}
            />
            <FeatureCard
              title="Donation Drives"
              description="We organize donation drives, like book donation drive, blood donation drive, and more to support those in need."
              icon="/poh1.png"
              color="bg-[#4A90E2]/10"
              delay={0.6}
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF9F0]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="bubblegum text-4xl md:text-5xl text-3d mb-6">
                <span className="text-[#FF8A2C]">Join Our </span>
                <span className="text-[#4CD964]">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Help us make a difference in children's lives through education, support, and creative programs.
              </p>
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#FF8A2C] text-white rounded-full text-lg font-bold transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M2j62zz2tIF4RDaZcqGbxzVO8BjIuK.png"
                alt="Sparks Logo"
                width={600}
                height={400}
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4CD964] rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="bubblegum text-4xl md:text-5xl text-3d mb-6">
              <span className="text-[#4A90E2]">Our </span>
              <span className="text-[#FF4B6E]">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "80+", label: "Children Helped", color: "#FF4B6E" },
              { number: "3", label: "Programs Created", color: "#4CD964" },
              { number: "30+", label: "Volunteers", color: "#4A90E2" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-8 rounded-3xl bg-white shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="bubblegum text-5xl mb-4" style={{ color: stat.color }}>
                  {stat.number}
                </div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
