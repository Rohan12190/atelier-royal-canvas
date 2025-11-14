import { motion } from "framer-motion";
import womenImage from "@/assets/womens-ready-to-wear.jpg";
import menImage from "@/assets/mens-tailored-suit.jpg";
import kidsImage from "@/assets/womens-statement-pieces.jpg";
import { Link } from "react-router-dom"; // Import Link

const categories = [
  { name: "WOMEN", image: womenImage, path: "/women" }, // Added path
  { name: "MEN", image: menImage, path: "/men" },     // Added path
  { name: "KIDS", image: kidsImage, path: "/kids" },   // Added path
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="grid grid-cols-1 md:grid-cols-3 gap-[2vw] w-full px-[5vw] py-[10vh]">
      {categories.map((category, index) => (
        <motion.div // Keep this as motion.div for layout
          key={category.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative h-[70vh] overflow-hidden group cursor-pointer"
        >
          {/* Link wraps everything inside */}
          <Link to={category.path} className="absolute inset-0">
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            {/* Category Text (was a link, now just a div) */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-white/90 text-black px-8 py-3 rounded-full uppercase text-sm tracking-wider group-hover:bg-white transition-colors"
            >
              {category.name}
            </div>
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default CategoriesSection;