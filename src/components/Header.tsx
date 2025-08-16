import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black border-b border-red-900 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-500 hover:text-red-400 transition-all duration-300 cursor-pointer transform hover:scale-105 font-metal tracking-wider">
              ANTI-CHRIST
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {/* New Arrivals */}
            <a 
              href="/new-arrivals" 
              target="_blank"
              className="text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-105 font-medium"
            >
              NEW ARRIVALS
            </a>

            {/* Tops Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('tops')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 group font-medium">
                <span>TOPS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'tops' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 w-64 bg-gray-900 border border-red-900 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-98 transition-all duration-300 transform ${
                activeDropdown === 'tops' 
                  ? 'opacity-100 visible translate-y-0 scale-100' 
                  : 'opacity-0 invisible -translate-y-4 scale-95'
              }`}>
                <div className="py-2">
                  <a href="/tshirts" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    T-SHIRTS
                  </a>
                  <a href="/vests" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    VESTS
                  </a>
                  <a href="/hoodies" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    HOODIES
                  </a>
                  <a href="/sweatshirts" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    SWEATSHIRTS
                  </a>
                  <a href="/shirts" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    SHIRTS
                  </a>
                  <a href="/long-sleeve" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    LONG SLEEVE T-SHIRTS
                  </a>
                </div>
              </div>
            </div>

            {/* Bottoms Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('bottoms')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 group font-medium">
                <span>BOTTOMS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'bottoms' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 w-56 bg-gray-900 border border-red-900 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-98 transition-all duration-300 transform ${
                activeDropdown === 'bottoms' 
                  ? 'opacity-100 visible translate-y-0 scale-100' 
                  : 'opacity-0 invisible -translate-y-4 scale-95'
              }`}>
                <div className="py-2">
                  <a href="/toms" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    TOMS
                  </a>
                  <a href="/pants" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    PANTS
                  </a>
                  <a href="/jeans" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    JEANS
                  </a>
                  <a href="/shorts" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    SHORTS
                  </a>
                  <a href="/jorts" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500 font-medium">
                    JORTS
                  </a>
                </div>
              </div>
            </div>

            {/* Collections */}
            <a 
              href="/collections" 
              className="text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-105 font-medium"
            >
              COLLECTIONS
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-red-400 transition-all duration-300 p-2 rounded-full hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-110 hover:rotate-12">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-red-400 transition-all duration-300 p-2 rounded-full hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-red-400 transition-all duration-300 p-2 rounded-full hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-110 relative group">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse group-hover:animate-bounce transition-all duration-300">
                0
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="lg:hidden text-white hover:text-red-400 transition-all duration-300 p-2 rounded-full hover:bg-red-900 hover:bg-opacity-20"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-red-900">
            <a href="/new-arrivals" target="_blank" className="block px-4 py-2 text-white hover:text-red-400 hover:bg-red-900 hover:bg-opacity-20 rounded-md transition-all duration-200 font-medium">
              NEW ARRIVALS
            </a>
            <a href="/tops" className="block px-4 py-2 text-white hover:text-red-400 hover:bg-red-900 hover:bg-opacity-20 rounded-md transition-all duration-200 font-medium">
              TOPS
            </a>
            <a href="/bottoms" className="block px-4 py-2 text-white hover:text-red-400 hover:bg-red-900 hover:bg-opacity-20 rounded-md transition-all duration-200 font-medium">
              BOTTOMS
            </a>
            <a href="/collections" className="block px-4 py-2 text-white hover:text-red-400 hover:bg-red-900 hover:bg-opacity-20 rounded-md transition-all duration-200 font-medium">
              COLLECTIONS
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;