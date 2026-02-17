import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/careers", label: "Careers" },
    { path: "/pricing", label: "Pricing" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f10]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3"
            data-testid="nav-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
              <span className="font-heading font-bold text-white text-lg">G</span>
            </div>
            <span className="font-heading font-semibold text-white text-lg hidden sm:block">
              GrowthxAILabs
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className={`font-sans text-sm transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              data-testid="nav-contact-btn"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-sm font-medium rounded-full transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            data-testid="nav-mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
                  className={`font-sans text-base py-2 ${
                    isActive(link.path)
                      ? "text-white font-medium"
                      : "text-gray-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                data-testid="nav-mobile-contact-btn"
                className="px-5 py-2.5 bg-indigo-600 text-white font-sans text-sm font-medium rounded-full text-center mt-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
