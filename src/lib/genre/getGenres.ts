import axios from "axios";

export const getGenres = async () => {
  const options = {
    method: "GET",
    url: "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre",
  };

  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
