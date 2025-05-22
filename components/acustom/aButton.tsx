'use client';

import { motion } from "framer-motion";

const AButton = () => {
  return (
    <motion.button 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      className="relative overflow-hidden px-2 py-2 rounded-2xl text-white font-semibold "
    >
      <span className="absolute inset-0 animate-gradient bg-[length:100%_100%] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
      <span className="relative z-10">Click Me</span>
    </motion.button>
  );
}
 
export default AButton;
