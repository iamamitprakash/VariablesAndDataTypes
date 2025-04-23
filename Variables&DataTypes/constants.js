//Declare a constant object and try to change one of its properties

const mySelf = {name: "Amit Prakash", age: 42, designation: "FullStack Developer", company: "Microsoft"};
console.log(mySelf);

mySelf.age = 40; //Will change the value of age key
console.log(mySelf); 

// TypeError: Assignment to constant variable.
// mySelf = {};
// console.log(mySelf);