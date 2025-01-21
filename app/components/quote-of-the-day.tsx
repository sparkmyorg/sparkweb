"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function QuoteOfTheDay() {
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://quoteproxy.vercel.app/");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      setQuote(data.content); // content is the quote text
      setAuthor(data.author); // author is the author
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Oops! Failed to fetch a quote. Please try again.");
      setAuthor(null);
    }
    setIsLoading(false);
  };

  return (
    <div className="mt-8 text-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
        <h2 className="bubblegum text-2xl text-[#4A90E2] mb-4">Spark Of The Day</h2>
        <p className="text-gray-700 mb-6">Click the button to spark up your day!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#4CD964] text-white rounded-lg text-lg font-medium shadow-lg hover:bg-[#4CD964]/90 transition-colors"
          onClick={fetchQuote}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Quote"}
        </motion.button>
        {quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6 text-xl text-gray-700 italic"
          >
            &quot;{quote}&quot;
            {author && <p className="mt-2 text-right text-lg font-medium">- {author}</p>}
          </motion.div>
        )}
      </div>
    </div>
  );
}
