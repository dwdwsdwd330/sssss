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
            <h1 className="text-2xl font-bold text-red-500 group-hover:text-red-400 transition-all duration-300 cursor-pointer transform group-hover:scale-105">
              DARK REALM
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* Categories Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => handleMouseEnter('categories')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 group">
                <span>Categories</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'categories' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 w-64 bg-gray-900 border border-red-900 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-95 transition-all duration-300 transform ${
                activeDropdown === 'categories' 
                  ? 'opacity-100 visible translate-y-0 scale-100' 
                  : 'opacity-0 invisible -translate-y-4 scale-95'
              }`}>
                <div className="py-2 animate-fadeIn">
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Gothic Clothing
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Dark Accessories
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Occult Items
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Dark Art
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
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
              <button className="flex items-center space-x-1 text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 group">
                <span>Collections</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  activeDropdown === 'collections' ? 'rotate-180' : 'rotate-0'
                }`} />
              </button>
              
              <div className={`absolute top-full left-0 w-56 bg-gray-900 border border-red-900 shadow-2xl rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-95 transition-all duration-300 transform ${
                activeDropdown === 'collections' 
                  ? 'opacity-100 visible translate-y-0 scale-100' 
                  : 'opacity-0 invisible -translate-y-4 scale-95'
              }`}>
                <div className="py-2 animate-fadeIn">
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    New Arrivals
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Best Sellers
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Limited Edition
                  </a>
                  <a href="#" className="block px-4 py-3 text-white hover:bg-red-900 hover:text-red-300 transition-all duration-200 hover:pl-6 border-l-2 border-transparent hover:border-red-500">
                    Sale Items
                  </a>
                </div>
              </div>
            </div>

            {/* Regular Links */}
            <a href="#" className="text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-105">
              About
            </a>
            <a href="#" className="text-white hover:text-red-400 transition-all duration-300 py-2 px-3 rounded-md hover:bg-red-900 hover:bg-opacity-20 transform hover:scale-105">
              Contact
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;