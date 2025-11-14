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
    <section 
      id={id} 
      className="py-24 px-6 lg:px-8 relative overflow-hidden" 
      ref={ref}
      style={{
        background: id === "womens-collection" 
          ? "linear-gradient(180deg, hsl(38 35% 96%) 0%, hsl(38 45% 92%) 50%, hsl(38 35% 96%) 100%)"
          : id === "accessories-collection"
          ? "linear-gradient(135deg, hsl(38 25% 92%) 0%, hsl(38 35% 96%) 100%)"
          : "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)"
      }}
    >
      {/* Decorative Elements */}
      {id === "mens-collection" && (
        <>
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </>
      )}
      {id === "womens-collection" && (
        <>
          <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-40 right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
        </>
      )}
      {id === "accessories-collection" && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-4" />
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground uppercase tracking-[0.3em]">
            {subtitle}
          </p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block mt-6"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </motion.div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut" 
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group cursor-pointer relative overflow-hidden aspect-[3/4] rounded-sm shadow-elegant hover:shadow-royal transition-shadow duration-500"
              onClick={() => onImageClick(id, index)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-8 z-20">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-white text-2xl md:text-3xl uppercase tracking-wider mb-2">
                    {item.name}
                  </h3>
                  <div className="h-px w-16 bg-accent mx-auto" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;