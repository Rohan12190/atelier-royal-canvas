import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

interface Carousel3DProps {
  images: { src: string; alt: string; title: string }[];
}

const Carousel3D = ({ images }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const dragDistanceRef = useRef(0);

  // Helper function to set index and direction
  const changeActiveIndex = (newIndex: number, newDirection: number) => {
    if (!isTransitioning) {
      // Handle edge cases for direction
      let dir = newDirection;
      if (newIndex === 0 && activeIndex === images.length - 1) {
        dir = 1; // Wrapping from last to first
      } else if (newIndex === images.length - 1 && activeIndex === 0) {
        dir = -1; // Wrapping from first to last
      }

      setDirection(dir);
      setActiveIndex(newIndex);

      // Set transitioning flag
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 500); // Match animation duration
    }
  };

  // Auto-advance every 3 seconds
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }

      autoPlayRef.current = setInterval(() => {
        if (!isDragging) {
          const newIndex = (activeIndex + 1) % images.length;
          changeActiveIndex(newIndex, 1);
        }
      }, 3000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [images.length, isDragging, activeIndex]);

  const handleDragStart = (_event: any, info: any) => {
    setIsDragging(true);
    dragStartX.current = info.point.x;
    dragDistanceRef.current = 0;

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleDrag = (_event: any, info: any) => {
    dragDistanceRef.current = info.point.x - dragStartX.current;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const dragDistance = dragDistanceRef.current;
    const threshold = 75;

    if (Math.abs(dragDistance) > threshold) {
      if (dragDistance > 0) {
        // Dragged right (go to previous)
        const newIndex = (activeIndex - 1 + images.length) % images.length;
        changeActiveIndex(newIndex, -1);
      } else {
        // Dragged left (go to next)
        const newIndex = (activeIndex + 1) % images.length;
        changeActiveIndex(newIndex, 1);
      }
    }

    dragDistanceRef.current = 0;
  };

  const handleCardClick = (imageIndex: number) => {
    if (!isDragging && activeIndex !== imageIndex) {
      changeActiveIndex(imageIndex, imageIndex > activeIndex ? 1 : -1);
    }
  };

  // Get visible cards with proper wrapping
  const getVisibleCards = () => {
    const visibleCount = 7; // Show 7 cards total (3 left, active, 3 right)
    const cards = [];

    for (let i = -3; i <= 3; i++) {
      const imageIndex = (activeIndex + i + images.length) % images.length;
      cards.push({
        imageIndex,
        offset: i,
        image: images[imageIndex],
      });
    }

    return cards;
  };

  const visibleCards = getVisibleCards();

  // Function to define the style for "off-screen" cards
  const getOffscreenStyle = (offset: number) => {
    const absOffset = Math.abs(offset);
    return {
      scale: Math.max(0.5, 1 - absOffset * 0.15),
      opacity: 0,
      x: offset * 380, // Use the same spacing logic
      z: -Math.min(300, 80 * absOffset), // Push further back
      rotateY: Math.max(-25, Math.min(25, offset * 10)),
    };
  };

  return (
    <section
      id="carousel"
      className="relative w-full py-[15vh] bg-background overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="font-serif text-5xl font-bold mb-4 uppercase">
          Latest Collection
        </h2>
        <p className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
          Drag to Explore
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative h-[600px] flex items-center justify-center"
        style={{ perspective: "2000px" }}
      >
        <AnimatePresence initial={false} custom={direction}>
          {visibleCards.map(({ imageIndex, offset, image }) => {
            const isActive = offset === 0;
            const absOffset = Math.abs(offset);

            // Calculate transformations based on position relative to active
            const scale = isActive ? 1 : Math.max(0.65, 1 - absOffset * 0.15);
            const opacity = absOffset > 2 ? 0 : Math.max(0.4, 1 - absOffset * 0.25);
            const zIndex = isActive ? 50 : Math.max(0, 40 - absOffset * 8);
            const translateX = offset * 380; // Spacing between cards
            const translateZ = isActive ? 0 : -Math.min(250, 80 * absOffset); // Depth effect
            const rotateY = Math.max(-25, Math.min(25, offset * 10)); // Rotation effect

            return (
              <motion.div
                key={imageIndex}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.05}
                dragMomentum={false}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={() => handleCardClick(imageIndex)}
                initial={false}
                animate={{
                  scale,
                  opacity,
                  x: translateX,
                  z: translateZ,
                  rotateY,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  zIndex,
                  position: "absolute",
                }}
                className="select-none cursor-pointer"
              >
                <div
                  className={`relative w-[420px] h-[520px] rounded-lg overflow-hidden transition-shadow duration-500 ${
                    isActive
                      ? "shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
                      : "shadow-[0_15px_40px_rgba(0,0,0,0.3)]"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h3
                      animate={{ opacity: isActive ? 1 : 0.6 }}
                      transition={{ duration: 0.3 }}
                      className="font-serif text-3xl font-bold text-white mb-3"
                    >
                      {image.title}
                    </motion.h3>
                    <motion.div
                      animate={{
                        opacity: isActive ? 1 : 0,
                        y: isActive ? 0 : 10,
                        pointerEvents: isActive ? "auto" : "none",
                      }}
                      transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`View collection: ${image.title}`);
                      }}
                    >
                      <AnimatedButton text="View Collection" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation dots REMOVED */}

      {/* Arrow Navigation */}
      <button
        onClick={() => {
          const newIndex = (activeIndex - 1 + images.length) % images.length;
          changeActiveIndex(newIndex, -1);
        }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={() => {
          const newIndex = (activeIndex + 1) % images.length;
          changeActiveIndex(newIndex, 1);
        }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </section>
  );
};

export default Carousel3D;