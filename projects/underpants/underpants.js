// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {}; // 


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
return value; 

}; 

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
// creating a function type of that takes in any value as a parameter and determines the value in a string 
_.typeOf = function(value){
// determine if the value is an array 
    if(Array.isArray(value)){
        return "array"; 
    } else if (value === "object"){ // determine if value is an object 
        return "object"
    } else if (value === null){ // determine if value is null
        return "null"; 
    } else { // if the value is none of the logic above 
    let type = typeof value; // determine type of value 
    var typeofstring = String(type); // put the value into a string
return typeofstring; 
    }
}
/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
// creating function first that takes in an array and a number 
_.first = function(array, number){ 

// checking to see if array is array
if (Array.isArray(array) === false || (number < 0)) {
    let emptyArray = [];
    return emptyArray;
    // if number is not a number return the first element 
} if (typeof number !== 'number') {
    return array[0];
    // if number is greater than zero and and less than array length returning the first number items in array 
} if ((number >= 0) && (number < array.length)) {
     return array.slice(0, number); 
} else if ((number >= 0) && (number > array.length)) {// if number is greater than zero and greater than the array length return array 
 return array;
}
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// creating function last with the parameters of an array and a number 
_.last = function(array, number){
// checking to see if array is array
if (Array.isArray(array) === false || (number < 0)) {
    let emptyArray = [];
    return emptyArray;
    // if number is not a number return the first element 
} if (typeof number !== 'number') {
    return array[array.length - 1];
    // if number is greater than zero and and less than array length returning the first number items in array 
} if ((number >= 0) && (number < array.length)) {
     return array.slice(-number) 
} else if ((number >= 0) && (number > array.length)) {// if number is greater than zero and greater than the array length return array 
 return array;

}

}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

// creating indexOf which takes in an array and a value
_.indexOf = function(array, value){
// iterating through the array parameter
for(let i = 0; i < array.length; i++){
// creating an if statement that if the element of array equals value return the index
        if(array[i] === value){
            return i; 
        }
        }
// if value is not in the array return -1 
return -1; 
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/
// creating function contains which takes in a array and a value as parameters 

_.contains = function(array, value){
// creating an if statment to see whether or not value is defined 
if(value !== undefined){ 
   // using the inclues method to see whether value is in the array parameter 
 var result = (array.includes(value)) ? true : false; // creating result variable and using ternary operator for if statment
}
// return result 
return result; 
} 

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
// determine if collection is an array
    if(Array.isArray(collection)){
        // call func on each item in the array 
for(let i = 0; i < collection.length; i++){
    func(collection[i], i, collection); 
} 
    
    } else { // its an object 
        // iterate through the collection 
    for(let key in collection){
        func(collection[key], key, collection); 
    }
    }

}
/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

// creating function unique that has an argument of an array 
_.unique = function(array){
let result = [];  

for(let i = 0; i < array.length; i++){
    if(_.indexOf(array, array[i]) === i){
            result.push(array[i]); 
    }
}

return result; 
}

// creating new array to hold return values 


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

// creating filter function that has the parameters of an array and a function 
_.filter = function(array, func){ 
// creating a new array to hold true variables 
let result = []; 
// creating a for loop to iterate through the input array 
for(let i = 0; i < array.length; i++){ 
// creating an if statement to see if statment to test the function 
if(func(array[i], i, array)){ 
    result.push(array[i]); // pusing the array of elements for those that returned true
}

}
return result; 
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/
// creating a function called reject that takes in an array and a function 
_.reject = function(array, func){
 // creating a new array to hold true variables 
let result = []; 
// creating a for loop to iterate through the input array 
for(let i = 0; i < array.length; i++){ 
// creating an if statement to see if statment to test the function and using the bang operator to flip true to false
if(!func(array[i], i, array)){ 
    result.push(array[i]); // pusing the array of elements for those that returned true
}

}
return result; 
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
// creating a function called partition that takes in the parameters of an array and a function 
_.partition = function(array, func){ 
  let truthy = [];               // creating a variable to hold all truthy values
    let falsey = [];          // creating a variable to hold all falsy values
// creating a for loop to iterate through the parameter array 
    for(let i = 0; i < array.length; i++){ 
        if(!func(array[i], i, array)){ // calling the function on the element, index and the array 
            falsey.push((array[i])); // for all falsey values pushing into falsey array 
        } else { 
            truthy.push((array[i])); // for all truthy values
        }
    
    }
    let totalarray = []; // creating a new array to hold both truthy and falsey arrays 
    totalarray.push(truthy,falsey); // pushing truthy and falsey arrays into parent array 
    return totalarray; // return parent array 
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/
// creating function called map that takes in a collection and a function as parameters 
_.map = function(collection, func){
     let newArr = []; // creating new array to hold return values
// creating and if statement that will determine if the collection is an array 
if(Array.isArray(collection)){ 
    //creating a for loop to iterate through the collection 
    for(let i = 0; i < collection.length; i++){
       newArr.push(func(collection[i], i, collection)); // pushing the results into newArr 
    } 
} else { // if the collection is an object creating a for in loop to iterate 
    for(let key in collection){
        newArr.push(func(collection[key], key, collection)); // pusing results into newArr 
    }
}
return newArr; // return new Arr 
}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/



// creating function .pluck which its parameters are an array of objects and a property 
_.pluck = function(array, property){
  
      //mapping over pluck using .map with the parameters of array and item
      var result = _.map(array, function(item){
        //returning value for property from the array
        return item[property]
      })
      //return new array
      return result; 
    
   
}



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/
// creating function with the parameters of a collection and a function 
_.every = function(collection, func){ 
// seeing if func is undefined iterate through the collection 
    if (func === undefined){ // if collection is an array 
        if(Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){ // iterate through the array 
                if(!collection[i]){ // if any value are falsey return false 
                    return false; 
                }
    
            }
        } else { // if collection is an object 
            for(let key in collection){ // iterate through the object 
                if (!collection[key]){ // if any of the key/value pairs in object are falsy return false 
                    return false;
                }
            }
        }
    } else { // if function is not undefined 
        if(Array.isArray(collection)){ // see if collection is an array
            for(let i = 0; i < collection.length; i++){
                // iterate through the collection and call the function on its element index and collection 
                if(func(collection[i], i, collection) === false){ //if it equals false return false
                    return false; // return false
                }
            }
        }
    }
    return true; 
    
    
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

// creating function with the parameters of a collection and a function 
_.some = function(collection, func){ 
    // seeing if func is undefined iterate through the collection 
        if (func === undefined){ // if collection is an array 
            if(Array.isArray(collection)){
                for (let i = 0; i < collection.length; i++){ // iterate through the array 
                    if(collection[i]){ // if any value are falsey return false 
                        return true; 
                    }
        
                }
            } else { // if collection is an object 
                for(let key in collection){ // iterate through the object 
                    if (collection[key]){ // if any of the key/value pairs in object are falsy return false 
                        return true;
                    }
                }
            }
        } else { // if function is undefined
            if(Array.isArray(collection)){ // see if collection is an array
                for(let i = 0; i < collection.length; i++){
                    // iterate through the collection and call the function on its element index and collection 
                    if(func(collection[i], i, collection) === true){ //if it equals false return false
                        return true; // return false
                    }
                }
            } else{ //else its an object
                //iterate through object
                for(let key in collection){
                    //determine if invoking func on the params is true
                    if(func(collection[key], key, collection) === true)
                    {   //return true;
                        return true;
                    }
        }
       
        
        
    }
        } // if it its false for calling the function on the element,index and collection return false
    return false; 
}
  
/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
// creating reduce which takes in an array a function and seed
_.reduce = function(array, func, seed){ 
// creating result variable 
let result;  
    // determine if seed is given a value 
if(seed === undefined){
    result = array[0]; // if seed not given assign result to the first element in array 
    for(let i = 1; i < array.length; i++){ // iterate through the array starting at the 1 index
        result = func(result, array[i], i, array); 

    }

} else { // if seed has a value
    result = seed; // result equals seed given 
    for(let i = 0; i < array.length; i++){ // create for loop to iterate through array 
        result = func(result, array[i], i, array); // result equals func called on result element, index and array 
    }
}
return result; // return result 
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/
// creating a function called extend that takes in multiple objects 
_.extend = function(...object){ // using the spread operator as a parameter to copy data from object parameter 
// using object assign to assign the values from input object to a copy object 
    return Object.assign(...object, {}); 

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
