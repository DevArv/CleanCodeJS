//Weather convertion Fahrenheit to Celsius - Dry not implemented
const tampaWeather = (91 - 32) * (0.5556);
const providenceWeather = (92 - 32) * (0.5556);
const myLocationWeather = (89 - 32) * (0.5556);

console.log("Tampa: " + tampaWeather);
console.log("Providence: " + providenceWeather);
console.log("My location: " + providenceWeather);

//Dry implemented
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 0.5556;
  }
  
  const tampaFahrenheit = 91;
  const providenceFahrenheit = 92;
  const myLocationFahrenheit = 89;
  
  const tampaCelsius = fahrenheitToCelsius(tampaFahrenheit);
  const providenceCelsius = fahrenheitToCelsius(providenceFahrenheit);
  const myLocationCelsius = fahrenheitToCelsius(myLocationFahrenheit);
  
  console.log("Tampa: " + tampaCelsius);
  console.log("Providence: " + providenceCelsius);
  console.log("My location: " + myLocationCelsius);
  