import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="full-page"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2>Reach Out to Me</h2>
      <p>Liked my work? You can write to me.</p>
      <motion.form 
        className="contact-form"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {["name", "email", "message"].map((field, index) => (
          <motion.div 
            key={field} 
            className="form-group"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            {field === "message" ? (
              <textarea id={field} name={field} rows="4" required></textarea>
            ) : (
              <input type={field === "email" ? "email" : "text"} id={field} name={field} required />
            )}
          </motion.div>
        ))}
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send
        </motion.button>
      </motion.form>
    </motion.section>
  );
}

export default Contact;