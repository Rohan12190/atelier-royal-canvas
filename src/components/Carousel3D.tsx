import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

interface Carousel3DProps {
  images: { src: string; alt: string; title: string }[];
}

const Carousel3D = ({ images }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragStartX = useRef(0);

  const handleDragStart = (event: any, info: any) => {
    setIsDragging(true);
    dragStartX.current = info.point.x;
  };

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    const dragDistance = info.point.x - dragStartX.current;
    const threshold = 50;

    if (dragDistance > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (dragDistance < -threshold && activeIndex < images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }

    // Animate back to position
    animate(x, 0, {
      type: "spring",
      stiffness: 300,
      damping: 30,
    });
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (Math.abs(e.deltaY) > 10) {
      if (e.deltaY > 0 && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      return () => container.removeEventListener("wheel", handleWheel);
    }
  }, [activeIndex, images.length]);

  return (
    <section id="carousel" className="relative w-full py-[15vh] bg-background overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="font-serif text-5xl font-bold mb-4 uppercase">Latest Collection</h2>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
          Drag or Scroll to Explore
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-[600px] flex items-center justify-center perspective-[2000px]"
      >
        {images.map((image, index) => {
          const offset = index - activeIndex;
          const isActive = index === activeIndex;
          
          // Calculate transformations based on position relative to active
          const scale = isActive ? 1 : 0.7;
          const opacity = Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.3;
          const zIndex = isActive ? 20 : 10 - Math.abs(offset);
          const translateX = offset * 350; // Spacing between cards
          const translateZ = isActive ? 0 : -200 * Math.abs(offset); // Depth effect
          const rotateY = offset * 15; // Slight rotation for 3D effect

          return (
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onClick={() => setActiveIndex(index)}
              animate={{
                scale,
                opacity,
                x: translateX,
                z: translateZ,
                rotateY,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                zIndex,
              }}
              className={`absolute cursor-pointer ${
                isActive ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div
                className={`relative w-[400px] h-[500px] rounded-lg overflow-hidden shadow-2xl transition-shadow duration-300 ${
                  isActive ? "shadow-[0_20px_60px_rgba(0,0,0,0.3)]" : ""
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
                    className="font-serif text-3xl font-bold text-white mb-2"
                  >
                    {image.title}
                  </motion.h3>
                  {isActive && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white text-black px-6 py-2 rounded-full text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                    >
                      View Collection
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-2 mt-12">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-foreground w-8"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#categories"
          className="inline-block text-foreground text-base underline hover:opacity-70 transition-opacity"
        >
          Explore All Collections →
        </a>
      </div>
    </section>
  );
};

export default Carousel3D;
