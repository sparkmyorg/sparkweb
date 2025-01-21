"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    emailjs
      .send(
        "service_s2jmxa8", // Replace with your EmailJS Service ID
        "template_78mqrll", // Replace with your EmailJS Template ID
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        "BE4PBnR8dHyOIWQFF" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setResponseMessage("Your message has been sent successfully!");
            setFormState({ name: "", email: "", subject: "", message: "" });
          },
          (error: any) => {
            console.error("Failed to send email:", error);
            setResponseMessage("Failed to send your message. Please try again later.");
          }
          )
          .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

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
                <span className="text-[#FF4B6E]">Get in </span>
                <span className="text-[#4A90E2]">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Have questions? We&apos;d love to hear from you! Send us a message and we&apos;ll respond as soon as possible.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg p-8 md:p-12"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donations</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#FF4B6E] text-white rounded-full text-lg font-bold shadow-lg hover:bg-[#FF4B6E]/90 transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                  {responseMessage && (
                    <div className={`mt-4 text-center ${responseMessage.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                      {responseMessage}
                    </div>
                  )}
                </form>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {[
                  {
                    icon: "💡",
                    title: "Social",
                    content: (
                      <a 
                        href="https://www.instagram.com/spark.my_" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                      >
                        spark.my_
                      </a>
                    ),
                    href: "https://www.instagram.com/spark.my_",
                  },
                  {
                    icon: "📞",
                    title: "Whatsapp",
                    content: (
                      <div className="flex flex-col gap-1">
                        <a
                          href="https://wa.me/60128920068?text=Hello%20Spark!%20I%20have%20a%20question%20:)%20%0A%0AName%3A%20%0AEnquiry%3A%20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-500 transition-colors"
                        >
                          +6012-8920068
                        </a>
                        <a
                          href="https://wa.me/60182888372?text=Hello%20Spark!%20I%20have%20a%20question%20:)%20%0A%0AName%3A%20%0AEnquiry%3A%20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-500 transition-colors"
                        >
                          +6018-2888372
                        </a>
                        <a
                          href="https://wa.me/601116170817?text=Hello%20Spark!%20I%20have%20a%20question%20:)%20%0A%0AName%3A%20%0AEnquiry%3A%20"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-green-500 transition-colors"
                        >
                          +6011-16170817
                        </a>
                      </div>
                    ),
                  },
                  {
                    icon: "📧",
                    title: "Email Us",
                    content: (
                        <a 
                          href="mailto:spark.official.my@gmail.com"
                          className="hover:text-blue-500 transition-colors"
                        >
                          spark.official.my@gmail.com
                        </a>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="text-center p-6 bg-white rounded-3xl shadow-lg"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="bubblegum text-xl text-[#4A90E2] mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                  </motion.div>
                ))}
              </div>
          </div>
        </section>
      </main>
    </div>
  );
}
