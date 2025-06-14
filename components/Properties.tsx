import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Euro, Phone } from 'lucide-react';

interface PropertiesProps {
  translations: any;
}

const Properties: React.FC<PropertiesProps> = ({ translations }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const properties = [
    {
      id: 1,
      type: 'rent',
      title: 'Ortaköy\'de Kiralık Penthouse Daire',
      location: 'Ortaköy, İstanbul',
      price: '600€',
      beds: 6,
      baths: 2,
      area: 150,
      image: '/1.png',
      features: ['6 kira + 1 Depozit + Komisyon Bedeli', 'Orkaköy Makro arkasında', 'Full Eşyalı', '3. Kat', '2 + 1']
    },
    {
      id: 2,
      type: 'rent',
      title: 'Kaymaklı\'da Kiralık Daire',
      location: 'Kaymaklı, Lefkoşa',
      price: '380€',
      beds: 2,
      baths: 1,
      area: 85,
      image: '/2.png',
      features: ['Eşyalı', '3 Ay Peşin + 2 Depozit + 1 Komisyon Bedeli', '2+1']
    },
    {
      id: 3,
      type: 'sale',
      title: 'Küçükkaymaklı\'da Satılık Daire',
      location: 'Küçükkaymaklı',
      price: 'Fiyat Sorulur',
      beds: 3,
      baths: 2,
      area: 120,
      image: '/3.png',
      features: ['3+1', 'Merkezi Konum', 'Sıfır bina, yeni ve temiz', 'Türk koçanlı']
    },
    {
      id: 4,
      type: 'rent',
      title: 'Full Eşyalı Kiralık Daire',
      location: 'Lefkoşa',
      price: '600€',
      beds: 2,
      baths: 1,
      area: 90,
      image: '/4.png',
      features: ['2+1', 'Full Eşyalı', 'Yıllık peşin', 'Durak ve marketlere yakın konumda']
    }
  ];

  const filteredProperties = activeFilter === 'all' 
    ? properties 
    : properties.filter(property => property.type === activeFilter);

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
            {translations.properties.title}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8 animate-expandWidth"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animate-delay-200">
            {translations.properties.subtitle}
          </p>
        </div>

        {/* Enhanced Filter buttons */}
        <div className="flex justify-center mb-12 animate-fadeInUp animate-delay-300">
          <div className="bg-gray-100 rounded-full p-2 flex space-x-2 shadow-lg">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-amber-600 hover:bg-white'
              }`}
            >
              {translations.properties.filters.all}
            </button>
            <button
              onClick={() => setActiveFilter('rent')}
              className={`px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'rent'
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-amber-600 hover:bg-white'
              }`}
            >
              {translations.properties.filters.rent}
            </button>
            <button
              onClick={() => setActiveFilter('sale')}
              className={`px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
                activeFilter === 'sale'
                  ? 'bg-amber-600 text-white shadow-lg scale-105'
                  : 'text-gray-600 hover:text-amber-600 hover:bg-white'
              }`}
            >
              {translations.properties.filters.sale}
            </button>
          </div>
        </div>

        {/* Enhanced Properties grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, index) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden group animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 transform -translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold shadow-lg ${
                    property.type === 'rent' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-green-600 text-white'
                  }`}>
                    {property.type === 'rent' ? translations.properties.forRent : translations.properties.forSale}
                  </span>
                </div>
                <div className="absolute top-4 right-4 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-lg font-bold shadow-lg">
                    {property.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                  <MapPin className="w-4 h-4 mr-2 text-amber-600" />
                  <span>{property.location}</span>
                </div>

                <div className="flex justify-between items-center mb-4 text-gray-600">
                  <div className="flex items-center hover:text-amber-600 transition-colors duration-300">
                    <Bed className="w-4 h-4 mr-1 text-amber-600" />
                    <span>{property.beds}</span>
                  </div>
                  <div className="flex items-center hover:text-amber-600 transition-colors duration-300">
                    <Bath className="w-4 h-4 mr-1 text-amber-600" />
                    <span>{property.baths}</span>
                  </div>
                  <div className="flex items-center hover:text-amber-600 transition-colors duration-300">
                    <Square className="w-4 h-4 mr-1 text-amber-600" />
                    <span>{property.area}m²</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {property.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600 animate-slideInLeft" style={{animationDelay: `${featureIndex * 0.05}s`}}>
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2 animate-pulse"></div>
                      <span className="hover:text-amber-600 transition-colors duration-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-amber-600 text-white py-3 rounded-xl hover:bg-amber-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold transform hover:scale-105 hover:shadow-lg">
                  <Phone className="w-4 h-4" />
                  <span>{translations.properties.contact}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;