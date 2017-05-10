var a = prompt("Podaj a");
var b = prompt("Podaj b");
var value = (a * a) + (2 * a * b) - (b * b);

if (value < 0) 
	console.log("wynik ujemny");
else
	console.log("wynik dodatni");
