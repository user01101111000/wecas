import style from "./WeekWeather.module.css";
import TimeBox from "./TimeBox";
import { WeatherContext, useContext } from "../../context/weatherContext";

export default function WeekWeather() {
  const {
    weatherHourly: { forecastday },
  } = useContext(WeatherContext);

  const [current, tomorrow] = forecastday;

  const timeBoxes = Array.from({ length: 8 }, (_, index) => {
    return (
      <TimeBox key={index} current={current} index={index} style={style} />
    );
  });

  return (
    <article className={style.weekWeather}>
      <div className={style.textA}>
        <h1>Today / Hourly</h1>
      </div>

      <div className={style.weeklyA}>
        <div className={style.weeklyAWrapper}>{timeBoxes}</div>

        <div className={style.weeklyAWrapper}>{timeBoxes}</div>
      </div>

      <div className={style.tomorrowA}>
        <figure>
          <img src={tomorrow.day.condition.icon} alt="" />
        </figure>

        <div className={style.tomorrowText}>
          <h1>Tomorrow</h1>
          <p>{tomorrow.day.condition.text}</p>
        </div>

        <h1>{tomorrow.day.avgtemp_c} °C</h1>
      </div>

      <div className={style.infoA}>
        <div className={style.infoBox}>
          <h1>Sunrise</h1>
          <p>{current.astro.sunrise}</p>
        </div>

        <div className={style.infoBox}>
          <h1>Sunset</h1>
          <p>{current.astro.sunset}</p>
        </div>

        <div className={style.infoBox}>
          <h1>Moonrise</h1>
          <p>{current.astro.moonrise}</p>
        </div>
      </div>
    </article>
  );
}
