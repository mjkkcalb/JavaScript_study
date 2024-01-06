// window.onload = function () {};
// window.addEventListener("DOMContentLoaded", function () {});

// document.getElementById("btn").click(funtion (){})

//const btn = document.querySelector(".btn");
const btn = document.querySelector("#btn");

// btn.on('click', function () {})
// btn.click(function () {})

btn.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ranColor = `rgb(${red},${green}, ${blue})`;
  document.body.style.backgroundColor = ranColor;
});

const bgColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const ranColor = `rgb(${red},${green}, ${blue})`;
  document.body.style.backgroundColor = ranColor;
};
document.querySelector("#btn1").addEventListener("click", bgColor);
