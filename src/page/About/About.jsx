import React, { useEffect, useState } from "react";
import { night, space, suck } from "../../Particle/Night";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import bac from "../../assets/about.svg?react";
import { Bar, Button, Head } from "../../component";
import "./about.scss";
import { Link } from "react-router-dom";

const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <section id="about" style={{ backgroundColor: `#050042` }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={space}
      />
      <div
        className="bg"
        style={{
          background: `url(${bac}) no-repeat center center fixed`,
        }}
      ></div>
      <div className="container mp">
        <Head label="Unveiling the Cosmic Chronicles of Zahidi" />
        <div className="about ">
          <div className="flex-base">
            <p>
              Embarking on a cosmic voyage as a results-driven freelance web
              developer, I boast a stellar track record of delivering impactful
              digital solutions. Navigating the vast expanse of creativity and
              code, I've successfully completed 15+ projects, earning an average
              client satisfaction rating of 4.8/5. My toolkit includes the
              proficiency of HTML, CSS, and JavaScript, and I wield the power of
              the MERN stack to create robust web applications that shine like
              distant stars in the digital galaxy.
            </p>
            <div className="progressContainer">
              <Bar />
            </div>
            <Button
              label="Explore My Stellar Resume"
              style={{ paddingLeft: "0", textAlign: "center" }}
              className="mh"
            />
          </div>
          <div className="flex-base">
            <img src="" alt="" />
          </div>
        </div>
        <div className="next">
          <Link to="/project">Explore My Digital Constellations</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
