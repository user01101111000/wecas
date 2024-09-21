import axios from "axios";

async function getWeatherByCountry(country) {
  const url = "https://api.weatherapi.com/v1/forecast.json";
  console.log(country);
  const response = await axios.get(url, {
    params: {
      q: country,
      days: 7,
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });

  const imageUrl = "https://t3.ftcdn.net/jpg/05/79/86/10/360_F_579861052_KjeAAbyaXOBY6JjxMEPBVJypp2KSb59v.jpg";

  return [response.data, imageUrl];
}

export default getWeatherByCountry;
