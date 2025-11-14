import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalCarouselProps {
  images: { src: string; alt: string }[];
}

const HorizontalCarousel = ({ images }: HorizontalCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="carousel" ref={containerRef} className="relative w-full py-[10vh]">
      <div className="sticky top-0 h-[70vh] overflow-hidden">
        <motion.div style={{ x }} className="flex gap-[2vw] h-full">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex-shrink-0 w-[33vw] h-full"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
          {/* Duplicate for infinite effect */}
          {images.map((image, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0 w-[33vw] h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="text-center py-[5vh]">
        <a
          href="#categories"
          className="inline-block text-foreground text-base underline hover:opacity-70 transition-opacity"
        >
          Explore the Collection →
        </a>
      </div>
    </section>
  );
};

export default HorizontalCarousel;
