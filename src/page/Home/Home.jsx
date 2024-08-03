import React, { useEffect } from "react";
import "./home.scss";

import { Button, Fetch } from "../../component";

const Home = () => {
  useEffect(() => {
    alert("Under Construction !, best view is with mobile");
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <Fetch />
        <Button text="Access Bio-Data" link="/about" />
      </div>
    </section>
  );
};

export default Home;
