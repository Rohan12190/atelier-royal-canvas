import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-4">ATELIER</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting timeless elegance through exceptional design and uncompromising
              quality. Where sophistication meets contemporary style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("mens-collection")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Men's Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("womens-collection")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Women's Collection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("accessories-collection")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Accessories
                </button>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href="mailto:info@atelier.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  info@atelier.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 ATELIER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
