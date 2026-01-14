import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_API_KEY;

const createImageInsideDOM = (imageUrl: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  document.body.append(imageElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);
