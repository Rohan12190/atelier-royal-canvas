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
import mensTailored from "@/assets/mens-tailored-suit.jpg";
import mensEvening from "@/assets/mens-evening-wear.jpg";
import mensCasual from "@/assets/mens-casual-elegance.jpg";

const products = [
  { id: 1, name: "Tailored Suit", price: 1999, category: "suits", image: mensTailored },
  { id: 2, name: "Evening Wear", price: 1499, category: "formal", image: mensEvening },
  { id: 3, name: "Casual Elegance", price: 899, category: "casual", image: mensCasual },
  { id: 4, name: "Designer Blazer", price: 1299, category: "outerwear", image: mensTailored },
  { id: 5, name: "Luxury Shirt", price: 499, category: "shirts", image: mensEvening },
  { id: 6, name: "Premium Trousers", price: 599, category: "pants", image: mensCasual },
];

const Men = () => {
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
            Men's Collection
          </motion.h1>
          <p className="text-xl text-muted-foreground uppercase tracking-[0.3em]">
            Refined Sophistication
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
                <SelectItem value="suits">Suits</SelectItem>
                <SelectItem value="formal">Formal Wear</SelectItem>
                <SelectItem value="casual">Casual</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="shirts">Shirts</SelectItem>
                <SelectItem value="pants">Pants</SelectItem>
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

export default Men;
