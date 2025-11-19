import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useEffect, useState } from "react";
import UniversalAnimatedButton from "@/components/UniversalAnimatedButton";

const HeroSection = () => {
  const scrollToCollections = () => {
    const element = document.getElementById("collections");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant fashion background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-black/60 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-accent/15 blur-3xl" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mb-8"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-white via-accent/80 to-white bg-clip-text"
        >
          Timeless Elegance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 uppercase tracking-[0.3em] mb-12"
        >
          High Fashion Collections 2025
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <UniversalAnimatedButton
            text="Explore Collections"
            onClick={scrollToCollections}
            variant="outline"
            className="text-sm uppercase tracking-widest px-8 py-6"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="h-8 w-8 text-white animate-pulse-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
