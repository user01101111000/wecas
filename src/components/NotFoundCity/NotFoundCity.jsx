import style from "./NotFoundCity.module.css";
import cityNF from "../../assets/images/cityNF.webp";
export default function NotFoundCity() {
  return (
    <article className={style.NotFoundCity}>
      <img src={cityNF} alt="" />
      <h1>City Not Found</h1>
    </article>
  );
}
