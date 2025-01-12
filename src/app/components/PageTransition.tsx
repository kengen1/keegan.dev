'use client';

import { motion } from 'framer-motion';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slightly below the viewport
      animate={{ opacity: 1, y: 0 }} // Animate to opacity 1 and its original position
      exit={{ opacity: 0, y: 50 }} // Slide down on exit
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
