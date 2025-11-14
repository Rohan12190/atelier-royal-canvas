import { useState } from "react";
import NSNavbar from "@/components/NSNavbar";
import NSFooter from "@/components/NSFooter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Import images
import luxuryBags from "@/assets/luxury-bags.jpg";
import jewelry from "@/assets/fine-jewelry.jpg";
import footwear from "@/assets/designer-footwear.jpg";

const products = [
  { id: 1, name: "Kids Designer Dress", price: 299, category: "dresses", image: luxuryBags },
  { id: 2, name: "Junior Suit", price: 399, category: "formal", image: jewelry },
  { id: 3, name: "Casual Outfit Set", price: 199, category: "casual", image: footwear },
  { id: 4, name: "Kids Jacket", price: 249, category: "outerwear", image: luxuryBags },
  { id: 5, name: "Party Dress", price: 349, category: "dresses", image: jewelry },
  { id: 6, name: "School Wear", price: 179, category: "casual", image: footwear },
];

const Kids = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = products.filter(
    (product) => filter === "all" || product.category === filter
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen">
      <NSNavbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-6xl md:text-7xl font-bold mb-6 uppercase"
          >
            Kids Collection
          </motion.h1>
          <p className="text-xl text-muted-foreground uppercase tracking-[0.3em]">
            Young Style Icons
          </p>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-4 w-full md:w-auto">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="dresses">Dresses</SelectItem>
                <SelectItem value="formal">Formal</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-sm text-muted-foreground">
            {sortedProducts.length} Products
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-4 aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                <Button
                  variant="outline"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black hover:bg-black hover:text-white border-none"
                >
                  Quick View
                </Button>
              </div>
              <h3 className="font-serif text-xl mb-2">{product.name}</h3>
              <p className="text-muted-foreground">${product.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <NSFooter />
    </div>
  );
};

export default Kids;
