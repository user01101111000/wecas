import axios from "axios";

async function getCurrentCity(lat, lon) {
  const url = "https://api.bigdatacloud.net/data/reverse-geocode-client";
  const params = {
    latitude: lat,
    longitude: lon,
    localityLanguage: "en",
  };

  const { city } = (await axios.get(url, { params })).data;

  return city;
}

export default getCurrentCity;
