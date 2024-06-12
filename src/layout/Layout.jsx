import MainLayout from "./MainLayout";
import Loading from "../components/Loading/Loading";
import "../styles/Layout.css";
import NotFoundCity from "../components/NotFoundCity/NotFoundCity";

import getWeatherByCountry from "../service/api/weatherApi";
import { useEffect } from "react";
import { WeatherContext, useContext } from "../context/weatherContext";

export default function Layout() {
  const {
    currentCity,
    setTodayWeather,
    setGeoLoc,
    setWeatherHourly,
    loaded,
    setLoaded,
    showNF,
    setShowNF,
  } = useContext(WeatherContext);

  useEffect(() => {
    setLoaded(false);
    getWeatherByCountry(currentCity)
      .then((data) => {
        const {
          current,
          forecast: { forecastday },
          location: { country, name, localtime, lat, lon },
        } = data;

        setTodayWeather({
          country,
          name,
          localtime,
          current,
          lat,
          lon,
        });
        setGeoLoc({ lat, lon, name });
        setWeatherHourly({ forecastday });
      })
      .catch(() => {
        setShowNF(true);

        setTimeout(() => {
          setShowNF(false);
        }, 1000);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, [currentCity]);

  return (
    <>
      {loaded ? (
        <main className="Layout">
          <MainLayout />
          {showNF ? <NotFoundCity /> : <></>}
        </main>
      ) : (
        <Loading />
      )}
    </>
  );
}
