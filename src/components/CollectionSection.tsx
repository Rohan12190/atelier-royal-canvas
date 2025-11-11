import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CollectionItem {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface CollectionSectionProps {
  id: string;
  title: string;
  subtitle: string;
  items: CollectionItem[];
  onImageClick: (collectionId: string, itemIndex: number) => void;
}

const CollectionSection = ({
  id,
  title,
  subtitle,
  items,
  onImageClick,
}: CollectionSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id={id} className="py-24 px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-[0.3em]">
            {subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer relative overflow-hidden aspect-[3/4] rounded-sm"
              onClick={() => onImageClick(id, index)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-center justify-center">
                <h3 className="font-serif text-white text-2xl md:text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-wider">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
