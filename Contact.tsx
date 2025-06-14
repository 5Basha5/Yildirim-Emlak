import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Send } from 'lucide-react';

interface ContactProps {
  translations: any;
}

const Contact: React.FC<ContactProps> = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-amber-400/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-amber-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-amber-400/15 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
            {translations.contact.title}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 animate-expandWidth"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            {translations.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <div className="space-y-8 animate-fadeInLeft">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                {translations.contact.info.title}
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-amber-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-amber-400 transition-colors duration-300">{translations.contact.info.phone}</h4>
                    <p className="text-gray-300">0539 115 88 04</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-amber-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-amber-400 transition-colors duration-300">{translations.contact.info.email}</h4>
                    <p className="text-gray-300">info@yildirim.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="bg-amber-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-amber-400 transition-colors duration-300">{translations.contact.info.address}</h4>
                    <p className="text-gray-300">Bedrettin Demirel Cad. No:117 / Lefkoşa</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-amber-400">
                {translations.contact.social.title}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-125 transition-all duration-300 hover:rotate-12 hover:shadow-lg"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-blue-600 p-3 rounded-full hover:scale-125 transition-all duration-300 hover:rotate-12 hover:shadow-lg"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://wa.me/905391158804"
                  className="bg-green-500 p-3 rounded-full hover:scale-125 transition-all duration-300 hover:rotate-12 hover:shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Enhanced Quick Contact Buttons */}
            <div className="space-y-4">
              <a
                href="tel:+905391158804"
                className="block w-full bg-amber-600 text-white py-4 px-6 rounded-xl hover:bg-amber-700 transition-all duration-300 text-center font-semibold transform hover:scale-105 hover:shadow-xl animate-pulse-glow"
              >
                📞 {translations.contact.quickCall}
              </a>
              <a
                href="https://wa.me/905391158804"
                className="block w-full bg-green-500 text-white py-4 px-6 rounded-xl hover:bg-green-600 transition-all duration-300 text-center font-semibold transform hover:scale-105 hover:shadow-xl"
              >
                💬 {translations.contact.whatsapp}
              </a>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl animate-fadeInRight hover:shadow-3xl transition-shadow duration-500">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">
              {translations.contact.form.title}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slideInRight" style={{animationDelay: '0.1s'}}>
                <label className="block text-sm font-medium mb-2">
                  {translations.contact.form.name}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 hover:border-amber-500"
                  required
                />
              </div>
              <div className="animate-slideInRight" style={{animationDelay: '0.2s'}}>
                <label className="block text-sm font-medium mb-2">
                  {translations.contact.form.email}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 hover:border-amber-500"
                  required
                />
              </div>
              <div className="animate-slideInRight" style={{animationDelay: '0.3s'}}>
                <label className="block text-sm font-medium mb-2">
                  {translations.contact.form.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 hover:border-amber-500"
                />
              </div>
              <div className="animate-slideInRight" style={{animationDelay: '0.4s'}}>
                <label className="block text-sm font-medium mb-2">
                  {translations.contact.form.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 resize-none hover:border-amber-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg hover:bg-amber-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold transform hover:scale-105 hover:shadow-xl animate-slideInRight"
                style={{animationDelay: '0.5s'}}
              >
                <Send className="w-5 h-5" />
                <span>{translations.contact.form.send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;