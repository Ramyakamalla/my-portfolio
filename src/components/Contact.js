import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import axios from 'axios';
import '../styless/contact.css';
import { motion } from 'framer-motion';
import ResumeButton from './Resumebutton.js';
import API_BASE_URL from "../config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const formAnimation = useSpring({
    opacity: submitted ? 0 : 1,
    transform: submitted ? 'translateY(-20px)' : 'translateY(0)',
    config: { duration: 500 }
  });

  const thankYouAnimation = useSpring({
    opacity: submitted ? 1 : 0,
    transform: submitted ? 'translateY(0)' : 'translateY(20px)',
    config: { duration: 500 }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, { name, email, message });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="projects-section"
    >
      <div className="contact-form-container">
        {submitted ? (
          <animated.div style={thankYouAnimation}>
            <div className="thank-you-message">Thank you for your Time!😊</div>
          </animated.div>
        ) : (
          <animated.div style={formAnimation}>
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>Get in touch!</h2>
              <label>
                Name:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              </label>
              <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </label>
              <label>
                Message:
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
              </label>
              <button type="submit">Send Message</button>
            </form>
          </animated.div>
        )}
      </div>
      <br />
      <ResumeButton />
    </motion.div>
  );
};

export default Contact;
