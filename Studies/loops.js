// LOOPS
// 1. 
// While Loop 
/* A while loop, iterates during a specified statement as long as the test condition evaluates to true. Before the condition is executed the statment is evaluated if it's true or false, if the statement is no longer true the loop ends. */ 

// here is an example of a while loop 

let n = 0;
let x = 0;

while (n < 10) {
  n++;// we'll increment by 1 each iteration
  x += n;
}
// this as long as n is less than 10, n will count up from zero and will be added to x which will equate to 55
console.log(x);// 0 + 1 + 2 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// for this for loop we'll make n a number greater than 
let a = 10;
let b = 100;

while (a > 0) {
  a--;// we're decrementing a by one each time
  b -= a;
}

console.log(b); // 100 - 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 = 55

//2. 
// FOR LOOP
/* 
A JavaScript for loop executes a block of code as long as a specified condition is true. Different from a while loop. JavaScript for loops take three arguments: initialization, condition, and increment. The condition expression is evaluated on every loop. The loop will continue to iterate as long as the conditional expression in the loop is true. 
*/ 

// this is a for loop that counts to 20
for(let i = 0; i < 21; i++){ // < incrementation
// ^initialization ^stop conidition
  console.log(i); 
}
 // Initialization is used to declare a count variable this will be used to count how many times we have executed the variable 

// The stop condition is whats evaluated before each iteration starts. If the condition is equal to true , the code within the for loop will run. If the condition becomes false , the loop will stop running.

// the incementation updates the count variable each time the code is executed 

for(let i = 21; i > -1; i--){ // here is similar code from above bit we will start the count variable at 
//21 and count to zero
  console.log(i); 
}
// The for loop is the standard loop we use to iterate over the elements of an array datatype 
var airlineCompanies = ['delta', 'united', 'ryanair', 'spirit', 'southwest', 'jetblue', 'american airlines']
// we can access these elements from the front of the array to the back and manipluate it multiple ways
for(let i = 0; i < airlineCompanies.length; i++){
  console.log(airlineCompanies[i]); // will print the elements of airlines starting from delta
}
// we can also access these elements starting from the back of the array ending in the front by making the initialization airlineCompanies.length - 1, and having the stop conditon be the zero indexx of airlines
for(let i = airlineCompanies.length - 1; i >= 0; i--){
  console.log(airlineCompanies[i]); // will print the elements of airlines starting at american airlines
}

//3. 
// FOR IN LOOP
// A for in loop iterates through the key/value pairs in an object, for in loops are great because they allow us to print out certain values in the object datatype. 

var person = {

  firstName: "bob", 
  lastName: 'builder', 
  city: "new orleans", 
  state: 'louisiana', 
  zipCode: 70005
}

// for this object above we can use a for in loop to grab a particular value from thos object or print out all of its key/value pairs to the console. 

for(let key in person){
  console.log(person[key]); // will print out the values at each key
}
for(let key in person){
  console.log(key); // will print out the keys of the person object above
}