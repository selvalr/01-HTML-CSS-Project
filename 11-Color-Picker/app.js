const button = document.querySelector("button");
const strong = document.querySelector("strong");

const colorpickers = async () => {
  const colorPicker = new EyeDropper();
  const result = await colorPicker.open();
  const sRGBHEX = result.sRGBHex;

  strong.innerHTML = sRGBHEX;
  strong.style.color = sRGBHEX;
};
button.addEventListener("click", colorpickers);
