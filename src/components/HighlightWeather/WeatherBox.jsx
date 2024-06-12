import { getCurrentDay } from "../../utils/getTime";
export default function WeatherBox({ data, index, style }) {
  return (
    <div className={style.box}>
      <h1>{index ? getCurrentDay(new Date(data.date).getDay()) : "Today"}</h1>
      <figure>
        <img src={data.day.condition.icon} alt="" />
      </figure>
      <h1>{data.day.avgtemp_c} °C</h1>
    </div>
  );
}
