export default function TimeBox({ current, index, style }) {
  return (
    <div className={style.weatherBox}>
      <h1>{current.hour[index * 3].time.slice(11, 16)}</h1>
      <figure>
        <img src={current.hour[index * 3].condition.icon} alt="" />
      </figure>
      <h1>{current.hour[index * 3].temp_c} °C</h1>
    </div>
  );
}
