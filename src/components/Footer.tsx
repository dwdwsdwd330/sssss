import React from 'react';
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-red-500 font-metal tracking-wider">
              ANTI-CHRIST
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Dark underground streetwear for rebels and outcasts. Express your true self with our exclusive gothic collection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="/new-arrivals" className="text-gray-400 hover:text-red-500 transition-colors duration-200">New Arrivals</a></li>
              <li><a href="/tops" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Tops</a></li>
              <li><a href="/bottoms" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Bottoms</a></li>
              <li><a href="/collections" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Collections</a></li>
              <li><a href="/sale" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">CUSTOMER SERVICE</h4>
            <ul className="space-y-2">
              <li><a href="/contact" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Contact Us</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Shipping Info</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Returns</a></li>
              <li><a href="/size-guide" className="text-gray-400 hover:text-red-500 transition-colors duration-200">Size Guide</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-red-500 transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg">CONTACT INFO</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">support@antichrist.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span className="text-gray-400">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ANTI-CHRIST. All rights reserved. | Designed for rebels, by rebels.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;