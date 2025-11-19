import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UniversalAnimatedButton from "@/components/UniversalAnimatedButton";

interface Carousel3DProps {
  images: { src: string; alt: string; title: string }[];
}

const Carousel3D = ({ images }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const dragDistanceRef = useRef(0);

  // Helper function to set index and direction
  const changeActiveIndex = (newIndex: number, newDirection: number) => {
    if (!isTransitioning && !isNavigating) {
      let dir = newDirection;
      if (newIndex === 0 && activeIndex === images.length - 1) {
        dir = 1;
      } else if (newIndex === images.length - 1 && activeIndex === 0) {
        dir = -1;
      }

      setDirection(dir);
      setActiveIndex(newIndex);
      setIsTransitioning(true);
      setIsNavigating(true);
      
      setTimeout(() => {
        setIsTransitioning(false);
        setIsNavigating(false);
      }, 500);
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
        const newIndex = (activeIndex - 1 + images.length) % images.length;
        changeActiveIndex(newIndex, -1);
      } else {
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

  const getVisibleCards = () => {
    const visibleCount = 7;
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

            const scale = isActive ? 1 : Math.max(0.65, 1 - absOffset * 0.15);
            const opacity = absOffset > 2 ? 0 : Math.max(0.4, 1 - absOffset * 0.25);
            const zIndex = isActive ? 50 : Math.max(0, 40 - absOffset * 8);
            const translateX = offset * 380;
            const translateZ = isActive ? 0 : -Math.min(250, 80 * absOffset);
            const rotateY = Math.max(-25, Math.min(25, offset * 10));

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
                  className={`group relative w-[420px] h-[520px] rounded-lg overflow-hidden transition-shadow duration-500 ${
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

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

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
                    >
                      <UniversalAnimatedButton
                        text="Collection"
                        onClick={(e) => {
                          e?.stopPropagation();
                          console.log(`View collection: ${image.title}`);
                        }}
                        className="bg-white text-black px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground border-none min-w-[140px] h-[42px]"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Arrow Navigation - Capsule/Pill Shape */}
      <button
        onClick={() => {
          if (!isNavigating) {
            const newIndex = (activeIndex - 1 + images.length) % images.length;
            changeActiveIndex(newIndex, -1);
          }
        }}
        disabled={isNavigating}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm text-accent border border-accent/50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
          if (!isNavigating) {
            const newIndex = (activeIndex + 1) % images.length;
            changeActiveIndex(newIndex, 1);
          }
        }}
        disabled={isNavigating}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm text-accent border border-accent/50 px-6 py-3 rounded-full transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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