import Link from "next/link"
import { FaInstagram } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="bg-[#FFF9F0] py-12 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="bubblegum text-2xl text-[#FF4B6E] mb-4">Spark</h3>
            <p className="text-gray-600">Stimulating Potential , Achievement & Resilience in Kids.</p>
          </div>
          <div>
            <h4 className="bubblegum text-xl text-[#4A90E2] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-[#FF4B6E]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#FF4B6E]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-[#FF4B6E]">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#FF4B6E]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="bubblegum text-xl text-[#FF8A2C] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/spark.my_/" className="text-gray-600 hover:text-[#FF4B6E]">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
          © {new Date().getFullYear()} Spark NGO. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
