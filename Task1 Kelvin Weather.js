//i set the kelvin to constant at 293 as it wont change
const kelvin = 293;
//here i set celcius as the variable, and subtracted kelvin from 273
var celcius = kelvin - 273;
//use the equation to calculate fahrenheit
var fahrenheit = celcius * (9/5) + 32;
//the.floor()method to round down the Fahrenheit temperature.
var fahrenheit = Math.floor(fahrenheit);
//below will use console.log to print the final statement
console.log(`The temperature is ${fahrenheit} degress Fahrenheit`)