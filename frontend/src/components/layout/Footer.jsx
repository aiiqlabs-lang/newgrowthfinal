import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f10] border-t border-white/10 py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                <span className="font-heading font-bold text-white text-lg">G</span>
              </div>
              <span className="font-heading font-semibold text-white text-lg">
                GrowthxAILabs
              </span>
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed max-w-sm">
              We build custom generative AI products for businesses. Accelerating growth through custom AI agents tailored for specific use cases.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm font-sans transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-sans">
            © 2025 GrowthxAILabs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
