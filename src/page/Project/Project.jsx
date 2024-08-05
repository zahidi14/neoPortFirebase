import React from "react";

import "./project.scss";
import { Log, Button } from "../../component";

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
