import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        background: `blue no-repeat center center fixed`,
        backgroundSize: "cover",
      }}
    >
      <div className="header">
        <h1>Contact</h1>
      </div>
      <div className="container">
        <div className="left">
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
            <div className="input-box">
              <input
                type="submit"
                className="submit-btn"
                id="submit"
                value="submit"
              />
            </div>
          </form>
        </div>
        <div className="right">
          <div className="social"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
