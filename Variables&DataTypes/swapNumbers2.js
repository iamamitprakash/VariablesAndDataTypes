//Using array destructuring(Modern JavaScript)

let a = 98;
let b = 75;

console.log("Before Swap:");
console.log("a =", a, "b =", b);

//one liner
[a , b] = [b , a];

console.log("After Swap:");
console.log("a =", a, "b =", b);