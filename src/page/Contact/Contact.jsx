import React from "react";
import "./contact.scss";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { suck } from "../../Particle/Night";
import { Btn, Button, Frame, Head, Input, TextArea } from "../../component";
import { fastwork, github } from "../../assets";

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

      <div className="container">
        <Head label="Launch Comunication" line="900" />
        <Frame>
          <div className="left">
            <form
              className="form"
              id="form"
              action="https://www.freecodecamp.com/email-submit"
            >
              <Input type="text" placeholder=" " label="Name" />
              <Input type="email" placeholder=" " label="Email" />
              <TextArea type="text" placeholder=" " label="Message" />
              <div className="submit">
                <Button type="submit" label="Launch" />
              </div>
            </form>
          </div>
        </Frame>
        <div className="right">
          <h3>Or trace my cosmic coordinates here</h3>
          <div className="social">
            <Btn label="estarosa " />
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
