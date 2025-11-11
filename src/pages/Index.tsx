import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CollectionSection from "@/components/CollectionSection";
import ImageLightbox from "@/components/ImageLightbox";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import mensTailoredSuit from "@/assets/mens-tailored-suit.jpg";
import mensCasualElegance from "@/assets/mens-casual-elegance.jpg";
import mensEveningWear from "@/assets/mens-evening-wear.jpg";
import womensHauteCouture from "@/assets/womens-haute-couture.jpg";
import womensReadyToWear from "@/assets/womens-ready-to-wear.jpg";
import womensStatementPieces from "@/assets/womens-statement-pieces.jpg";
import luxuryBags from "@/assets/luxury-bags.jpg";
import fineJewelry from "@/assets/fine-jewelry.jpg";
import designerFootwear from "@/assets/designer-footwear.jpg";

const collections = {
  "mens-collection": [
    {
      id: "tailored-suit",
      name: "Tailored Suit",
      image: mensTailoredSuit,
      description: "Sophisticated three-piece suit crafted from premium Italian wool. Features impeccable tailoring with a modern slim fit, perfect for the discerning gentleman.",
    },
    {
      id: "casual-elegance",
      name: "Casual Elegance",
      image: mensCasualElegance,
      description: "Refined casual wear that bridges the gap between comfort and sophistication. Featuring luxurious cashmere and tailored trousers for effortless style.",
    },
    {
      id: "evening-wear",
      name: "Evening Wear",
      image: mensEveningWear,
      description: "Classic tuxedo embodying timeless elegance. Hand-finished details and premium fabric ensure you make an unforgettable impression at any formal occasion.",
    },
  ],
  "womens-collection": [
    {
      id: "haute-couture",
      name: "Haute Couture",
      image: womensHauteCouture,
      description: "An exquisite flowing gown featuring intricate beadwork and ethereal fabric. Each piece is a masterwork of craftsmanship, designed to captivate and enchant.",
    },
    {
      id: "ready-to-wear",
      name: "Ready to Wear",
      image: womensReadyToWear,
      description: "Contemporary power dressing redefined. Tailored perfection meets modern femininity in this sophisticated ensemble, perfect for the contemporary woman.",
    },
    {
      id: "statement-pieces",
      name: "Statement Pieces",
      image: womensStatementPieces,
      description: "Bold architectural design that pushes boundaries. Avant-garde silhouettes and innovative construction create unforgettable fashion moments.",
    },
  ],
  "accessories-collection": [
    {
      id: "luxury-bags",
      name: "Luxury Bags",
      image: luxuryBags,
      description: "Handcrafted leather handbags that exemplify timeless elegance. Premium materials and meticulous attention to detail ensure lasting beauty and functionality.",
    },
    {
      id: "fine-jewelry",
      name: "Fine Jewelry",
      image: fineJewelry,
      description: "Exquisite diamond and gold jewelry pieces that elevate any ensemble. Each piece is carefully curated to become a treasured heirloom.",
    },
    {
      id: "designer-footwear",
      name: "Designer Footwear",
      image: designerFootwear,
      description: "Elegant designer footwear crafted from the finest materials. Where comfort meets couture in every step, designed to complement your sophisticated style.",
    },
  ],
};

const Index = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentCollection, setCurrentCollection] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (collectionId: string, itemIndex: number) => {
    setCurrentCollection(collectionId);
    setCurrentIndex(itemIndex);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    const collectionItems = collections[currentCollection as keyof typeof collections];
    setCurrentIndex((prev) => (prev + 1) % collectionItems.length);
  };

  const handlePrevious = () => {
    const collectionItems = collections[currentCollection as keyof typeof collections];
    setCurrentIndex((prev) => (prev - 1 + collectionItems.length) % collectionItems.length);
  };

  const currentItems = currentCollection
    ? collections[currentCollection as keyof typeof collections]
    : [];

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div id="collections">
        <CollectionSection
          id="mens-collection"
          title="Men's Collection"
          subtitle="Sophisticated & Refined"
          items={collections["mens-collection"]}
          onImageClick={handleImageClick}
        />

        <CollectionSection
          id="womens-collection"
          title="Women's Collection"
          subtitle="Elegant & Timeless"
          items={collections["womens-collection"]}
          onImageClick={handleImageClick}
        />

        <CollectionSection
          id="accessories-collection"
          title="Accessories"
          subtitle="The Finishing Touch"
          items={collections["accessories-collection"]}
          onImageClick={handleImageClick}
        />
      </div>

      <ContactForm />
      <Footer />

      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        currentIndex={currentIndex}
        items={currentItems}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
};

export default Index;
