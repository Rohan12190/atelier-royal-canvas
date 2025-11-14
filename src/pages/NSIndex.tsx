import { useState } from "react";
import PreLoader from "@/components/PreLoader";
import NSNavbar from "@/components/NSNavbar";
import VideoHero from "@/components/VideoHero";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
import NSFooter from "@/components/NSFooter";

// Import images for carousel
import womensCouture from "@/assets/womens-haute-couture.jpg";
import womensReady from "@/assets/womens-ready-to-wear.jpg";
import womensStatement from "@/assets/womens-statement-pieces.jpg";
import mensTailored from "@/assets/mens-tailored-suit.jpg";
import mensEvening from "@/assets/mens-evening-wear.jpg";
import mensCasual from "@/assets/mens-casual-elegance.jpg";

const carouselImages = [
  { src: womensCouture, alt: "Women's Haute Couture" },
  { src: womensReady, alt: "Women's Ready to Wear" },
  { src: womensStatement, alt: "Women's Statement Pieces" },
  { src: mensTailored, alt: "Men's Tailored Suit" },
  { src: mensEvening, alt: "Men's Evening Wear" },
  { src: mensCasual, alt: "Men's Casual Elegance" },
];

const NSIndex = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      {!showContent && <PreLoader onComplete={() => setShowContent(true)} />}
      
      {showContent && (
        <div className="min-h-screen">
          <NSNavbar />
          <VideoHero />
          <HorizontalCarousel images={carouselImages} />
          <FeaturedSection />
          <CategoriesSection />
          <BenefitsSection />
          <NSFooter />
        </div>
      )}
    </>
  );
};

export default NSIndex;
