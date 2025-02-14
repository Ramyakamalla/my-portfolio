
import React from 'react';
import { FaHome, FaFile, FaPhone, FaInfoCircle,FaCertificate, FaUser } from 'react-icons/fa';
import  { Link} from 'react-router-dom';
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlinePersonPin } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { BiMessageRoundedEdit } from "react-icons/bi";
import { TbInfoSquareRounded } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import Tab,{ Tabs } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {motion} from "framer-motion"
import '../styless/navbar.css';
import './Resumebutton.js'

const Navbar = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <motion.div
        className="side-nav-bar"
        style={{ width: '6%', paddingTop: '12%' }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul>
          <li>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to="/home">
                <motion.i
                  initial={{ scale: 1, color: "#333" }}
                  whileHover={{ scale: 1.2, color: "#888" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <i className="icon" aria-hidden="true">
                  <BiHomeHeart size={50} color='#939cef' />
                  </i>
                </motion.i>
                <span style={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '5px', fontFamily: 'serif' }}></span>
              </Link>
            </motion.span>
          </li>
          <li>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to="/about">
                <motion.i
                  initial={{ scale: 1, color: "#333" }}
                  whileHover={{ scale: 1.2, color: "#888" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <MdOutlinePersonPin size={50} color='#939cef'  />
                </motion.i>
                <span style={{ fontSize: '20px', fontWeight: 'bold', paddingLeft: '5px', fontFamily: 'serif' }}></span>
              </Link>
            </motion.span>
          </li>
          <li>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to="/projects">
                <motion.i
                  initial={{ scale: 1, color: "#333" }}
                  whileHover={{ scale: 1.2, color: "#888" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <FaLaptopCode size={50} color='#939cef'/>
                </motion.i>
                
              </Link>
            </motion.span>
          </li>
          <li>
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to="/interns">
                <motion.i
                  initial={{ scale: 1, color: "#333" }}
                  whileHover={{ scale: 1.2, color: "#888" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <TbInfoSquareRounded size={50} color='#939cef' />
                </motion.i>
                
              </Link>
            </motion.span>
          </li>
          
          <li>
          <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link to="/contacts">
              <motion.i
              initial={{ scale: 1, color: "#333" }}
              whileHover={{ scale: 1.2, color: "#888" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
                <BiMessageRoundedEdit size={50} color='#939cef' />
                  </motion.i>
                
              </Link>
            </motion.span>
          </li>
        </ul>
        
      </motion.div>
    </AnimatePresence>
  );
  
  

};

export default Navbar;