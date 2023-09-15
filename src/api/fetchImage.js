// We are going to fetch images from Unsplash API using Axios

import axios from "axios";

const searchImages = async (input, page) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: "Client-ID vpPRU0AYS5X5o1jMkn21l81SXv8_ZYV86GEfSjk4W7o",
      },
      params: {
        query: input,
        per_page: "12",
        page: page,
      },
    });

    const data = response.data.results;
    const pages = response.data.total_pages;

    return { data, pages };
  } catch (err) {
    console.log(err);
  }
};

export default searchImages;
