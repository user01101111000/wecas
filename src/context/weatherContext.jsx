import { createContext, useContext, useState } from "react";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const [loaded, setLoaded] = useState(false);
  const [showNF, setShowNF] = useState(false);
  const [currentCity, setCurentCity] = useState("Baku");
  const [todayWeather, setTodayWeather] = useState({});
  const [geoLoc, setGeoLoc] = useState({});
  const [weatherHourly, setWeatherHourly] = useState({});

  return (
    <WeatherContext.Provider
      value={{
        currentCity,
        setCurentCity,
        todayWeather,
        setTodayWeather,
        geoLoc,
        setGeoLoc,
        weatherHourly,
        setWeatherHourly,
        loaded,
        setLoaded,
        showNF,
        setShowNF,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider, useContext };
