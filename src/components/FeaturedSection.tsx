import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import featuredImage from "@/assets/womens-haute-couture.jpg";


const FeaturedSection = () => {
  // Helper function to scroll to the "NS Story" (benefits section)
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="featured" className="grid grid-cols-1 lg:grid-cols-2 min-h-[30vh] w-full">
      {/* Left Column - Image */}
      <div className="bg-gradient-to-br from-secondary to-background flex items-center justify-center p-0">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={featuredImage}
          alt="Our Atelier's craftsmanship"
          className="w-full h-full object-cover lg:h-auto lg:w-auto lg:aspect-[4/5]"
        />
      </div>

      {/* Right Column - Text Content */}
      <div className="relative flex flex-col justify-center px-[10vw] py-20 lg:py-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-serif text-[6vw] uppercase font-bold mb-4 leading-tight">
            From the
            <br />
            Atelier
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            We believe in the power of timeless elegance. Our collections are a
            blend of classic sophistication and modern artistry, crafted for
            looks you'll remember forever.
          </p>
          <AnimatedButton
            text="Learn More"
            onClick={() => scrollToSection("benefits")}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;