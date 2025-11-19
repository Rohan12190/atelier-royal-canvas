import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NSNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-3xl font-bold text-foreground">
            KL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("carousel")}
              className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("featured")}
              className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Philosophy
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              About
            </button>
            <Link
              to="/contact"
              className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="text-foreground">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                <button
                  onClick={() => scrollToSection("carousel")}
                  className="text-left text-lg uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Work
                </button>
                <button
                  onClick={() => scrollToSection("featured")}
                  className="text-left text-lg uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Philosophy
                </button>
                <button
                  onClick={() => scrollToSection("benefits")}
                  className="text-left text-lg uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  About
                </button>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="text-left text-lg uppercase tracking-widest hover:opacity-70 transition-opacity"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NSNavbar;