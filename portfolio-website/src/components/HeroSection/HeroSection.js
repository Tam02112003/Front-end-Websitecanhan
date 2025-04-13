import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-xl mb-8">Frontend Developer | UI/UX Enthusiast</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
