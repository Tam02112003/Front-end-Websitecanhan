import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-100 py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-4 text-lg"
        >
          I'm a passionate developer
        </motion.p>
      </div>
    </motion.div>
  );
};

export default HeroSection;
