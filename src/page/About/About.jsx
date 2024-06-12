import React, { useEffect, useState } from "react";
import { night, space, suck } from "../../Particle/Night";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import bac from "../../assets/about.svg?react";
import { Bar, BtnNav, Button, Frame, Head, MainBg } from "../../component";
import "./about.scss";
import Bout from "../../assets/s.png";

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
        <div className="mobile">
          <Frame>
            <p>
              Welcome! I'm Zahidi, a freelance web developer with a passion for
              crafting impactful digital experiences. With 15+ projects
              completed and a 4.8/5 client satisfaction rating, I'm dedicated to
              exceeding expectations. Let's collaborate and create something
              extraordinary together.
            </p>

            <Button label="Explore  Resume" />
          </Frame>
         
        </div>
        <div className="desktop">
          <Frame>
            <div className="about">
              <div className="left">
                <p>
                  Welcome! I'm Zahidi, a freelance web developer with a passion
                  for crafting impactful digital experiences. With 15+ projects
                  completed and a 4.8/5 client satisfaction rating, I'm
                  dedicated to exceeding expectations. Let's collaborate and
                  create something extraordinary together.
                </p>

                <Button label="Explore  Resume" />
              </div>

              <div className="right">
                <div className="img">
                  <img src={Bout} alt="" />
                </div>
                <div className="progressContainer">
                  <Bar />
                </div>
              </div>
            </div>
          </Frame>
        </div>
        <div className="but">
        <Button label="Mission Log" link="/project" />
        </div>
      </div>
    </section>
  );
};

export default About;
