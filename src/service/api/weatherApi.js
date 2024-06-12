import axios from "axios";
// import getRandomImage from "./getRandomImage";
async function getWeatherByCountry(country) {
  const url = "https://api.weatherapi.com/v1/forecast.json";

  const response = await axios.get(url, {
    params: {
      q: country,
      days: 7,
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });

  // const imageArray = await getRandomImage();

  // const imageUrl = imageArray.images[Math.floor(Math.random() * 10)].url;

  return response.data;
}

export default getWeatherByCountry;
