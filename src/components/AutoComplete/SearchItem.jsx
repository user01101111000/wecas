import style from "./SearchItem.module.css";
import { TbLocationFilled } from "react-icons/tb";
import { WeatherContext, useContext } from "../../context/weatherContext";

export default function SearchItem({ name, country, url }) {
  const { setCurentCity } = useContext(WeatherContext);

  return (
    <li className={style.listItem} onClick={() => setCurentCity(url)}>
      <TbLocationFilled className={style.itemIcon} />
      <div className={style.itemText}>
        <h1>{name}</h1>
        <p>{country}</p>
      </div>
    </li>
  );
}
