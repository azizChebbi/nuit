import React from "react";
import { motion } from "framer-motion";
import "../style/button.css";

export default function Button(props) {
  const { children, backgroundColor } = props;
  return (
    <motion.button
      whileHover={{ rotate: "20deg" }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="button"
      style={{ backgroundColor, cursor: "pointer" }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
