import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import '../styless/links.css';
import ResumeButton from './Resumebutton.js';


const SocialMediaIcon = ({ location, icon, email, href }) => {
  const handleClick = () => {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else if (href) {
      window.open(href, '_blank');
    } else if (location) {
      const url = `https://www.google.com/maps/dir/16.5481699,80.6437899/@${location.latitude},${location.longitude},13z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu`;
      window.open(url, '_blank');
    }
  };

  return (
    <motion.a
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 1, boxShadow: '0 0 0 rgba(0, 0, 0, 0.2)' }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="social-media-icon" /* Apply the CSS class */
    >
      {icon}
    </motion.a>
  );
};

const SocialMediaLinks = () => {
  
  return (
    <div className="social-media-container">
      <SocialMediaIcon
        email="ramyakamalla1@gmail.com"
        icon={<BiLogoGmail size={40} color="#BB001B" />} // Gmail color
      />
      <SocialMediaIcon
        href="https://www.linkedin.com/in/ramya-kamalla-227238248"
        icon={<FaLinkedin size={40} color="#0A66C2" />} // LinkedIn color
      />
      <SocialMediaIcon
        href="https://github.com/RamyaKamalla"
        icon={<FaGithub size={40} color="#333" />} // GitHub color
      />
      <SocialMediaIcon
        href="https://www.instagram.com"
        icon={<FaInstagram size={40} color="#E1306C" />} // Instagram color
      />
      <SocialMediaIcon
        location={{ latitude: 37.7749, longitude: -122.4194 }}
        icon={<FaMapMarkerAlt size={40} color="#003cff" />} // Map marker color
      />
    </div>
    
  );
};

export default SocialMediaLinks;
