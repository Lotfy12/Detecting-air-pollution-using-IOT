import { getFormattedWeatherData } from "../components/WeatherServices";
import { useEffect, useState } from "react";
import styles from "../App.module.css";
import Descriptions from "./Descriptions";
import bg1 from "../../public/img/bac1.jpg";
import bg2 from "../../public/img/bac2.jpg";
import bg3 from "../../public/img/bac3.jpg";
import bg4 from "../../public/img/bac4.jpg";

function WeatherAPI() {
  const [city, setCity] = useState("england");
  const [weather, setWeather] = useState(null);
  const [bg, setBg] = useState(bg2);

  const fetchWeatherData = async (city) => {
    try {
      const data = await getFormattedWeatherData(city);
      setWeather(data);

      const winter = "°C" ? -10 : 9;
      const fall = "°C" ? 10 : 15;
      const spring = "°C" ? 16 : 20;
      const summer = "°C" ? 21 : 95;

      if (data.temp >= summer) setBg(bg4);
      else if (data.temp >= spring) setBg(bg2);
      else if (data.temp >= winter) setBg(bg1);
      else if (data.temp >= fall) setBg(bg3);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <body className={styles.app} style={{ backgroundImage: `url(${bg})` }}>
      <div className={`${styles.overlay} ${styles.moveElements}`}>
        {weather && (
          <div className={styles.container}>
            <div className={styles.section_inputs}>
              <input
                name="city"
                type="text"
                placeholder="Enter Your City..."
                onKeyDown={enterKeyPressed}
              />
              <h2>City's Temperature</h2>
            </div>

            <div className={styles.section_temperature}>
              <div className={styles.icon}>
                <h3>{`${weather.name}, ${weather.country}`}</h3>
                <img src={weather.iconURL} alt="weatherIcon" />
                <h3>{weather.description}</h3>
              </div>
              <div className={styles.temperature}>
                <h1>{`${weather.temp.toFixed()}°C`}</h1>
              </div>
            </div>

            <Descriptions weather={weather} />
          </div>
        )}
      </div>
    </body>
  );
}

export default WeatherAPI;
