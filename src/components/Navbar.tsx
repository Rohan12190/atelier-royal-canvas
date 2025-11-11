import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled 
          ? "bg-gradient-to-r from-background via-secondary to-background backdrop-blur-md shadow-elegant" 
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-serif text-2xl font-bold tracking-wider hover:text-accent transition-colors"
          >
            ATELIER
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm uppercase tracking-widest hover:text-accent transition-colors">
                Collections <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gradient-to-br from-card to-secondary border-border z-50">
                <DropdownMenuItem onClick={() => scrollToSection("mens-collection")}>
                  Men's
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("womens-collection")}>
                  Women's
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("accessories-collection")}>
                  Accessories
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm uppercase tracking-widest hover:text-accent transition-colors">
                About <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gradient-to-br from-card to-secondary border-border z-50">
                <DropdownMenuItem onClick={() => scrollToSection("about")}>
                  Story
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("about")}>
                  Process
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/contact">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="/contact"
              className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-gradient-to-b from-card to-secondary">
              <div className="flex flex-col space-y-6 mt-8">
                <button
                  onClick={() => scrollToSection("mens-collection")}
                  className="text-lg uppercase tracking-widest hover:text-accent transition-colors text-left"
                >
                  Men's Collection
                </button>
                <button
                  onClick={() => scrollToSection("womens-collection")}
                  className="text-lg uppercase tracking-widest hover:text-accent transition-colors text-left"
                >
                  Women's Collection
                </button>
                <button
                  onClick={() => scrollToSection("accessories-collection")}
                  className="text-lg uppercase tracking-widest hover:text-accent transition-colors text-left"
                >
                  Accessories
                </button>
                <a
                  href="/contact"
                  className="text-lg uppercase tracking-widest hover:text-accent transition-colors text-left"
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
