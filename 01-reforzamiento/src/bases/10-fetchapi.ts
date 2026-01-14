import type { GiphyRandomResponse } from "../data/giphy.response";

const API_KEY = import.meta.env.VITE_API_KEY;

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

const createImageInsideDOM = (imageUrl: string) => {
  const imageElement = document.createElement("img");
  imageElement.src = imageUrl;
  document.body.append(imageElement);
};

request
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((error) => {
    console.error(error);
  });
