const apiKey = "IlYHpknbG5eTrtUsmEsZwJAr3AgcdwYj";
const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

button.addEventListener("click", async function () {
  const searchTerm = searchInput.value.trim();
  const endpoint = `https://api.giphy.com/v1/stickers/search?api_key=${apiKey}&q=${encodeURIComponent(searchTerm)}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  const response = await fetch(endpoint);
  const responseData = await response.json();
  const images = [];

  for (let index = 0; index < responseData.data.length; index++) {
    images.push(responseData.data[index].images.original.url);
  }

  console.log(images);
  gifContainer.innerHTML = "";

  for (let index = 0; index < images.length; index++) {
    gifContainer.innerHTML += `<img src="${images[index]}" class="col-3 mb-3">`;
  }
});