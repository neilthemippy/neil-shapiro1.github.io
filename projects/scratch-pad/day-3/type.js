// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // use Array.isArry to check if the value of the input is indeed an array 
    if (Array.isArray(value) === true){
        return true; // if Array.isArray strictly equals true return true 
    } else { // if not return false 
        return false; 
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // if use .isArray to return a boolean if equals false and value type equals object 
    // and value not equal to null and value not instance of date equals false return true
    if(Array.isArray(value) === false && typeof value === "object" && value !== null && value instanceof Date === false){
        return true; 
    
    } else { // if logic above not true return false 
        return false; 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // if use .isArray to return a boolean if equals true and value type equals object 
    // and value not equal to null and value not instance of date equals false return true
    if(Array.isArray(value) === true || typeof value === "object" && value !== null && value instanceof Date === false){
        return true; 
    } else { // if logic above false return false
        return false; 
    }
     
  
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // create if statement and use isArray to test value 
    if(Array.isArray(value)){
        return "array"; // if array return string of array 

    } if (value === null){// if value equals null return string of null
        return "null"; 
    } if (value instanceof Date){ // if value equals instance of date return string of date 
        return "date"; 
    } else {
        return typeof value; // if logic above not excuted use typeof to return value in string 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
