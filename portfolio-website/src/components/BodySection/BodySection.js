import React, { useRef } from 'react';
import { motion} from 'framer-motion';
import StudentCard3DViewer from '../Card/StudentCard3D';

const BodySection = () => {
  const ref = useRef(null);


  // Education timeline animation
  const educationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };

  return (
    
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">

    

      {/* Nội dung khác */}
      <div className="container mx-auto px-6 relative z-20">
        
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg mb-12 max-w-3xl ml-auto"
        >
            <StudentCard3DViewer />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm Nguyen Minh Tam, a passionate Java Backend Developer currently pursuing Software Engineering at Ho Chi Minh City University of Technology. With 8 months of experience in Java and various web technologies, I enjoy building functional systems and exploring new technologies.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Education</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="hidden sm:block absolute h-full w-0.5 bg-blue-500 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline item */}
            <div className="flex flex-col sm:flex-row items-center mb-8">
              <motion.div 
                className="flex-1 sm:pr-16 order-2 sm:order-1"
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={educationVariants}
              >
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">Faculty of Information Technology</h3>
                  <p className="text-blue-600 font-medium">Ho Chi Minh City University of Technology</p>
                  <p className="text-gray-500">Major in Software Engineering</p>
                  <p className="text-gray-400 mt-2">09/2021 - 09/2025</p>
                  <p className="text-gray-600 mt-2">Good Academic Performance</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-md order-1 sm:order-2 mb-4 sm:mb-0"
                custom={0.2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={educationVariants}
              ></motion.div>
              
              <div className="flex-1 sm:pl-16 order-3"></div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Professional Skills</h3>
              <ul className="space-y-3">
                {[
                  "Java (8 Months Experience)",
                  "Spring Boot MVC",
                  "HTML/CSS/JavaScript",
                  "SQL Server & MySQL",
                  "GitHub Version Control",
                  "OOP Concepts",
                  "Interface Design"
                ].map((skill, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Soft Skills</h3>
              <ul className="space-y-3">
                {[
                  "Communication Skills",
                  "Self-Learning Mindset",
                  "Effective Problem-Solving",
                  "English Reading Comprehension",
                  "Teamwork & Collaboration"
                ].map((skill, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 5) * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg className="w-5 h-5 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Project</h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Website Soccer Equipments</h3>
            <p className="text-gray-600 mb-4">09/2024 - 12/2024</p>
            <p className="text-gray-700 mb-4">
              Developed a fully functional e-commerce website for selling soccer-related products, featuring user authentication, product management, shopping cart, and payment integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML/CSS", "JavaScript", "Bootstrap", "Java", "Spring Boot", "MySQL"].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.a
              href="https://github.com/Tam02112003/DACN"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              View on GitHub
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Certificates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-blue-500 pl-4 py-2"
            >
              <h3 className="text-xl font-semibold text-gray-800">English CEFR B1</h3>
              <p className="text-gray-500">2024</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="border-l-4 border-emerald-500 pl-4 py-2"
            >
              <h3 className="text-xl font-semibold text-gray-800">Communication and Teamwork Skills</h3>
              <p className="text-gray-500">2024</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BodySection;