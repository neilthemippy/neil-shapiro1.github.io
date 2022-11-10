// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/

//I: the input of the function will be a number 
//O: the output of the function will be a string determined by if the number is divisible 
3, 5, 15 
//C: n/a 
//E: what if the number is negative 
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
  // creating variable count and setting it equal to zero 

// creating a for loop and starting i at 1 to iterate though every number until 100 
   for(var i = 1; i < 101; i++){
    // creating if else statement if i remainder 15 equals zero print "FizzBuzz"
    if(i % 15 == 0){
        console.log("FizzBuzz");
    } else if (i % 5 == 0){ // if i remainder 5 equals zero print "Buzz"
        console.log("Buzz"); 
    } else if (i % 3 == 0){ // if i remainder 3 equals zero print "Fizz "
        console.log("Fizz")
    } else { // if the prior logic is not executed print i which will be a number 
        console.log(i); 
   
    }
   }



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}