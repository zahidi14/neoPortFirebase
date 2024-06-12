import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { space } from "../../Particle/Night";
import "./project.scss";
import { Card, Cardv3, Head } from "../../component";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "../../component/";
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
          <Head label="Orbital Journeys" />
          <div className="project">
            {fetch.map((item) => (
              <div key={item.id} className="card-cont">
                <Cardv3
                  // title={item.data.title}
                  // desc={item.data.desc}
                  // language={item.data.langugae}
                  imgurl={item.data.image}
                />
              </div>
            ))}
          </div>
        </div>
        <Button label="Send a Signal" link="/contact" />

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
