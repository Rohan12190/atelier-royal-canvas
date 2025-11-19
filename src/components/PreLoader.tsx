import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // 0.5s fade-out
    }, 2000); // Show for 2 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 1.8 }} // Start fade-out slightly before timer ends
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        {/* KL Logo Animation */}
        <div className="relative w-[200px] h-[120px] mb-6 overflow-hidden">
          <motion.div
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            className="absolute top-0 left-0 font-serif text-[100px] font-bold leading-none text-foreground"
          >
            K
          </motion.div>
          <motion.div
            initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            className="absolute top-0 left-[60px] font-serif text-[100px] font-bold leading-none text-foreground"
          >
            L
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="font-serif text-lg tracking-[0.3em] uppercase text-center text-foreground/80"
        >
          Fashion Designer
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default PreLoader;