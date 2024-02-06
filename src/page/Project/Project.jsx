import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { space } from "../../Particle/Night";
import "./project.scss";
import { Card, Head } from "../../component";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../firebase";

const Project = () => {
  const [fetch, setData] = useState([]);

  useEffect(() => {
    cokk();
  }, []);
  console.log({ coook: fetch });
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  const cokk = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "port"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        newData.push({ id: doc.id, data: doc.data() });
      });
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section id="project" style={{ backgroundColor: `#050042` }}>
        <div className="container">
          <Head
            label="Web Galaxies Explored: A Portfolio of Digital Conquests"
            line="800"
          />
          <div className="project">
            {fetch.map((item) => (
              <div key={item.id} className="card-cont">
                <Card
                  title={item.data.title}
                  desc={item.data.desc}
                  language={item.data.langugae}
                  imgurl={item.data.image}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="next">
          <Link to="/contact">Let's Connect Across the Cosmos </Link>
        </div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={space}
        />
      </section>
    </>
  );
};

export default Project;
