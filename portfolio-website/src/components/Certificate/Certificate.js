import React, { useEffect, useState} from "react";
import { motion } from "framer-motion";
import { fetchCertificates, formatYear } from "../../utils/api.js";

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  
  useEffect(() => {
    const getCertificates = async () => {
      try {
        const data = await fetchCertificates();
        setCertificates(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    getCertificates();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
       Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((certificate) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="border-l-4 border-green-500 pl-4 py-2"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {certificate.name}
          </h3>
          <p className="text-gray-500">{formatYear(certificate.year)}</p>
        </motion.div>
        ))}
      </div>

    </motion.div>
    
  );
};

export default Certificates;