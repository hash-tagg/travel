import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ image, title }) => {
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    hover: {
      scale: 1.1,
      transition: {
        yoyo: Infinity,
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-4"
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      transition={{ duration: 1 }}
    >
      <img className="w-full h-48 object-cover rounded-t-lg mb-2" src={image} alt={title} />
      <h3 className="text-xl font-bold">{title}</h3>
    </motion.div>
  );
};

export default DestinationCard;
