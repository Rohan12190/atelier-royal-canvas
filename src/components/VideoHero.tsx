import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

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
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[8vw] font-bold text-white uppercase tracking-[0.15em] mb-8 leading-none"
        >
          Looks You Remember
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={() => scrollToSection("categories")}
            variant="outline"
            size="lg"
            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm px-8 py-6"
          >
            Shop Now →
          </Button>
        </motion.div>
      </div>

      {/* Bottom Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-[5vh] left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex gap-10">
          <button onClick={() => scrollToSection("carousel")} className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
            Limited Drops
          </button>
          <button onClick={() => scrollToSection("featured")} className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
            Iconic Styling
          </button>
          <button onClick={() => scrollToSection("categories")} className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
            This Season
          </button>
          <button onClick={() => scrollToSection("benefits")} className="text-white text-sm uppercase tracking-widest hover:opacity-70 transition-opacity">
            NS Story
          </button>
        </div>
      </motion.nav>
    </section>
  );
};

// Fallback: use hero image as poster
import heroImage from "@/assets/hero-image.jpg";

export default VideoHero;