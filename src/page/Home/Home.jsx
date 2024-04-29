import React from "react";
import "./home.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { night, space, suck } from "../../Particle/Night";
import backg from "../../assets/hero.svg?react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { BtnNav, Text } from "../../component";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <>
      <section id="hero" style={{ backgroundColor: `#000` }}>
        <div className="contain">
          <h1 className="mb">Hey there! I'm Zahidi</h1>

          <p className="mb">
            Versatile web developer specializing in front-end magic with skills
            spanning the MERN stack, Firebase, Next.js, and WordPress. From
            crafting captivating interfaces to building robust full-stack
            solutions, I blend creativity with technical prowess to deliver
            seamless digital experiences. Join me on a journey of innovation and
            excellence. Welcome to my portfolio.
          </p>

          <BtnNav label="Dive into My Journey" link="/about" />
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={suck}
        />
      </section>
    </>
  );
};

export default Home;
