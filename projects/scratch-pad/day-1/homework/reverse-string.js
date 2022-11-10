// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    // creating a variable newString 
    // using the .split method to split the string into a substring of array 
    // using the .reverse method to reverse the elements of the array 
    // using the .join method to join the sub arrays into a string 
    var newString = input.split("").reverse().join(""); 
    // return the newString variable 
    return newString; 
    

    // or 
    // function reverseString(input) {
    //   var reversed = ""; 

    //   for (var i = input.length - 1; i >= 0; i--){

    //     reversed += input[i]; 
    //   }
    // return reversed; 
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}