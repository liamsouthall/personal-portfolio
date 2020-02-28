import React from "react";
import "../style/Projects.css";
import Iframe from "react-iframe";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <a href="https://liamsouthall.github.io/calculator/">Calculator</a>
      <a href="https://liamsouthall.github.io/DiceGame/">Dice Game</a>
      <a href="https://liamsouthall.github.io/KeyCode/">KeyCode</a>
      <a href="https://liamsouthall.github.io/card-game-challenge/">
        Card Flip game React Challenge
      </a>
      <ProjectModal ProjectUrl="https://liamsouthall.github.io/coffee-react-challenge/" />
    </div>
  );
};

export default Projects;
