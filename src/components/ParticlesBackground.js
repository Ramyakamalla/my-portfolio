import React from "react";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine"; // Correct import from @tsparticles/engine
import '../styless/partcles.css';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    console.log("Particles initialized!");
    await tsParticles.loadFull(main); // Correct method to load particles
   
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.6, random: true },
          size: { value: 4, random: true },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "out",
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Moves particles away when hovering
            },
            onClick: {
              enable: true,
              mode: "push", // Adds more particles when clicked
            },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
