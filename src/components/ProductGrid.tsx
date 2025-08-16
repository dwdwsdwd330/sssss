import React from 'react';
import { ShoppingCart, Eye, Heart } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'DEATH SKULL TEE',
      price: 2499,
      originalPrice: 3499,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'T-Shirts',
      isNew: true,
      sale: true
    },
    {
      id: 2,
      name: 'INVERTED CROSS HOODIE',
      price: 4999,
      originalPrice: 6999,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Hoodies',
      isNew: false,
      sale: true
    },
    {
      id: 3,
      name: 'OCCULT SYMBOLS VEST',
      price: 1999,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Vests',
      isNew: true,
      sale: false
    },
    {
      id: 4,
      name: 'GOTHIC FLAMES SWEATSHIRT',
      price: 3999,
      originalPrice: 5499,
      image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sweatshirts',
      isNew: false,
      sale: true
    },
    {
      id: 5,
      name: 'RUNE SYMBOLS LONG SLEEVE',
      price: 2999,
      originalPrice: null,
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Long Sleeve',
      isNew: true,
      sale: false
    },
    {
      id: 6,
      name: 'DARK RITUAL SHIRT',
      price: 3499,
      originalPrice: 4999,
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Shirts',
      isNew: false,
      sale: true
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-metal tracking-wider">
            FEATURED PRODUCTS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our latest collection of dark streetwear designed for rebels and outcasts
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {product.isNew && (
                    <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                      NEW
                    </span>
                  )}
                  {product.sale && (
                    <span className="bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                      SALE
                    </span>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-red-400 text-sm font-medium tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3 group-hover:text-red-400 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-red-500 font-bold text-xl">
                      ₹{product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-sm">
                        ₹{product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all duration-200 transform hover:scale-105 font-medium text-sm">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium tracking-wide">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;