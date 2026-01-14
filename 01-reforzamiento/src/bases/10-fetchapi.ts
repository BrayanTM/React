const API_KEY = import.meta.env.VITE_API_KEY;

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
);

request
  .then((response) => response.json())
  .then((data) => {
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;

    document.body.append(imageElement);
  })
  .catch((error) => {
    console.error(error);
  });
