//Assign different types of values to the same variable and print its type.

//We use typeof keyword to know the type of the given value.
let x;
console.log(typeof x);

x = "Amit";
console.log(typeof x);

x = 42;
console.log(typeof x);

x = false;
console.log(typeof x);

x = null;
console.log(typeof x);

x = {
    name: "Amit Prakash",
    age: 42,
    Designation: "Full Stack Developer"
}
console.log(typeof x);

x = ["Amit", 42, "FullStack Developer"];
console.log(typeof x);