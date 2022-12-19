////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step=start){ // creating range function which has takes in two numbers as start and end, and intergrates a step parameter 
  // which is equal to the start number 
  rangeArray = []; // creating varible and assigning it to an empty array
  // if start parmeter equals end paramter return empty array
      if(start === end){ 
        return rangeArray; 
// if step is a positive number 
      } else if (step > 0) { // iterate from start to end with the stop condition i less than end 
      for (let i = start; i <= end; i += step){
        rangeArray.push(i); // push the number into range array
      }
    } else { // if step is negative
      for (let i = start; i >= end; i += step){  // iterate from start to end with the stop condition being i is greater than or equal to end
        rangeArray.push(i); // push i into the rangearray
      }
    } // return the array
    return rangeArray; 


} 

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// creating sum function that takes in an array of numbers
function sum(array) {
let arraySum = 0; // creating a sum variable and equating it to zero

for(let i = 0; i < array.length; i++){ // creating a for loop to iterate through input array
  arraySum += array[i]; // arraySum plus equals the elements of the input array

}
return arraySum; // return arraySum 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) { // creating reverseArray function that takes in an array
let reversedArray = []; // creating result array and setting it equal to an empty array
// creating for loop that starts at the last element of array and stops at 0, decrementing i
for(let i = array.length - 1; i >= 0; i--){
  reversedArray.push(array[i]); // pushing the elements from the back to front of array into the result arrary
}
// return array
return reversedArray; 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) { // creating reverse array in place function that takes in an array
  for (var i = 0; i < Math.floor(array.length / 2); i++) { // creating a for loop the start condition is zero but the stop condition the array length 
    //divided by two which is then rounded down to nearest interger using math.floor 
    let holdArray = array[i]; // creating array to hold values of the array
    array[i] = array[array.length - 1 - i]; // setting the values of array[i] to their opposite
    array[array.length - 1 - i] = holdArray; // making the opposite values into the original array
  }
  return array; // return array with values in place

}


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  let rest = null; 

  for(let i = array.length - 1; i >= 0; i--){
    rest = {value: array[i], rest: rest}; 
  }
    return rest; 
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output=[]) {
// base 
if(list.rest === null){
    output.push(list.value); 
  return output; 
}
// recursion 
output.push(list.value); 

return listToArray(list.rest, output); 

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////// 
// creating function prepend that adds and a given element to the front of the input list
function prepend(value, list) {
 // return value at the beginning 
  return {value, rest: list};

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
// determine if x and y are both not objects
if(typeof  x !== "object" && typeof y !== "object"){
  return x === y; 
}
// determine if etiehr x or y are not an object
if( typeof x !== "object" || typeof y !== "object"){
  return false; 
} // create arrays of objects keys
let xKeys = Object.keys(x); 
let yKeys = Object.keys(y); 
// determine if xKeys and yKeys have different lengths
if(xKeys.length !== yKeys.length){
  return false; 
}
// iterate through keys to check if they match 
for(let i = 0; i < xKeys.length; i++){

  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
  // call deepEqual(1, 1)
        return false; 
  }
}
return true; // if we make it to true we have two arguments that are deeply equal
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
