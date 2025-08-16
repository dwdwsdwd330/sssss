import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Hero ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      </div>

      {/* 3D Rotating T-Shirt Mockup */}
      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto relative">
            <div className="absolute inset-0 animate-spin-slow">
              <div className="w-full h-full bg-gradient-to-br from-red-900 to-black rounded-lg shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-4 bg-black rounded border border-red-500 flex items-center justify-center">
                  <div className="text-red-500 font-metal text-2xl transform -rotate-12">
                    ⛧
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white font-metal tracking-wider">
          ANTI-CHRIST
        </h1>
        <p className="text-xl md:text-2xl text-red-400 mb-8 font-light tracking-wide">
          DARK UNDERGROUND STREETWEAR
        </p>
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Embrace the darkness. Rebel against conformity. Express your true self with our exclusive collection of gothic streetwear.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 font-medium tracking-wide">
            SHOP NOW
          </button>
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium tracking-wide">
            VIEW COLLECTIONS
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;