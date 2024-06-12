import axios from "axios";

const images = [
  {
    id: 1,
    url: "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl9c2yc4k3928u5ofry5q6d8o/public",
  },

  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2017/03/27/16/50/beach-2179624_640.jpg",
  },

  {
    id: 3,
    url: "https://cdn.wallpapersafari.com/70/26/dE2wGK.jpg",
  },

  {
    id: 4,
    url: "https://images.hdqwalls.com/download/nature-sunset-ocean-lying-sun-4k-gc-1920x1080.jpg",
  },

  {
    id: 5,
    url: "https://www.bhmpics.com/downloads/bromo-Wallpapers/1.thumb-1920-600157.jpg",
  },

  {
    id: 6,
    url: "https://cdn.pixabay.com/photo/2018/09/19/23/03/sunset-3689760_640.jpg",
  },

  {
    id: 7,
    url: "https://images.hdqwalls.com/wallpapers/sunset-lake-5k-rw.jpg",
  },

  {
    id: 8,
    url: "https://w0.peakpx.com/wallpaper/160/922/HD-wallpaper-beautiful-sunset-sunset-nature.jpg",
  },

  {
    id: 9,
    url: "https://wallpapers.com/images/featured/beach-sunset-bwvid0licus1pjda.jpg",
  },

  {
    id: 10,
    url: "https://gtwallpaper.org/sites/default/files/wallpaper/240042/sunset-photography-hd-wallpapers-240042-2315011-6056643.png",
  },
];

async function getWeatherByCountry(country) {
  const url = "https://api.weatherapi.com/v1/forecast.json";

  const response = await axios.get(url, {
    params: {
      q: country,
      days: 7,
      key: import.meta.env.VITE_WEATHER_API_KEY,
    },
  });

  const imageUrl = images[Math.floor(Math.random() * 10)].url;

  return [response.data, imageUrl];
}

export default getWeatherByCountry;
