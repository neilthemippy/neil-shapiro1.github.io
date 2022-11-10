// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/* 
I: the intput of the printArrayValues function is an array 
O: the values of the input array printed to the console
C: N/A
E: N/A 


*/ 
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // creating a for loop to iterate over the array input 
  for(var i = 0; i <= array.length - 1; i++){
    // print the values of the array to the consle
    console.log(array[i]); 
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
    // creating a for loop to iterate over the array input in reverse 
    for(var i = array.length - 1; i >= 0; i--){
      // print the values of the array to the consle
      console.log(array[i]); 
    }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // creating a variable getKeys and setting it equal to array empty 
  let getKeys = []; 
  // creating a for loop to iterate over the key/value pairs of the input object 
  for(var key in object){
// pushing the key of the input object into new array 
    getKeys.push(key); 
  } // return the created getKeys array which holds the key of the input object 
  return getKeys; 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
    // creating a for loop to iterate over the key/value pairs of the input object 
    for(var key in object){
      // printing the key of the input object to the console
          console.log(key); 
        } 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
   // creating a variable getKeys and setting it equal to array empty 
   let getKeys = []; 
   // creating a for loop to iterate over the key/value pairs of the input object 
   for(var key in object){
 // pushing the key of the input object into new array 
     getKeys.push(object[key]); 
   } // return the created getKeys array which holds the key of the input object 
   return getKeys; 
   
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
     // creating a for loop to iterate over the key/value pairs of the input object 
     for(var key in object){
      // printing the values of the input object to the console
          console.log(object[key]); 
        } 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // creating the variable size and equating using the object.keys method will return an array of the input objects elements 
  // the .length method will then get the length of the object array from .keys 
  var size = Object.keys(object).length; 
  // return size variable 
  return size; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
   // creating the variable reverse and equating it to using the object.keys method 
   // to return an array of the input objects elements then using .reverse to reverse the elements of the input array 
var reverse = Object.keys(object).reverse();  
// using the for each method to iterate through the keys of the array and using console.log to print the values of the keys to the console 
reverse.forEach(key => {console.log(object[key]);
}); 
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
