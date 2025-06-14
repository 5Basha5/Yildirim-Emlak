import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Properties from './components/Properties';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('tr');

  const currentTranslations = translations[language as keyof typeof translations];

  return (
    <div className="min-h-screen">
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        translations={currentTranslations} 
      />
      <Hero translations={currentTranslations} />
      <About translations={currentTranslations} />
      <Properties translations={currentTranslations} />
      <Contact translations={currentTranslations} />
      <Footer translations={currentTranslations} />
    </div>
  );
}

export default App;