/* eslint-disable no-shadow-restricted-names */
import { motion } from "framer-motion";
import { Scissors, Gem, Infinity, User } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const benefits = [
  { icon: Scissors, text: "Pattern Drafting" },
  { icon: Gem, text: "Draping & Construction" },
  { icon: Infinity, text: "Couture Design" },
  { icon: User, text: "Editorial Styling" },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="w-full px-[5vw] py-[10vh]">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-serif text-5xl font-bold mb-4 uppercase">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
          Core Capabilities
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {/* Left Column - Benefits List */}
        <div className="grid grid-cols-2 grid-rows-2 gap-8 pr-0 lg:pr-[5vw]">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <benefit.icon className="w-12 h-12 mb-4 stroke-[1.5]" />
              <p className="uppercase text-sm tracking-wider">{benefit.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Column - Video/Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full min-h-[400px]"
        >
          <img
            src={heroImage}
            alt="Benefits"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* CTA - Removed */}
    </section>
  );
};

export default BenefitsSection;