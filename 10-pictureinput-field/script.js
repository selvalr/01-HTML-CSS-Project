const image = document.querySelector("img");
const inputEle = document.querySelector("input");

inputEle.addEventListener("change", () => {
  image.src = URL.createObjectURL(inputEle.files[0]);
});
