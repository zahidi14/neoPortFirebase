import React from "react";
import "./home.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { night, space, suck } from "../../Particle/Night";
import backg from "../../assets/hero.svg?react";
import { Link } from "react-router-dom";
import Typist from "react-typist";
import { Text } from "../../component";

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
          <Typist
            avgTypingDelay={50}
            showCursor={true}
            cursor={{
              show: true,
              blink: true,
              element: "@",
              hideWhenDone: true,
              hideWhenDoneDelay: 1000,
            }}
          >
            <h1 className="mb">Hey there! I'm Zahidi</h1>
          </Typist>
          <p className="mb">
            A freelance web developer navigating the vast cosmos of design and
            code. Specializing in front-end finesse and MERN stack prowess, I'm
            on a mission to transform your digital aspirations into beautifully
            crafted, user-centric experiences. Join me on this intergalactic
            journey to web excellence!
          </p>

          <Link to="/about"> Discover My Galactic Story </Link>
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
