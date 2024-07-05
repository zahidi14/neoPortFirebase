import React, { useEffect } from "react";
import "./home.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { night, space, suck } from "../../Particle/Night";
import backg from "../../assets/hero.svg?react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { Button, Frame, Text, Head } from "../../component";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  useEffect(() => {
    alert("Under Construction !, best view is with mobile");
  }, []);

  return (
    <>
      <section id="hero" style={{ backgroundColor: `#000` }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={suck}
        />
        <div className="back"></div>
        <div className="cont mp">
          <h1>Hi! I'm Zahidi</h1>
          <div className="mobile">
            <Frame>
              <p>
                Versatile web developer specializing in front-end magic with
                skills spanning the MERN stack, Firebase, Next.js, and
                WordPress. From crafting captivating interfaces to building
                robust full-stack solutions, I blend creativity with technical
                prowess to deliver seamless digital experiences. Join me on a
                journey of innovation and excellence. Welcome to my portfolio.
              </p>
            </Frame>
            <Button label="Dive into My Journey" link="/about" />
          </div>
          <div className="desktop">
            <Frame>
              <p>
                Versatile web developer specializing in front-end magic with
                skills spanning the MERN stack, Firebase, Next.js, and
                WordPress. From crafting captivating interfaces to building
                robust full-stack solutions, I blend creativity with technical
                prowess to deliver seamless digital experiences. Join me on a
                journey of innovation and excellence. Welcome to my portfolio.
              </p>
            </Frame>
            <Button label="Dive into My Journey" link="/about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
