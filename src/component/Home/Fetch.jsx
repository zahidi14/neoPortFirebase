import axios from "axios";
import React, { useEffect, useState } from "react";
import Svg from "./Svg";

const Fetch = () => {
  const [lat, setLat] = useState("-8.558734");
  const [lon, setLon] = useState("116.630504");
  const [weather, setWeather] = useState({});
  const [cond, setCond] = useState([]);
  const [currentDate, setDate] = useState("");
  const [day, setDays] = useState("");
  const apikey = "07b4693fcb929c28e8575bea37c73edf";

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error("err", error);
        }
      );
    } else {
      console.log("doesn't support location");
    }

    fetchWeather();
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
    setDate(formattedDate);

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setDays(days[date.getDay()]);
    console.log("date", currentDate);
    console.log("day", day);
  }, []);

  useEffect(() => {
    fetchWeather();
    console.log("lat", lat);
  }, [lat, lon]);

  const fetchWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`
      )
      .then((res) => {
        setWeather(res.data);
        setCond(res.data.weather);
        console.log("weather", res.data);
        console.log("weat", res.data.weather);
      })
      .catch((err) => console.log(err));
  };

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  return (
    <>
      {weather.main && weather.coord && (
        <Svg
          temp={kelvinToCelsius(weather.main.temp).toFixed(0)}
          loc={weather.name}
          weather={cond.map((item) => item.description).join(", ")}
          humidity={weather.main.humidity}
          latlon={weather.coord.lat + "," + weather.coord.lon}
          day={day}
          date={currentDate}
        />
      )}
    </>
  );
};

export default Fetch;
