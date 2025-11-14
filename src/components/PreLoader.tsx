import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const PreLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <div className="relative">
        {/* NS Logo Animation */}
        <div className="relative w-[150px] h-[100px] mb-6">
          <motion.div
            initial={{ x: -100, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 font-serif text-[100px] font-bold leading-none"
          >
            N
          </motion.div>
          <motion.div
            initial={{ x: 100, y: 50, opacity: 0 }}
            animate={{ x: 50, y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute top-0 left-0 font-serif text-[100px] font-bold leading-none"
          >
            S
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-serif text-xl tracking-[0.2em] uppercase text-center"
        >
          Looks You Remember
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default PreLoader;
