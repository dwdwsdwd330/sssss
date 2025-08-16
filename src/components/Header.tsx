import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, User, Search } from 'lucide-react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-black border-b border-red-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-500">DARK REALM</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Categories Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('categories')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors duration-200 py-2">
                <span>Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 bg-gray-900 border border-red-900 shadow-2xl transition-all duration-200 ${
                activeDropdown === 'categories' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Gothic Clothing
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Dark Accessories
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Occult Items
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Dark Art
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Ritual Supplies
                  </a>
                </div>
              </div>
            </div>

            {/* Collections Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('collections')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-colors duration-200 py-2">
                <span>Collections</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className={`absolute top-full left-0 w-56 bg-gray-900 border border-red-900 shadow-2xl transition-all duration-200 ${
                activeDropdown === 'collections' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-2">
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    New Arrivals
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Best Sellers
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Limited Edition
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-colors">
                    Sale Items
                  </a>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            <a href="#" className="text-white hover:text-red-400 transition-colors duration-200 py-2">
              About
            </a>
            <a href="#" className="text-white hover:text-red-400 transition-colors duration-200 py-2">
              Contact
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-red-400 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-red-400 transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-red-400 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;