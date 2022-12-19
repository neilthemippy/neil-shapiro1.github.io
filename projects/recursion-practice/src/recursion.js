// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
// creating recursion function factorial that takes in a number and creating outcome parameter
var factorial = function(n, product=1) {
  // base 
if(n < 0){ // if n less than zero return 
  return null; 
} else if(n === 0){ // if number equals zero return 1
  return 1; 
} else if(n === 1){ // if number equals 1
// ??
return product; 
  }
  // recursion // product times equals n
  product *= n; // product = product * n 
// call factorial , product
  return factorial(n - 1, product); 

};
/*
invoke factorial(5)
// BASE if(5 === 0) //false 
product = 5
return factorial(4, 5)
BASE IF (4 === 0) // false 
product = 20 
return factorial(3, 20)
    if( 3 === 0) // false 
  return factorial(2, 60)
  if( 2 === 0) // false
  */



// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array, output=0) { // creating function sum that takes in an array and result parameter
// base 
  if(array.length === 0){ // stop condition if the length of the array equals zero 
// return result
      return output; 
  }
// recursion 
// output equals the element of array
output += array[0]; 
// call array and slice it off every call, with output
return sum(array.slice(1), output)


};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even. // creating function that takes a number parameter
var isEven = function(n) {
// base 
if(n === 1){ // stop if n equals 1
 return false;  // return false 
} else if(n === 0){ // if equals zero return true
 return true; 
}
// recursion 
// edge case number will be postive using Math.abs
// call isEven which will minus 2 until it equals 1 or 0 
return isEven(Math.abs(n) - 2); 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

  var sumBelow = function(n) { // creating a recursive function that takes in a number 
    // base 
    if (n === 0) { // when n equals zero return zero
      return 0;
    }
    // recursion
  
    if (n > 0) { // if number is above zero
      return n - 1 + sumBelow(n - 1) // return number - 1 plus the function call of n - 1
    } else { // if number is negative
      return n + 1 + sumBelow(n + 1) // return number + 1 plus the function call of n + 1 
    } 
    
  }; 


// };

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y, output=[]) { // creating recursive function with the parameters x,y and an result parameter


  // base 
  if (x === y - 1) { // stop if x === y - 1, return output
    return output; 
  } else if (y === x - 1) { // stop if y === x - 1, return output
    return output;
  }else if (x === y) { // stop if x === y return empty array 
    return [];
  }
  // recursion
  if (x < y) { // if x is less than y push x + 1 and call range until it hits base 
    output.push(x + 1)
    return range(x + 1, y, output)

  } else if (x > y) { // if x is greater than y push x - 1 into output and call range until it hits
    // base 
    output.push(x - 1)
    return range(x - 1, y, output)
  }
  
}

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// base case 
var exponent = function(base, exp) {
  if (exp < 0){
    return exponent(base, exp + 1) / base;
  }
  if (exp === 0){
    return 1
  } else {
    return base * exponent(base, exp - 1);
  }
  };


// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
// base 
if(n === 1){ // if n equals 1 at the base then n is a power of 2 
  return true; 
} else if(n === 0){ // if n equals zero at the base it is not a power of 2
  return false; 
}
// recursion 
// call the function and divide n by 2 until it reaches zero or 1 
return powerOfTwo(n / 2); 


};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string){ 
//base
// if string length is equal to zero
if(string.length === 0){
    return ""; // return string 
} else { 
  
  // recursion
// return the last character of string plus reverse(string.substring(0, string.length - 1); 
                                                      //^^ the second to last character of string
return string.charAt(string.length - 1) + reverse(string.substring(0, string.length - 1));

}

};




// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    newstring = string.toLowerCase().replace(" ", "") // create new string variable to replace all spaces and make all characters lowercase 
    // base 
    if (newstring.length < 2) { // if the newsring variable gets under two then string is a palindrome 
      return true;
    }
    // recursion
    if (newstring[0] === newstring[newstring.length - 1]) { // if the zero index of string is equal to the last index of string
      return palindrome(newstring.slice(1, newstring.length - 1)); // call the funtion slicing the first index and the last index until we hit base
    }
    return false;
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {


};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').
var multiply = function(x, y) {
if(y === 0){ 
  return 0; 
} 
else if (y === 1){
  return x
}
if(y > 0){ 
  return x + multiply(x, y - 1); 
} else { 
  return -x + multiply(x, y + 1); 
}


};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2, outcome=false) {
 // base case string lengths are equal to zero return true
  if (str1.length === 0 && str2.length === 0){
            return true; 
  } 

if(str1[0] !== str2[0]){ // if str 1 is not equal to str 2 return outcome
  return outcome; 
} else {
return compareStr(str1.slice(1), str2.slice(1), outcome); // if they are equal call the function until both strings hit base case 
} 
};


// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, output=[]){
// base case string.length === 0 return output array 
if(str.length === 0){
  return output; 
}
output.push(str[0]); // push the zero index of string in output array
// call createArray until stringlength is zero 
return createArray(str.slice(1), output);

};

// 17. Reverse the order of an array
var reverseArr = function (array, output=[]) {
// base case input array.length === 0 return output array
if(array.length === 0){ 
  return output; 
}

output.push(array[array.length - 1]); // pushing the last value of array into output
return reverseArr(array.slice(0, -1), output); // call reversearray slicing the array from the back until array.length === 0

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output=[]) {
  //base case if length input equals zero return ouput array
  if(length === 0){
    return output; 
  }
  // recursion
  output.push(value); // push value into output array
// call buildList until length equals 0 
  return buildList(value, length - 1, output); 
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, count=0) {
  // base if array.length === 0 return output number 
  if(array.length === 0){ // if the length of the array equals zero return count 
    return count; 
  } 
  if(array[0] === value){ // if the element of array is equal to value count increases by 1
    count += 1; 
  }
return countOccurrence(array.slice(1), value, count); // call countOccurrence until input array is sliced to zero 
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output=[]) {
// base case 
  
  if (array.length === 0){ //if array length is zero return the output
   return output;
  }
  //recursion
  var output = rMap(array.slice(1, array.length), callback) // creating variable for output and assigning it the the result of calling the rMap funciton while slicing the array to base 
  output.unshift(callback(array[0])); // pushing the result of the call back on current array element into output 
   return output;

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  if(n < 0){ // base case if number is less than zero return null
    return null;
  }
  //if n is 0 return 0
  if(n === 0){
    return 0;
  }
  //if n is 1 return 1
  if(n === 1){
    return 1;
  }
  //nthFibo is n -1 + n -2 
  return nthFibo(n - 1) + nthFibo(n - 2);  // call number - 1 + number - 2 until number reaches the base case

};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input, output=[]) {
//base case if input array length equals zero return ouput array 
if(input.length === 0){
  return output
}
// recursion
output.push(input[0].toUpperCase()) // push the zero element of index uppercased into the output array
return capitalizeWords(input.slice(1), output); // call capitalizeWords until input array.length === 0
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array, output=[]) {
// base case if array .length equals zero
if(array.length === 0){
  return output; // return the output
}
output.push(array[0].charAt(0).toUpperCase() + array[0].substring(1));  // push the zero element at its first character uppercased plus the rest of the characters of the first element

return capitalizeFirst(array.slice(1), output) // call captialize first until we reach the base case
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj={}) {
  // base case if string.length equals zero return object
  if(str.length === 0){
    return obj;

  } 
if (obj[str[0]]){ // object includes the key of the index of string value increments 
  obj[str[0]] += 1
} else { // if object doesnt include the key of index of string set it equal to 1
  obj[str[0]] = 1; 
}

// call letterTally until str length equals zero
 return letterTally(str.slice(1), obj)
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output=[]) {
// base case if list equals zero return the ouput
  if(list.length === 0){ 
  return output; 
}
if(list[0] !== list[1]){ // if list at zero index does not equal list at the one index
  output.push(list[0]) // then push the value at the zero index into output
}

return compress(list.slice(1), output) // call compress until list is sliced to zero
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output=[]) {
  // base case 
 if(array.length === 0){ // if array length equals return output
  return output 
 }


 if(array[0] === 0 && array[1] === 0){ // if the current index equals zero and the next index equals zero
  return minimizeZeroes(array.slice(1), output); // call the function and slice off the index
 }
 output.push(array[0]); // if not push the current index into the new array 
 
// call the function until we hit base case
return minimizeZeroes(array.slice(1), output);
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output=[]) { // creating  output parameter
  if(array.length === 0){ // if array length equals zero return new array 
    return output;
    } // if array at zero element is greater than zero 
  if(array[0] > 0){ // push element at index 0 into new array 
    output.push(array[0])
  }else{  // if not zero make index negative and push into the output array
    output.push(array[0] * -1);
  }
   // if the 1 index is less than zero 
  if(array[1] < 0){ // push the element at the 1 index into output
    output.push(array[1]);
  }else{ // if its postivive make it negative by multiplying by negative one 
    output.push(array[1] * -1);
  }
  // call alternateSign silciing 2 until we reach base case
  return alternateSign(array.slice(2), output);
    
}; 



// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  if (str.length === 0) return ''; // creating if statement if string length equal to zero return empty string 
  let tempStr = numToText(str.substring(0, str.length-1)); // establishing a temporary string
  let replace; // creating switch statement for each case of number re-assigning it to the word form 
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  }
  return tempStr + replace; // adding temporary string to replace variable

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
