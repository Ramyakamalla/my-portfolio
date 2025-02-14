import React from 'react';
import { motion } from 'framer-motion';
import '../styless/prograss.css';
import ParticlesBackground from "./ParticlesBackground";

const ProgressBar = ({ progress, label }) => {
  return (
    <div className="progress-bar-container">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="progress-bar"
      >
        <span className="progress-label">{label}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
          className="progress-value"
        >
          {progress}%
        </motion.span>
      </motion.div>
    </div>
  );
};



const ProgressBars = () => {
  return (
    <div className="progress-bars" style={{ paddingTop: '5%'}}>
      <h1 style={{ fontSize: '50px',paddingLeft:"20%", paddingBottom:"1%"  }}>Skills</h1>
      <ProgressBar progress={75} label="HTML/CSS" />
      <ProgressBar progress={60} label="JavaScript" />
      <ProgressBar progress={70} label="React" />
      <ProgressBar progress={75} label="Node.js" />
      <ProgressBar progress={75} label="MongoDB" />
    </div>
  );
};

export default ProgressBars;
