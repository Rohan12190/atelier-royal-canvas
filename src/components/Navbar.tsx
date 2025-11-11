import { useState } from "react";
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
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
              <DropdownMenuContent className="bg-card border-border">
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
              <DropdownMenuContent className="bg-card border-border">
                <DropdownMenuItem onClick={() => scrollToSection("about")}>
                  Story
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("about")}>
                  Process
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => scrollToSection("contact")}>
                  Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm uppercase tracking-widest hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-card">
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
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-lg uppercase tracking-widest hover:text-accent transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
