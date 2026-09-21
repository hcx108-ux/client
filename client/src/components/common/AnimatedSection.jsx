import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, fadeOnly = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: fadeOnly ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.7, delay: delay, ease: 'easeOut' }}
      style={{ 
        willChange: 'opacity, transform',
        WebkitTransform: 'translateZ(0)' // Force hardware acceleration
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
