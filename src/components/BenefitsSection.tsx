import { motion } from "framer-motion";
import { Gift, Percent, Star, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const benefits = [
  { icon: Star, text: "Points For Purchases" },
  { icon: Percent, text: "Exclusive Discounts" },
  { icon: Gift, text: "Birthday Gifts" },
  { icon: Zap, text: "Early Access To Drops" },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full px-[5vw] py-[10vh]">
      {/* Left Column - Benefits List */}
      <div className="grid grid-cols-2 grid-rows-2 gap-8 pr-[5vw]">
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

      {/* CTA */}
      <div className="col-span-1 lg:col-span-2 text-center pt-8">
        <a
          href="#footer"
          className="inline-block text-foreground text-base underline hover:opacity-70 transition-opacity"
        >
          Explore Benefits →
        </a>
      </div>
    </section>
  );
};

export default BenefitsSection;
