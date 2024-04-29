import React from "react";
import "./contact.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { suck } from "../../Particle/Night";
import { Button, Head } from "../../component";
import { fastwork, github, lindin, x, fishit } from "../../assets";
const Contact = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <section id="contact" style={{ backgroundColor: `#000002` }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={suck}
      />

      <Head
        label="Portfolio Highlights"
        line="900"
      />

      <div className="container">
        <div className="left">
          <h3>Launch Communication</h3>
          <form
            className="form"
            id="form"
            action="https://www.freecodecamp.com/email-submit"
          >
            <div className="input-box">
              <input
                type="text"
                className="text-input"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                className="text-input"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="input-box">
              <input
                type="subject"
                className="text-input"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="input-box">
              <textarea
                name="text"
                className="message"
                placeholder="Message..."
              ></textarea>
            </div>
            <div className="submit">
              <Button type="submit" label="Launch" />
            </div>
          </form>
        </div>
        <div className="right">
          <h3>Or trace my cosmic coordinates here</h3>
          <div className="social">
            <Button label="Github" icon={github} />
            <Button label="X" icon={x} />
            <Button label="LinkedIn" icon={lindin} />

            <Button label="Fiverr" icon={fishit} />
            <Button label="Fastwork" icon={fastwork} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
