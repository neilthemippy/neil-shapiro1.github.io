// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // creating function that has a given value as a parameter
    return function(value){
// returning the function that tests value greater than base 
        return(value > base);
            
        
       
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base){
    // YOUR CODE BELOW HERE //
      // creating function that has a given value as a parameter
      return function(value){
        // returning the function that tests value less than base 
                return(value < base);
      }        
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // creating a return function that takes in a parameter of string 
    return function(string){
        // returning the first index of string to lowercase strictly equals the startsWith parameter also to lowercase 
        return (string[0].toLowerCase() === startsWith.toLowerCase());
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
// creating return function that takes the parameter of string 
    return function(string){
        // returning the last index of string to lowercase strictly equals the endsWith parameter also to lowercase 
        return (string[string.length - 1].toLowerCase() === endsWith.toLowerCase());
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // creating a new variable to store a collection 
    var newArr = []; 
// creating a for loop to iterate over the strings 
    for(var i = 0; i < strings.length; i++){
// passing the index of strings into the modify function and pushing those results into the newArr collection array 
        newArr.push(modify(strings[i])); 
    }
// return collection array 
    return newArr; 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // 
    for(var i = 0; i < strings.length; i++){
        if(test(strings[i]) === false){
            return false; 
        
    }
}
    return true; 
    
    
    // YOUR CODE ABOVE HERE //

}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
