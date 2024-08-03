import React, { useEffect, useState } from "react";
import { Loading, Cardv3 } from "../index";
import { Fetch } from "./Fetch";
import "./log.scss";

const Log = () => {
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
  return (
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
  );
};

export default Log;
