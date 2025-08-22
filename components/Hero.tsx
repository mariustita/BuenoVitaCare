
import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative bg-cover bg-center text-white" style={{ backgroundImage: "url('https://picsum.photos/1600/900?image=225')" }}>
      <div className="absolute inset-0 bg-brand-blue bg-opacity-60"></div>
      <div className="container mx-auto px-6 py-32 md:py-48 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Calea ta spre o viață mai bună începe aici.
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          Recuperare. Revigorare. Renaștere. La BuenoVita Care, vă suntem alături la fiecare pas.
        </p>
        <a 
          href="#contact" 
          onClick={handleScrollToContact}
          className="bg-brand-teal hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-lg"
        >
          Programează o consultație
        </a>
      </div>
    </section>
  );
};

export default Hero;
