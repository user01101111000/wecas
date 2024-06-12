import style from "./TodayWetaher.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { FaTemperatureFull } from "react-icons/fa6";
import { TbUvIndex } from "react-icons/tb";
import { getCurrentDay, getCurrentMonth } from "../../utils/getTime";

import { WeatherContext, useContext } from "../../context/weatherContext";

export default function TodayWetaher() {
  const {
    todayWeather: { country, name, localtime, current, lat, lon, imageUrl },
  } = useContext(WeatherContext);

  const locationLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  const dateObj = new Date(localtime);

  const [date, month, year, day] = [
    dateObj.getDate(),
    getCurrentMonth(dateObj.getMonth()),
    dateObj.getFullYear(),
    getCurrentDay(dateObj.getDay()),
  ];

  return (
    <article className={style.todayWetaher}>
      <img className={style.imgWrapper} src={imageUrl} />

      <a className={style.cityLabel} href={locationLink} target="_blank">
        <FaLocationDot className={style.icon} />

        <h1>{name + ", " + country}</h1>
      </a>

      <div className={style.mainArea}>
        <div className={style.wrapperHelper}>
          <div className={style.mainAreaDate}>
            <h1>{day}</h1>
            <p>
              {date} {month} {year}
            </p>
          </div>
          <div className={style.mainAreaWInfo}>
            <h1>{current.temp_c} °C</h1>
          </div>
        </div>

        <div className={style.wrapperHelper2}>
          <figure>
            <img src={current.condition.icon} alt="" />
          </figure>

          <div className={style.mainAreaWInfo2}>
            <h1>{current.condition.text}</h1>
          </div>
        </div>
      </div>

      <div className={style.weatherInfos}>
        <div className={style.iconA}>
          <WiHumidity className={style.iconAE} />
          <p> Humidity : {current.humidity} %</p>
        </div>

        <div className={style.iconA}>
          <FiWind className={style.iconAE} />
          <p> Wind : {current.wind_kph} km/h</p>
        </div>

        <div className={style.iconA}>
          <TbUvIndex className={style.iconAE} />
          <p> UV Index : {current.uv}</p>
        </div>

        <div className={style.iconA}>
          <FaTemperatureFull className={style.iconAE} />
          <p> Feels Like : {current.feelslike_c} °C</p>
        </div>
      </div>
    </article>
  );
}
