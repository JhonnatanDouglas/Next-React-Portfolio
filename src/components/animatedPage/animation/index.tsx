"use client";

import { iChildrenProps } from "@/interfaces/standartInterfaces";
import { motion } from "framer-motion";

const AnimationMode = ({ children }: iChildrenProps) => {
  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationMode;
