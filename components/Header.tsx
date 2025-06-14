import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Globe } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
  translations: any;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, translations }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2 hover:text-amber-600 transition-colors duration-300">
              <Phone className="w-4 h-4 text-amber-600" />
              <span>0539 115 88 04</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-600 transition-colors duration-300">
              <Mail className="w-4 h-4 text-amber-600" />
              <span>info@yildirim.com</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-600 transition-colors duration-300">
              <MapPin className="w-4 h-4 text-amber-600" />
              <span>Bedrettin Demirel Cad. No:117 / Lefkoşa</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-4 h-4 text-amber-600" />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-transparent border-none text-gray-600 focus:outline-none cursor-pointer hover:text-amber-600 transition-colors duration-300"
            >
              <option value="tr">Türkçe</option>
              <option value="ar">العربية</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/yildirimm.emlak profile 2.png" 
              alt="Yıldırım Logo" 
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
            >
              {translations.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
            >
              {translations.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="text-gray-700 hover:text-amber-600 transition-all duration-300 font-medium relative group"
            >
              {translations.nav.properties}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {translations.nav.contact}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slideDown">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                {translations.nav.home}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                {translations.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('properties')}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                {translations.nav.properties}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-all duration-300 w-fit"
              >
                {translations.nav.contact}
              </button>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Globe className="w-4 h-4 text-amber-600" />
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent border border-gray-300 rounded px-2 py-1 text-gray-600 focus:outline-none focus:border-amber-600"
                  >
                    <option value="tr">Türkçe</option>
                    <option value="ar">العربية</option>
                    <option value="en">English</option>
                  </select>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;