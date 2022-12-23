// 1 FUNCTIONS
// Functions can be broken up into two different parts, the firs thing we must do with a funciton is to declare it. 

// a function declaration consists of function keyword, followed by A list of parameters to the function, enclosed in parentheses and separated by commas.

// heres an example: 

function printWord (word){
  
}
// The next part of a funtion is to execute or to invoke the function

function printWord(word){
  console.log(word); 
}
console.log(printWord("bob"))// here we have invoked the printWord function and when it executes it'll print the name of bob to the console 

//2 
// Whats the difference between a function's parameters and arguments passed to a function?
// A functions parameters are the holding names that we place in the function declaration, 
// a functions arguments are the real values that we pass in the parameters to execute the function 

function printWord(word){
              //  ^^ Here is the function parameter of the printWord function 
  console.log(word); 
}
console.log(printWord("bob")) // <== here is the function arugment or value that will be passed into our printWord function

//3 
// The syntax for a named function:
 function addNumbers(a, b){
           return   a += b; 
      }
  // We can also create functions that are nameless called an anonymous functions 

const addValues = function(a, b){ // because function is not named it's an anonymous function
      a += b
}

//4 
// we can assign a function to a variable by writing the variable keywords, var, let or const and then equating those words to a named or anonymous function like the in the example below: 

var minusValues = function minusValues(a, b){

               return a -= b; 
      } 


//5 
// Functions can optionally take inputs and optionally return a single value we can specify our outputs by putting a return statement in the body of our function:

function addValues(a, b){

  let c = a + b; 
// in this code we take two different inputs and we've created another varaible to hold the result of adding our two arguments
  return c; 
  // we've chosen what this function outputs by adding a return to our function 
}

// 6
// SCOPE
// Funcitons can take in variables from the global scope and manipulate variables in the local scope of the function 

 function addNums(a, b){
// here we have taken the same funciton from above but we are shining a light on the let variable we have declared
  let c = a + b; 
// because we have declared this variable in the local scope of our funciton it isnt accessible outside our function scope
  return c;
 }

// 7 
// CLOSURES
// Closures occur when functions take in variables located in the global scope, if the values are then returned and held in memory these closures stay alive and data will continue to exist in these closures

function printName() {
    var firstName = 'neil'; 
    var lastName = 'shapiro'; 
// the local variable
    function printfullName() {
        console.log(firstName + lastName); // first name and last name variables are accessed from outside the printfullName function which creates a closure
    }
    printfullName();

}
printName(); 
// neil shapiro is what gets printed to the console