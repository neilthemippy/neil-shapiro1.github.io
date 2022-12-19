/*   VARIABLES

0. In Javascript, Variables are storage loctations that we can use to store different types of data. We can store primitive data types in variables such as strings, booleans, numbers, bigint, undefined, null. We can also store complex datatypes in variables such as arrays and objects. There are two types of variables, Global Scope variables and Local Scope variables. We can change the values in variables in a few different ways. Without variables we would not be able to reference pieces of data at any given time in our code because we would have no place to store data. 

1. To declare a variable in the global scope, type the var keyword. To declare a variable in the local scope type the let or const keywords. 

2. There is two different stages of using variables, the first stage is variable declaration, the second stage is variable initialization. 

3. Variable declartion 
*/ 
//To declare a variable, you use the var keyword followed by the variable name as follows
var city;

// A variable name can be any valid identifier. By default, the message variable has a special value undefined if you have not assigned a value to it. Because there has been no assingment to city, if we log the variable to the console it will returned as undefined. 

/* 4. Variable Initialization
The next stage of using variables is variable initialization. Once you have declared a variable like we have with city variable above, you can initialize it with a value. To initialize a variable, you specify the variable name, followed by an equals sign (=) and a value.
*/ 
      var city = "New Orleans"; 
//console.log(city); 
// Because of how Javascript reads code, primitve datatypes like words have to be placed between quotation marks, we call this datatype a string. We initialized the city variable above by assigning it to the string of New Orleans. If we log the city variable to the console like so. The console would print New Orleans. 
 

// 5. Variable Re-assignment
// Since variables essentially storage units we can reassign variables to hold different data if we please. 
// in the example below I have re-assigned our city variable to now hold a string of Atlanta. 

var city = "Atlanta"; 

console.log(city); 
// if we now log city to the console, Atlanta prints to the console instead of New Orleans

/* 6. Var
 Using the var keyword our variable belongs to the global scope when you define them outside a function, which means we can use this variable and access this variable for any functions that we create. 
*/ 
var z = 10; 

function count(num) {
  var x = 0

  for(var i = 0; i < num; i++);
  x += num[i];
}

function add(num){

  var y = x + num + z; 
}

// in the function above because i have used the var keyword for z, it is avaiable for both functions listed
/* 7. Let
the let keyword was introduced in an update to javascript called ES6 which occurred in 2015. The let keyword allows us to declare and initialize variables in a local scope or block scope. The let keyword was introduced to give developers more freedom when declaring and initializing variables that wouldnt be affected by re-assignment for the local scope. 

Another differece between var and let is that let can only be accessed after its declaration is reached
*/ 

let a = 10; 

function count(num) {
  let b = 0

  for(var i = 0; i < num; i++);
  x += num[i];
}

function add(num){

  let c = a + num + b; 
}

console.log(add(10)); 

// because let can only be in the local scope i cannot access the varaiable of b in this situation and it reads as undefined
// I can re-assign the a variable if needed

/* 8 . Const
Just like the let keyword, the const declaration creates block-scoped constants. The value of a constant can't be changed through reassignment unlike let which means the value it holds isn'timmutable but the variable identifier cannot be reassigned
*/ 

function add(num){

  const exampleNum = 10; 
  exampleNum = 9; 
}

console.log(exampleNum); 
// in this example we see that when we try to re-assign const we get a type error

/* Hoisting
 Hoisting occurs when the Javascript interpreter appears to move the declaration of functions, variables or classes to the top of their scope, before the execution of code takes place. 

There are three different behaviors in Javascript that qualify as hoisting

1. Value Hoisting - Being able to use a variable's value in its scope before the line it is declared.
 2. Declaration Hoisting - Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. 
3. The declaration of the variable causes behavior changes in its scope before the line in which it is declared.

*/

x = 5; // Assign 5 to x

value = document.category("movie"); // Find an element
value.number = x                     // Display x in the element

var x; // Declare x


//Because of hoisting the code above and below with both run because we are able to use the varaibles before they are declared.

var x; // Declare x
x = 5; // Assign 5 to x

value = document.category("movie"); // Find movie category
value.number = x    
