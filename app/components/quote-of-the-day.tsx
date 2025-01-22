"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },    
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
  { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
  { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { quote: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
  { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" }
];

export function QuoteOfTheDay() {
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    setQuote(selectedQuote.quote);
    setAuthor(selectedQuote.author);
  };

  return (
    <div className="mt-8 text-center">
      <div className="bg-white p-8 rounded-3xl shadow-lg max-w-2xl mx-auto">
        <h2 className="bubblegum text-2xl text-[#4A90E2] mb-4">Spark Of The Day</h2>
        <p className="text-gray-700 mb-6">Click the button to spark up your day!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateQuote}
          className="bg-[#4A90E2] text-white px-6 py-3 rounded-full hover:bg-[#357ABD] transition-colors duration-200"
        >
          Generate Quote
        </motion.button>
        {quote && (
          <div className="mt-6">
            <p className="text-xl text-gray-800 italic">&quot;{quote}&quot;</p>
            {author && <p className="mt-2 text-gray-600">- {author}</p>}
          </div>
        )}
      </div>
    </div>
  );
}
