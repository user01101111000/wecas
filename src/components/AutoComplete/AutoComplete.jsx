import style from "./AutoComplete.module.css";
import autoComplete from "../../service/api/autoComplete";
import SearchItem from "./SearchItem";
import { useEffect, useState } from "react";

export default function AutoComplete({ city }) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    city &&
      autoComplete(city)
        .then((data) => {
          const liBoxes = data.map((item, index) => (
            <SearchItem key={index} {...item} />
          ));

          setCities(liBoxes);
        })
        .catch((err) => {
          console.log(err);
        });
  }, [city]);

  return (
    <>
      {city ? (
        <article className={style.AutoComplete}>
          {cities.length != 0 ? (
            <ul className={style.searchList}>{cities}</ul>
          ) : (
            <h1 className={style.notFoundText}>City not found</h1>
          )}
        </article>
      ) : (
        <></>
      )}
    </>
  );
}
