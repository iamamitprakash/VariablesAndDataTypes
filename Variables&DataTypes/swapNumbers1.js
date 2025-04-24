//Swap two numbers without using third variable.

let a = 45;
let b = 63;

console.log("Before Swap:");
console.log("a =", a, "b =", b);

//Swap the numbers using arithmetic operator

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap:");
console.log("a =", a, "b =", b);