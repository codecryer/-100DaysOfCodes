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

// let person = {
//   name: "samuel",
//   surName: "nzekwe",
//   age: 21
// };
// console.log(person); //{ name: 'samuel', surName: 'nzekwe', age: 21 }----output result

// console.log(person.name); //samuel----outputs the value of the name property. the dot notation
// console.log(person["age"]); // 21 ----output  the square bracket notation

// ARRAYS;
// let myArray = ["mosh", 100, "days", "of", "codes"];
// console.log(myArray); //[ 'mosh', 100, 'days', 'of', 'codes' ]---output.

// console.log(myArray.length); //returns 5 as my array length.

// console.log(myArray[2]); // days.

// //FUNCTIONS

// function getMessage() {
//   console.log("i just completed my DAY 2 projections, hurray!");
// }
// getMessage(); // calling the function getMessage prints i just completed my DAY 2 projections, hurray! to the console.

// Day 3 **** Operators.

// let x = 3;
// let y = 4;

// console.log(x + y);
// console.log(x * y);
// let incomeLevel = true;               //output is true
// let onJob = true;
// let grantLoan = onJob && incomeLevel;
// console.log(grantLoan);

//conditionals, assignments, variables, ternary...................
// let incomeLevel = false;
// let onJob = true;
// let grantLoan = onJob && incomeLevel;
// let loanStatus = grantLoan ? console.log("granted") : console.log("denied");

// console.log(loanStatus);
//please, these logic seems to work well, but my console comes with an Undefined after consoling the right message. what might possibly be thr reason. for one, based on my studies on variables, it means a declared variable hasnt been assigned since all declared but unassigned variables always seem to have 'undefined' as their default values.//

// let x = 1;
// console.log(++x);
// console.log(x++);
let a = "red";
let b = "blue";
let c = a; //swapping variable values challenge.
a = b;
b = c;

console.log(a);
console.log(b);
