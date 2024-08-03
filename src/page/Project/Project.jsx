import React from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { space } from "../../Particle/Night";
import "./project.scss";
import { Head, Log, Button } from "../../component";

const Project = () => {
  return (
    <section id="project">
      <div className="container">
        <Log />

        <Button text="Send a Signal" link="/contact" />
      </div>
    </section>
  );
};

export default Project;
