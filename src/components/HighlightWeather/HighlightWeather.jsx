import style from "./HighlightWeather.module.css";
import WeatherBox from "./WeatherBox";
import { WeatherContext, useContext } from "../../context/weatherContext";
import maskot from "../../assets/images/maskot.gif";
import weeklyBG from "../../assets/images/weeklyBG.jpg";
export default function HighlightWeather() {
  const {
    weatherHourly: { forecastday },
  } = useContext(WeatherContext);

  const weatherBoxes = forecastday.map((data, index) => (
    <WeatherBox key={index} index={index} data={data} style={style} />
  ));

  return (
    <article className={style.highlightWeather}>
      <img src={maskot} alt="" className={style.maskot} />
      <img src={weeklyBG} alt="" className={style.imgWrapper} />
      <h1>Weekly (Average temperatures)</h1>

      <div className={style.boxArea}>{weatherBoxes}</div>
    </article>
  );
}
