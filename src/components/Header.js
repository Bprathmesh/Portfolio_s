import React from "react";
import { motion } from "framer-motion";
import "./Header.css";

function Header() {
  return (
    <motion.header 
      className="header"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav>
        <ul>
          {["Home", "Projects", "About", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;