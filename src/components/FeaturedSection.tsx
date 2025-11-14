import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import featuredImage from "@/assets/womens-haute-couture.jpg";

const FeaturedSection = () => {
  return (
    <section id="featured" className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh] w-full">
      {/* Left Column - Image with Gradient Background */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={featuredImage}
          alt="Featured Look"
          className="w-[80%] h-auto object-cover shadow-2xl"
        />
      </div>

      {/* Right Column - Text Content */}
      <div className="relative flex flex-col justify-center px-[10vw] py-12">
        {/* Background Monogram */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[40vw] text-muted/20 leading-none pointer-events-none z-0">
          NS
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="font-serif text-[6vw] uppercase font-bold mb-4">
            Dress Like
          </h2>
          <p className="text-xl mb-8">@JONIDAMALIQI</p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-widest px-8 py-6"
          >
            Unlock the Look →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSection;
