import { useState } from "react";
import PreLoader from "@/components/PreLoader";
import NSNavbar from "@/components/NSNavbar";
import VideoHero from "@/components/VideoHero";
import Carousel3D from "@/components/Carousel3D";
import FeaturedSection from "@/components/FeaturedSection";
import CategoriesSection from "@/components/CategoriesSection";
import BenefitsSection from "@/components/BenefitsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import NSFooter from "@/components/NSFooter";

// Import images for carousel
import womensCouture from "@/assets/womens-haute-couture.jpg";
import womensReady from "@/assets/womens-ready-to-wear.jpg";
import womensStatement from "@/assets/womens-statement-pieces.jpg";
import mensTailored from "@/assets/mens-tailored-suit.jpg";
import mensEvening from "@/assets/mens-evening-wear.jpg";
import mensCasual from "@/assets/mens-casual-elegance.jpg";

const carouselImages = [
  { src: womensCouture, alt: "Women's Haute Couture", title: "Haute Couture" },
  { src: womensReady, alt: "Women's Ready to Wear", title: "Ready to Wear" },
  { src: womensStatement, alt: "Women's Statement Pieces", title: "Statement" },
  { src: mensTailored, alt: "Men's Tailored Suit", title: "Tailored" },
  { src: mensEvening, alt: "Men's Evening Wear", title: "Evening" },
  { src: mensCasual, alt: "Men's Casual Elegance", title: "Casual" },
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
          <Carousel3D images={carouselImages} />
          <FeaturedSection />
          <CategoriesSection />
          <SkillsSection />
          <ExperienceSection />
          <BenefitsSection />
          <ContactSection />
          <NSFooter />
        </div>
      )}
    </>
  );
};

export default NSIndex;
