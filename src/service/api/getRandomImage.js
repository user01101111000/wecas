import axios from "axios";

async function getRandomImage() {
  const url = "src/service/json/images.json";

  const response = await axios.get(url);

  return response.data;
}

export default getRandomImage;
