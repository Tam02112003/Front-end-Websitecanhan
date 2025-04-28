import React, { useEffect, useState} from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { fetchProjects, formatMonthYear } from "../../utils/api.js";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    getProjects();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Số lượng dự án hiển thị cùng lúc
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

 return (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-xl shadow-lg mb-12"
  >
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Projects</h2>
    {projects.length > 0 ? (
      <Slider {...settings}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {formatMonthYear(project.startDate)} - {formatMonthYear(project.endDate)}
            </p>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.split(",").map((tech, index) => (
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
              href={project.gitHubLink}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </Slider>
    ) : (
      <p className="text-gray-600">No projects available.</p>
    )}
  </motion.div>
  );
};

export default Projects;
