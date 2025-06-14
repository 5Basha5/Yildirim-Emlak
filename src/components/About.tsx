import React from 'react';
import { Award, Users, Home, TrendingUp } from 'lucide-react';

interface AboutProps {
  translations: any;
}

const About: React.FC<AboutProps> = ({ translations }) => {
  const stats = [
    { icon: Home, number: '500+', label: translations.about.stats.properties },
    { icon: Users, number: '1000+', label: translations.about.stats.clients },
    { icon: Award, number: '15+', label: translations.about.stats.experience },
    { icon: TrendingUp, number: '98%', label: translations.about.stats.satisfaction }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            {translations.about.title}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 animate-expandWidth"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animate-delay-200">
            {translations.about.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fadeInLeft">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              {translations.about.mission.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {translations.about.mission.description}
            </p>
            <div className="space-y-4">
              {translations.about.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center space-x-3 animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 hover:text-amber-600 transition-colors duration-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fadeInRight">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 transform rotate-3 shadow-2xl hover:rotate-6 transition-transform duration-500 hover:shadow-3xl">
              <div className="bg-white rounded-xl p-6 transform -rotate-3 hover:-rotate-6 transition-transform duration-500">
                <img 
                  src="/yildirimm.emlak profile 2.png" 
                  alt="Ahmed Yıldırım" 
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            {/* Floating elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400/20 rounded-full animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-600/30 rounded-full animate-float-delayed"></div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group-hover:bg-gradient-to-br group-hover:from-amber-50 group-hover:to-white">
                <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4 group-hover:scale-125 transition-all duration-500 group-hover:rotate-12" />
                <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">{stat.number}</div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;