import { Button, Head, Nav, Profile } from "../../component";
import "./about.scss";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <Profile />
        <Button text="Mission Log" link="/project" />
      </div>
    </section>
  );
};

export default About;
