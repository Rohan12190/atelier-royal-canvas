import { motion } from "framer-motion";
import womenImage from "@/assets/womens-ready-to-wear.jpg";
import menImage from "@/assets/mens-tailored-suit.jpg";
import kidsImage from "@/assets/womens-statement-pieces.jpg";
import { Link } from "react-router-dom";

// --- ADDED ---
import { useState, useRef } from 'react';
// Import the NEW animation-only CSS file
import "./TextAnimation.css"; 
// --- END ADDED ---

const categories = [
  { name: "WOMEN", image: womenImage, path: "/women" },
  { name: "MEN", image: menImage, path: "/men" },
  { name: "KIDS", image: kidsImage, path: "/kids" },
];

// --- NEW INTERNAL COMPONENT ---
// This component replicates the animation logic
// but uses the new, style-free CSS classes.

interface AnimatedTextProps {
  text: string;
  className?: string; // This will receive your Tailwind classes
}

const AnimatedText = ({ text, className = '' }: AnimatedTextProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const letters = text.split('');
  
  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Set animating state with a small delay
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(true);
    }, 50);
  };
  
  const handleMouseLeave = () => {
    // Clear timeout on leave
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // Reset animation after a delay
    timeoutRef.current = setTimeout(() => {
      setIsAnimating(false);
    }, 100);
  };
  
  return (
    <div 
      // Use the NEW base class + your existing Tailwind classes
      className={`animated-text-container ${isAnimating ? 'is-animating' : ''} ${className}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="span-mother">
        {letters.map((letter, index) => (
          <span key={`mother-${index}`}>{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </span>
      <span className="span-mother2">
        {letters.map((letter, index) => (
          <span key={`mother2-${index}`}>{letter === ' ' ? '\u00A0' : letter}</span>
        ))}
      </span>
    </div>
  );
};
// --- END NEW COMPONENT ---


const CategoriesSection = () => {
  return (
    <section id="categories" className="grid grid-cols-1 md:grid-cols-3 gap-[2vw] w-full px-[5vw] py-[10vh]">
      {categories.map((category, index) => (
        <motion.div 
          key={category.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative h-[70vh] overflow-hidden group cursor-pointer"
        >
          {/* Link wraps everything inside */}
          <Link to={category.path} className="absolute inset-0">
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* --- MODIFIED SECTION --- */}
            {/* Wrap in a div for absolute positioning */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            >
              {/* Use the new component and pass in your ORIGINAL styles */}
              <AnimatedText
                text={category.name}
                className="
                  bg-white/90 text-black px-10 py-3 rounded-full 
                  uppercase text-md bold tracking-wider 
                  group-hover:bg-white transition-colors
                "
              />
            </div>
            {/* --- END MODIFIED SECTION --- */}

          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default CategoriesSection;