import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

const giphyKey = import.meta.env.VITE_GIPHY_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  const response = await axios.get<GiphyResponse>(baseUrl, {
    params: {
      q: query,
      limit: 10,
      lang: "es",
      api_key: giphyKey,
    },
  });

  return response.data.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
    width: Number(gif.images.original.width),
    height: Number(gif.images.original.height),
  }));
};
