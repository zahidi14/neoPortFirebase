import React, { useEffect, useState } from "react";
import { night, space, suck } from "../../Particle/Night";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import bac from "../../assets/about.svg?react";
import {
  Bar,
  Button,
  ButtonV3,
  Frame,
  Head,
  MainBg,
  Profile,
} from "../../component";
import "./about.scss";

import Bout from "../../assets/s.png";
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
        className="back"
        style={{
          background: `url(${bac}) no-repeat center center fixed`,
        }}
      ></div>

      <div className="container mp">
        <Head label="Behind the Scenes" />
        <Profile />

        <div>
          <Link to="/project">
            <ButtonV3 text="Mission Log" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
