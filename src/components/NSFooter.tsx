import { Instagram, Mail, Twitter } from "lucide-react";

const NSFooter = () => {
  return (
    <footer id="footer" className="bg-black text-white px-[5vw] py-[10vh]">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-[5vh] border-b border-gray-800">
        {/* Column 1 - Logo */}
        <div>
          <div className="font-serif text-4xl font-bold">KL</div>
          <p className="text-gray-400 text-sm mt-2">Khushi Lohchab</p>
        </div>

        {/* Column 2 - For Customers */}
        <div>
          <h4 className="uppercase text-white font-semibold mb-4 tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#carousel" className="text-gray-400 hover:text-white transition-colors">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#featured" className="text-gray-400 hover:text-white transition-colors">
                Design Philosophy
              </a>
            </li>
            <li>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                Experience
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - About */}
        <div>
          <h4 className="uppercase text-white font-semibold mb-4 tracking-wider">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="https://www.behance.net/gallery/221695531/portfolio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Behance
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Newsletter */}
        <div>
          <h4 className="uppercase text-white font-semibold mb-4 tracking-wider">
            News & Style Tips
          </h4>
          <form className="flex border-b border-white pb-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 bg-transparent border-none text-white placeholder:text-gray-500 focus:outline-none"
            />
            <button type="submit" className="text-white hover:opacity-70 transition-opacity">
              →
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-[3vh] gap-4">
        <p className="text-gray-400 text-sm">© 2025 Khushi Lohchab. All rights reserved.</p>
        
        <div className="flex gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="mailto:info@atelier.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default NSFooter;