// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

// I: string 
// O: the length of the input string 
// C: n/a
// E: n/a 
function length(string) {
    // YOUR CODE BELOW HERE //
    // creating variable howLong and setting it equal to string.length to determine string length
var howLong = string.length; 
// return new varible to get string length 
return howLong; 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

// I: string 
// O: the input string made to lowercase 
// C: n/a
// E: n/a 
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // creating small word variable and setting it equal input string and using toLowerCase to make the whole string lowercase 
let smallWord = string.toLowerCase();
// return the new variable 
return smallWord;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

// I: string 
// O: the input string made to uppercase  
// C: n/a
// E: n/a 
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
// creating variable bigWord and equating it to string and using toUpperCase to capitalize the entire string
 let bigWord = string.toUpperCase(); 
 // return the new variable 
 return bigWord; 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
// I: string 
// O: a string with all letters lowercase and spaces replaced with dashes
// C: n/a
// E: n/a 

function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// creating new variable dashCase and setting it equal to string.toLowerCase 
let dashCase = string.toLowerCase(); 
// creating another variable which will use replaceAll to replace spaces with -
let newString = dashCase.replaceAll(" ", "-"); 
// return newString variable 
return newString; 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

// I: string 
// O: a boolean of true or false depeding on the input 
// C: n/a
// E: n/a 
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// accessing the zero index of string and making it lowercase also making the input of char lowercase 
// if string and char strictly equal each other return true 
    if(string[0].toLowerCase() === char.toLowerCase()){
        return true; 
    } else { // if not return false 
        return false; 
    }

    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

// I: string 
// O: a boolean of true or false depeding on the input 
// C: n/a
// E: n/a 
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// accessing the last index of string and making it lowercase also making the input of char lowercase 
// if string and char strictly equal each other return true 
if(string[string.length - 1].toLowerCase() === char.toLowerCase()){
    return true; 
} else { // if not return false 
    return false; 
}



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

// I: two seperate strings
// O: a string concatenation of the input parameters
// C: n/a
// E: n/a 
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// creating new variable and setting it equal to stringOne input plus (+) stringTwo 
var newString = stringOne + stringTwo; 
// return new variable 
return newString; 

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
// returning the args variable and using .join to return all the strings joined together 
return args.join(""); 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// creating if else statement to compare the length of the two inputs 
if(stringOne.length > stringTwo.length){
   // if stringOne is longer return the input string 
    return stringOne; 
// else return the string of the second input parameter 
} else {
    return stringTwo; 
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// creating and if else statement if input stringOne is less than input stringTwo return a numerical 
if (stringOne < stringTwo){
    return 1; // return 1 if stringOne less than stringTwo 
} else if (stringOne > stringTwo){
    return -1;  // return negative one if stringOne is greater than string two
} else {
    return 0; // return if equal 
}


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// creating and if else statement if input stringOne is more than input stringTwo return a numerical 
if (stringOne > stringTwo){
    return 1; // return 1 if stringOne more than stringTwo 
} else if (stringOne < stringTwo){
    return -1;  // return negative one if stringOne is less than string two
} else {
    return 0; // return if equal 
}


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
