var output = document.querySelector("#convOutput");
var input = document.querySelector("#convInput");
var fahrenheitDisplay = document.querySelector("#degFahrenheit");
var CelsiusDisplay = document.querySelector("#degCelsius");
var toFahrenheit = document.querySelector("#fahrenheit-btn");
var toCelsius = document.querySelector("#celsius-btn");
var reset = document.querySelector("#reset");

toFahrenheit.addEventListener("click", () => {
  number = input.value;
  console.log(number);
  if (number == "") {
    output.value = null;
  } else {
    output.value = (number * 9) / 5 + 32;
    fahrenheitDisplay.style.display = "block";
    CelsiusDisplay.style.display = "none";
  }
});

toCelsius.addEventListener("click", () => {
  number = input.value;
  if (number == "") {
    output.value = null;
  } else {
    output.value = ((number - 32) * 5) / 9;
    CelsiusDisplay.style.display = "block";
    fahrenheitDisplay.style.display = "none";
  }
});

reset.addEventListener("click", () => {
  CelsiusDisplay.innerHTML = "";
  fahrenheitDisplay.innerHTML = "";
  input.value = "";
  output.value = "";
  toCelsius = null;
  toFahrenheit = null;
});
