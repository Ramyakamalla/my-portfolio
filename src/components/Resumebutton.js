import React from "react";
import { motion } from "framer-motion";
import "../styless/resume.css"; // Make sure you create this CSS file

const ResumeButton = () => {
  const resumeUrl = "/RamyaResumeNew.pdf"; // Ensure the file is inside the `public/` folder

  return (
    <motion.a
    href={resumeUrl}
    download
    className="resume-button"
    whileHover={{ scale: 1.15, rotate: 3 }}
    whileTap={{ scale: 0.85 }}
  >
    <motion.div
      className="button-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
        <span className="resume-icon">📄</span>Resume
      </motion.div>
    </motion.a>
  );
};

export default ResumeButton;
