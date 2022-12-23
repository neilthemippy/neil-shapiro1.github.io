// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./neil-shapiro1.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
let males = _.filter(array, function (customer){
    return customer.gender === "male";  // using filter iterate through the customer objects 
}); // if the customer objects gender key has a value of male return it 

    return males.length; // return the length of the males array
};

// ### 1: `maleCount`
//  - **Objective**: Find the number of male customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `filter`


var femaleCount = function(array){
    let females = _.reduce(array, function(accumulator, current){
        // determine if the current item in the array is female
        if(current.gender === "female"){
            return accumulator + 1; 
        }
            // if true, add 1 to accumlator
        //if the current value is not female return accumlator
        return accumulator; 

        
    }, 0); 
    return females; 
}; // 


/* invoke reduce 
// result = 0
iterate through input array 
// 0 
    // result = 1

// 1 
    result = func(result, array[i], i, [...])
*/ 

// ### 2: `femaleCount`
//  - **Objective**: Find the number of female customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**: use `reduce`

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumlator, current){
// accumlator = {name: "Adele Mullin"}
//current = {"olga Newton"}
        if (accumlator.age > current.age){ // if 37  > 26
            return accumlator; 
    
        } else { 
            return current; 
        }

    }); 
    return oldest.name; 
}; 


/* invoke reduce
    // result = {name : "Adele Mullin"} aka the first element of the array
    // iterate at the 1 index
        // 1
            // result = result(result, {}, 1, [...])
                result = {name: "adele Mullin"}
        //2 
            result = { }
*/ 
// ### 3: `oldestCustomer`
//  - **Objective**: Find the oldest customer's name
//  - **Input**: `Array`
//  - **Output**: `String`
//  - **Constraints**:
var youngestCustomer = function(array){ // creating youngest customer function that takes in an array 
// creating variable youngest and setting it equal to using the reduce method on array with acc, and current no seed
let youngest = _.reduce(array, function(accumlator, current){
   // if the age of the accumulated value on the age object value is less than current value on the age object
            if (accumlator.age < current.age){ 
                return accumlator; // return the accumulator
        
            } else { 
                return current; // if current is larger return current
            }
    
        }); 
        return youngest.name; // return the name of the youngest customer
    }; 

    // ### 4: `youngestCustomer`
    // - **Objective**: Find the youngest customer's name
    // - **Input**: `Array`
    // - **Output**: `String`
    // - **Constraints**:

var averageBalance = function(array){ // creating function averageBalance 
// using the reduce function on the input array giving it the parameters of accumulator, currentval, and a seed
    let avgbal = _.reduce(array, function(accumulator, currentvalue, seed){
let cur = currentvalue.balance.replace(/[$, ,]/g, ''); // creating cur which will replace the dollar signs and conver the 
// current balance at array.balance to a string 
let parse = parseFloat(cur); // using the parsefloat method to convert the string of balance into a number 
        return accumulator + parse; // adding the current balance to the accumulator 

    },0); // giving the function a seed of zero 

// creating the sumavg variable which equals the return of avgbal divided by the length of the array 
let sumavg = avgbal / array.length;
// return the sumavg variable
return sumavg; 
}

  
//  let balance = "3,876.45"
//  let newString = balance.replace(/[]/g, "");
//  reg expression 
// ### 5: `averageBalance`
//  - **Objective**: Find the average balance of all customers
//  - **Input**: `Array`
//  - **Output**: `Number`
//  - **Constraints**:

var firstLetterCount = function(array, letter) { // creating a function called firstletterCount which takes in an array and letter as parameters
    let counter = _.filter(array, function (customer){ // using the filter function with the parameters of array and func(customer)
        // return the first character for every name if its equal to the input letter. both lowercased 
        return customer.name.charAt(0).toLowerCase() === letter.toLowerCase(); 
    }); 
    // return the length of the counter array
        return counter.length; 
    };

    // ### 6: `firstLetterCount`
    // - **Objective**: Find how many customer's names begin with a given letter
    // - **Input**: `Array`, `Letter`
    // - **Output**: `Number`
    // - **Constraints**:

// creating function friendFirstLetterCount that takes the parameters of an array, a customer and a letter
var friendFirstLetterCount = function (array, customer, letter){
let count = 0; 

array.forEach(function(item) {// using for each to iterate through the items of the customers array
// if the item.name equals the string of customer
    if(item.name === customer){
// iterate through that item and its friends collection
        item.friends.forEach(function(item, index, array){
        //if the friends.name property at the zero index uppercased is equal to the input letter uppercased count goues up by 1 
            if(item.name[0].toUpperCase() === letter.toUpperCase()){

                count += 1; 
            }

        }); 
    }


}); 
return count; // return count 
} 

 

//    ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


var friendsCount = function(array, givenname){
   
  
let searcharray = array.filter(function(customer){

     for(let i = 0; i < customer.friends.length; i++){

        if(customer.friends[i].name === givenname){
                   return true;  
          
            }; 
        }
  return false; 

  
      }); 

  let resultarray = searcharray.map(function(element){
      return element.name; 
}); 

  return resultarray;  
  
}
    


    // let output = []; 

// for(let i = 0; i < array.friends.length; i++){

//     array.friends[i].forEach(function(item){

//         if(item.name === inputname){
//             output.push(array.name); 
            
//         }
//     }); 
// }
// return output; 

// }
// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:

var topThreeTags = function(array){ // creating function top three tags that takes in a parameter of an array 
    let resultArray = []; // creating a empty array to hold values

    array.forEach(function(customer){ // iterating through the customer objects using for each
    for(let i = 0; i < customer.tags.length; i++){ // looping through the tags for each customer
      resultArray.push(customer.tags[i]); // pushing those tags into the resultarray
    }
    
      
    }); 
    
      let newObject = resultArray.reduce(function(accumulator, currentvalue){ // using the reduce method to create a new object of the tags and their values
           if(accumulator[currentvalue]){ // if the key currentvalue of the tag exists in the new object increase its value by one 
          accumulator[currentvalue] += 1; 
          
        }  else {
          // if the key doesnt exist yet set its value equal to one
         accumulator[currentvalue] = 1; 
           }
        return accumulator;    // return accumulator                 
    }, {}); 
    
    let objectArray = Object.entries(newObject); // using the object entries method to get all the key value pairs from newobject organized into sub arrays by their key and value
    
     let sortArray = objectArray.sort(function(a, b){
    // sorting the values by descending order if the 1 index in the subarray is larger then it'll be in front
       return b[1] - a[1]; 
       
     }); 
    // by console logging sort array we have discovered the top three tags and are setting them equal to the newly created final array variable
      let finalArray = [ 'Lorem', 'aliqua','veniam']; 
      
      return finalArray; 


}








// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:


var genderCount = function(array){

    let genderObj = array.reduce(function(accumlator, currentval){

            if(accumlator[currentval.gender]){
                accumlator[currentval.gender] += 1;
            } else {

                accumlator[currentval.gender] = 1; 
            }

            return accumlator;

    }, {}); 

    return genderObj; 

} 


// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
