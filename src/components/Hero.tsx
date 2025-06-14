import React from 'react';
import { ChevronDown, Star } from 'lucide-react';

interface HeroProps {
  translations: any;
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  const scrollToProperties = () => {
    const element = document.getElementById('properties');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Enhanced animated geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-amber-400/30 rotate-45 animate-pulse hover:border-amber-400/60 transition-all duration-500"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-amber-400/20 rotate-12 animate-bounce hover:border-amber-400/50 transition-all duration-500"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-amber-400/10 rotate-45 animate-spin-slow hover:bg-amber-400/20 transition-all duration-500"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-amber-400/15 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-amber-400/5 rounded-full animate-pulse"></div>
        
        {/* Floating stars */}
        <Star className="absolute top-1/4 right-1/4 w-6 h-6 text-amber-400/30 animate-twinkle" />
        <Star className="absolute bottom-1/4 left-1/5 w-4 h-4 text-amber-400/20 animate-twinkle-delayed" />
        <Star className="absolute top-3/4 right-1/5 w-5 h-5 text-amber-400/25 animate-twinkle" />
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-glow">
              <span className="text-amber-400 drop-shadow-2xl">YILDIRIM</span>
              <br />
              <span className="text-4xl md:text-6xl font-light text-white/90">EMLAK</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
            {translations.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animate-delay-300">
            <button
              onClick={scrollToProperties}
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-pulse-glow"
            >
              {translations.hero.cta}
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              {translations.hero.learnMore}
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center space-y-2">
          <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
          <div className="w-0.5 h-8 bg-gradient-to-b from-white/70 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;