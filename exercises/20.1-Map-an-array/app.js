let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value) {
	return (value * (9/5) + 32)
	// Add your code here and return the new value
	
});

console.log(arrayOfFahrenheitValues);
