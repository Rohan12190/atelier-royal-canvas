import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";

const VideoHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroImage}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover animate-[kenBurnsZoom_15s_infinite_alternate]"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback to image if video doesn't load */}
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-accent/20 to-black/10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-[8vw] font-bold text-white uppercase tracking-[0.15em] mb-4 leading-none"
        >
          Creative Portfolio
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/90 uppercase tracking-[0.3em] mb-12 font-light"
        >
          Design · Development · Innovation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={() => scrollToSection("carousel")}
            className="border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 uppercase tracking-[0.15em] text-sm font-semibold px-10 py-4 min-w-[160px]"
          >
            View Work
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Fallback: use hero image as poster
import heroImage from "@/assets/hero-image.jpg";

export default VideoHero;