var convOutput = document.querySelector("#convOutput");
var convInput = document.querySelector("#convInput");
var toCelsius = document.querySelector("#celsius-btn");
var toFahrenheit = document.querySelector("#fahrenheit-btn");
var reset = document.querySelector("#reset");
var fah = document.querySelector("#degf");
var cel = document.querySelector("#degc");

toFahrenheit.addEventListener("click", () => {
  fah.style.visibility = 'hidden';
  cel.style.visibility = 'hidden';
  number = convInput.value;
  if (number == "") {
    convOutput.value = null;
  } else {
    let answer = (number * 9) / 5 + 32;
    convOutput.value = answer;
    fah.style.visibility = 'visible';
  }
});

toCelsius.addEventListener("click", () => {
  fah.style.visibility = 'hidden';
  cel.style.visibility = 'hidden';
  number = convInput.value;
  if (number == "") {
   convOutput.value = null;
  } else {
    let answer =  ((number - 32) * 5) / 9;
    convOutput.value = answer;
    cel.style.visibility = 'visible';
  }
});

reset.addEventListener("click", () => {
  convInput.value = "";
 convOutput.value = "";
  toCelsius = null;
  toFahrenheit = null;
  fah.style.visibility = 'hidden';
  cel.style.visibility = 'hidden';
});
