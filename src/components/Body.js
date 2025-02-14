import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, Row, Col,  Button, Dropdown } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import '../App.css';  
import ProgressBars from './Progress.js';
import Contact from './Contact';
import '../styless/body.css';
import wave2 from '../certifications/wave2.svg';


// Import your assets
import paytmvideo from '../videos/paytmvideo.mp4';
import ecommerce from '../videos/ecommerce.mp4';
import sampleproject from '../videos/sampleproject.mp4';
import studymate from '../videos/studymate.mp4';
import webcourse from '../certifications/webcourse.jpg';
import Inter_on_mern from '../certifications/inter_on_mern.pdf';
import Rprog from '../certifications/Rprog.pdf';
import python from '../certifications/python.pdf';
import cprogramming from '../certifications/cprogramming.pdf';
import Cpptraining from '../certifications/Cpptraining.pdf';
import DEVOPSfoundation from '../certifications/DEVOPSfoundation.pdf';
import JAVAdeveloper from '../certifications/JAVAdeveloper.pdf';
import AIintern from '../certifications/AIintern.pdf'
import ResumeButton from './Resumebutton.js';
import ParticlesBackground from "./ParticlesBackground"; 

const Body = () => {
  return (
    <Container fluid>
      <Routes>
        <Route path="/home" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/interns" element={<InternsSection />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
    </Container>
  );
};



 



const HomeSection = () => {
  return (
   <div className='body'>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      > <div className='align'>
          <h1>Welcome to my Portfolio</h1>
          <h2>I am</h2>
          <h1>RAMYA KAMALLA</h1>
          <h2>Web Developer</h2>
          <span>HELLO..!</span>
          <h5>This is Ramya, from Vijayawada.</h5>
          <h4>How are you guys..?</h4>
          <h5>I'm great, hope you guys are doing well..</h5>
          <h4>And nice to meet you...😊</h4>
          
          { <img src={wave2}alt="Background Wave" className="wave-background" /> }
        </div>
        
      </motion.div>
      <ResumeButton />
      
    </div>

  );
  
  
};


const AboutSection = () => {
  return (
    <div className="about-container">
      <ParticlesBackground /> {/* Add interactive background effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ paddingLeft: "20%", paddingBottom: "2%", paddingTop: "5%" }}>
          Certifications
        </h1>
        <Dropdown>
          <span style={{ paddingLeft: "20%" }}>
            <Dropdown.Toggle className="dropdown-basic" style={{ padding: "20px 20px", fontSize: "20px" }}>
              Click for certifications
            </Dropdown.Toggle>
          </span>
          <Dropdown.Menu>
            {[cprogramming, Cpptraining, JAVAdeveloper, DEVOPSfoundation, python, Rprog].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Dropdown.Item href={item}>{item.split('/').pop().split('.')[0]}</Dropdown.Item>
              </motion.div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <ProgressBars /> {/* Skills progress bars */}
      </motion.div>
    </div>
  );
};






const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Paytm",
      videoUrl: paytmvideo,
      description: "This frontend project of Paytm uses frontend technologies.",
    },
    {
      title: "StudyMate",
      videoUrl: studymate,
      description: "This frontend project of StudyMate uses frontend technologies.",
    },
    {
      title: "Ecommerce",
      videoUrl: ecommerce,
      description: "This frontend project of Ecommerce uses frontend technologies.",
    },
    {
      title: "Sample Project",
      videoUrl: sampleproject,
      description: "This is a sample project about a MERN Stack project.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleSelectProject = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="projects-section"
    >
      <h2 className="section-title">Click for the Project Details</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`project-container ${selectedProject === index ? "expanded" : ""}`}
            onClick={() => handleSelectProject(index)}
          >
            <h2 className="project-title">{project.title}</h2>
            <div className="video-wrapper">
              {selectedProject === index ? (
                <ReactPlayer
                  url={project.videoUrl}
                  controls
                  width="100%"
                  height="100%"
                  className="react-player"
                />
              ) : null}
              <span className="hover-text">
                <p>{project.description}</p>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};




const InternsSection = () => {
  const internships = [
    { title: 'MERN Stack', description: 'I completed my intern on MERN stack at Codegnan IT Solutions', link: Inter_on_mern },
    { title: 'Artificial Intelligence', description: 'Done my Intern on AI at Internship Studio', link: AIintern },
    { title: 'Web Development', description: 'I completed my course on Web Development by SkillForge IT Solutions', link: webcourse },
    
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
    <Container className="interns-container">
      <Row>
        <Col xs={12}>
          <h2 className="text-left">Internships</h2>
        </Col>
      </Row>
      <Row className="interns-top">
        {internships.slice(0, 2).map((internship, index) => (
          <Col key={index} md={6} className="mb-3">
            <div className="internship-card">
              <h3>{internship.title}</h3>
              <p>{internship.description}</p>
              <Button
                href={internship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-button"
                
              >
                View Certification
              </Button>
            </div>
          </Col>
        ))}
      </Row>
      <Row className="interns-bottom">
        <Col xs={12}>
          <h2 className="text-left">Courses</h2>
        </Col>
        <Col xs={12}>
          <div className="internship-card">
            <h3>{internships[2].title}</h3>
            <p>{internships[2].description}</p>
            <Button
              href={internships[2].link}
              target="_blank"
              rel="noopener noreferrer"
              className="certification-button"
            >
              View Certification
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    </motion.div>
  );
};



export default Body;
