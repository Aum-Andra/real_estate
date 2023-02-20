import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "885205c09amsh4769b04571ea30fp1cd6e4jsn0953ab41f3ae",
    },
  });

  return data;
};
