import axios from "axios";

async function autoComplete(city) {
  const url = "https://api.weatherapi.com/v1/search.json";

  const response = await axios.get(url, {
    params: {
      q: city,
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });

  return response.data;
}

export default autoComplete;
