import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import style from "./MapWeather.module.css";
import { Icon } from "leaflet";

import { WeatherContext, useContext } from "../../context/weatherContext";

export default function MapWeather() {
  const {
    geoLoc: { lat, lon, name },
  } = useContext(WeatherContext);

  const center = [lat, lon];

  const icon = new Icon({
    iconUrl:
      "https://www.iconpacks.net/icons/2/free-location-icon-2955-thumb.png",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      className={style.mapWeather}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={icon}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  );
}
