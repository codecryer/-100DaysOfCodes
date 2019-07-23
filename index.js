//first, from mosh, i learnt variable declarations and initialisation.

// let person; //declaring the variale person
// console.log(person); //returns undefined.
// let person = "samuel"; // initializing the variable person
// console.log(person);  // returns the string 'samuel'

//RELATED VARIABLE STATEMENTS;

// let name = 'samue';
// let surName = 'Nzekwe';   // because each variable is related, we can create the person object.
// let age = 21;

//OBJECT;

let person = {
  name: "samuel",
  surName: "nzekwe",
  age: 21
};
console.log(person); //{ name: 'samuel', surName: 'nzekwe', age: 21 }----output result

console.log(person.name); //samuel----outputs the value of the name property. the dot notation
console.log(person["age"]); // 21 ----output  the square bracket notation

// ARRAYS;
let myArray = ["mosh", 100, "days", "of", "codes"];
console.log(myArray); //[ 'mosh', 100, 'days', 'of', 'codes' ]---output.

console.log(myArray.length); //returns 5 as my array length.

console.log(myArray[2]); // days.

//FUNCTIONS

function getName() {
  console.log("i just completed my DAY 2 projections, hurray!");
}
getName();
