var ac = document.querySelector("#ac");
var backspace = document.querySelector("#backspace");
var number = document.querySelectorAll(".number");
var input = document.querySelector("#input-display");
var output = document.querySelector("#output-display");
var equals = document.querySelector("#equals");

//ALL CLEAR
ac.addEventListener("click", () => {
  input.value = "";
  output.value = "";
});

//BACKSPACE
backspace.addEventListener("click", () => {
  let delOne = input.value.toString();
  input.value = delOne.slice(0, -1);
});

//EQUALS COMPUTATION
equals.addEventListener("click", () => {
  let value = input.value;
  let update = eval(value);
  input.value = "";
  output.value = update;
  //styling
});

number.forEach((item) => {
  item.addEventListener("click", () => {
    input.value += item.value;
  });
});

//*******************LAYOUT AND DESIGN JS

var spinner = document.querySelector("#spinner");
var converter = document.querySelector("#converter-btn");
var calculator = document.querySelector("#calculator-btn");
var indicator = document.querySelector("#btn");
var converterPage = document.querySelector("#converter");
var calculatorPage = document.querySelector("#calculator");
var burger = document.querySelector(".burger");
var container = document.querySelector(".container");
var dark = document.querySelector("#dark");
var light = document.querySelector("#light");
var body = document.body;
var sidebar = document.querySelector("#sidebar");
var calcContent = document.querySelector("#content");

//spinner

window.onload = () => {
  setTimeout(() => {
    body.classList.add("display");
  }, 4000);
};

// toggle dark mode

dark.addEventListener("click", () => {
  body.classList.add("dark");
});

light.addEventListener("click", () => {
  body.classList.remove("dark");
});

converter.addEventListener("click", () => {
  body.classList.add("toggleConverter");
  converterPage.style.left = "5rem";
  calculatorPage.style.left = "-200vw";
});

calculator.addEventListener("click", () => {
  body.classList.remove("toggleConverter");
  converterPage.style.left = "200vw";
  calculatorPage.style.left = "5rem";
});

burger.addEventListener("click", () => {
  body.classList.toggle("change");
});

// REMOVE SIDEBAR WHEN BODY IS CLICKED //

calcContent.addEventListener("click", () => {
  body.classList.remove("change");
});
