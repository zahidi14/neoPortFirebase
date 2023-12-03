import React from "react";
import "./home.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { night, suck } from "../../Particle/Night";
import backg from "../../assets/hero.svg?react";

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
      <section id="hero" style={{ backgroundColor: `#050042` }}>
        <div
          className="ont"
          style={{
            background: `url(${backg}) no-repeat center center  fixed`,
          }}
        ></div>
        <div className="contain">
          <h1>Hi ! I'm Zahidi</h1>
          <p>
            I am a front end web developer who specializes in creating beautiful
            and functional websites and applications.
          </p>
          <button>More About Me...</button>
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
