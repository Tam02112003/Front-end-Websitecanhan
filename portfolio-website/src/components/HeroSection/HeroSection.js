import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(37, 99, 235, 0.4)",
      transition: {
        yoyo: Infinity,
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-32 relative overflow-hidden">
   
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          background: [
            'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.8) 0%, transparent 20%)',
            'radial-gradient(circle at 90% 30%, rgba(16, 185, 129, 0.8) 0%, transparent 20%)',
            'radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.8) 0%, transparent 20%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="container mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400"
          variants={itemVariants}
        >
          Hello, I'm Nguyen Minh Tam
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          variants={itemVariants}
        >
          Java Backend Developer
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <motion.a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View My Projects
          </motion.a>
        </motion.div>
        
        {/* Social links with animation */}
        <motion.div 
          className="flex justify-center mt-12 space-x-6"
          variants={itemVariants}
        >
          <motion.a 
            href="https://github.com/Tam02112003" 
            target="_blank"
            whileHover={{ y: -5 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          
          <motion.a 
            href="https://www.linkedin.com/in/nguyenminhtam021103" 
            target="_blank"
            whileHover={{ y: -5 }}
            className="text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;