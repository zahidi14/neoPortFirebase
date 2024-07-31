import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { space } from "../../Particle/Night";
import "./project.scss";
import { Card, Cardv3, Head, Loading } from "../../component";
import { Link } from "react-router-dom";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { Button } from "../../component/";
import { db } from "../../firebase";
import { Fetch } from "./Fetch";

const Project = () => {
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fetch, setFetch] = useState([]);
  const [lastVisible, setLastData] = useState(null);
  const [allData, setAlldata] = useState(false);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const limitNumber = 2;
      const result = await Fetch(limitNumber, lastVisible);
      if (result.data.length === 0) {
        setAlldata(true);
      } else {
        setFetch((prevData) => [...prevData, ...result.data]);
        setLastData(result.lastData);
      }
      console.log("res", result);
      console.log("data", data);
      console.log("fetch", fetch);
    } catch {
      console.error("error fetch", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
    console.log({ coook: fetch });
  }, []);

  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log(container);
  }, []);

  return (
    <>
      <section id="project" style={{ backgroundColor: `#050042` }}>
        <div className="container">
          <Head label="Mission Log" />

          <div className="project">
            {isloading && <Loading />}
            {error && <p>Error...</p>}

            {fetch.map((item) => (
              <div key={item.id} className="card-cont">
                <Cardv3
                  title={item.data.title}
                  desc={item.data.desc}
                  language={item.data.langugae}
                  imgurl={item.data.image}
                  link={item.data.link}
                />
              </div>
            ))}
            {!isloading && !error && (
              <button disabled={allData} onClick={load} className="load">
                {allData ? "all data fetched" : "Load More..."}{" "}
              </button>
            )}
          </div>

          <Button label="Send a Signal" link="/contact" />
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
