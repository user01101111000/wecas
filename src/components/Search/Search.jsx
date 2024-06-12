import { useState } from "react";
import style from "./Search.module.css";
import { CiSearch } from "react-icons/ci";
import inputFormatter from "../../utils/inputFormatter";
import { WeatherContext, useContext } from "../../context/weatherContext";
import AutoComplete from "../AutoComplete/AutoComplete";

export default function Search() {
  const { setCurentCity } = useContext(WeatherContext);

  const [city, setCity] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formattenCity = inputFormatter(city);

    formattenCity && setCurentCity(formattenCity);

    setCity("");
  }

  return (
    <form className={style.search} onSubmit={handleSubmit}>
      <CiSearch className={style.icon} />

      <input
        type="search"
        placeholder="Search city"
        className={style.searchInp}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <AutoComplete city={city} />
    </form>
  );
}
