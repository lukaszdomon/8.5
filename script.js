var a = 5;
var b = 3;
var triangleArea = (a*a) + (2*a*b) - (b*b);

console.log(triangleArea);

if (triangleArea % 2 == 0)
	console.log("Parzysta");
else
	console.log("Nieparzysta");


if (triangleArea == 0)
	console.log("Równy zero");
else
	console.log("Nie równy zero");