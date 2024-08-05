import React from "react";
import "./contact.scss";

import { Button, Frame, Head, Input, TextArea } from "../../component";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
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

        {/* <div className="right">
          <h3>Or trace my cosmic coordinates here</h3>
          <div className="social">
            <Button text="Github" />
            <Button text="X" />
            <Button text="LinkedIn" />

            <Button text="Fiverr" />
            <Button text="Fastwork" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
