//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function called objectVales that takes an object parameter 
function objectValues(object) {
let newArr = []; // creating a new variable newArr and assigning it an empty array 
// creating a for in loop to itearte through the input object 
for(var key in object){
    newArr.push(object[key]); // pushing the values of the keys of input object into the created array 
}
return newArr; // return new array filled with values from input object 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let newArr = []; // creating a new variable newArr and assigning it an empty array 
    // creating a for in loop to itearte through the input object 
    for(var key in object){
        newArr.push(key); // pushing the the keys of input object into the created array 
        
}
return newArr.join(" ") // joining the array to make it a string adding a space to the strings of the input key 
}
//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let newArr = []; // creating a new variable newArr and assigning it an empty array 
    // creating a for in loop to itearte through the input object 
    for(var key in object){
    if (typeof object[key] === "string"){
        newArr.push(object[key]); // pushing the the keys of input object into the created array 
        
}

}
return newArr.join(" ") // joining the array to make it a string adding a space to the strings of the input key 
}
//var objectOne = {a: "one", b: "two", ponies: "crayons", something: {}, dingle: "dangle"};


//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    let arr = "array"; // creating variable arr and setting it equal to a string of array 
    let obj = "object"; // creating variable and setting it equal to a string of object 
    if (Array.isArray(collection)){ // using array.isarray to determine is collection is an array 
        return arr; // if true return arr 
    }   else {
        return obj; // if not return object 
    }

}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function called capitalizeWord that takes in a string as a parameter 
function capitalizeWord(string) {
    let strArr = []; // creating variable strArr an setting it equal to an empty array 
    for (var i = 1; i < string.length; i++){// creating a for loop that will start at the 1 index and end at the length of the string 
        strArr.push(string[i]) // pushing the charaters of string into the new array 
    } // making the first letter index of string uppercase
    strArr.unshift(string[0].toUpperCase());
    return strArr.join(""); // joining the array together to create a string 

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function capitalize all Words which capitalize the first letter of every word in a string 
function capitalizeAllWords(string) {
    // creating variable new array which will split the string parameter
        let newArr = string.split(" ");
        for (var i = 0; i < newArr.length; i++) { // creating a for loop that starts at zero and ends at the last index of the new array 
            newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1); // uppercasing the index at character zero of new array and slicing the 1 index of the array 
        
    }
    let newString = newArr.join(" "); // joining the array back together to make a string 
    return newString; // returning new string
}
//console.log(capitalizeAllWords("one two three four"));

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating a function called welcomeMessage which takes an object as a parameter 
function welcomeMessage(object) {
// creating variable newMessage which will uppercase the zero character of the object name property and add that to the rest of the characters of the object name property
let newMessage = object.name.charAt(0).toUpperCase() + object.name.slice(1); 
// creating a new variable newString that equals welcome contcatnated with the newmessage string and "!"
let newString = "Welcome" + " " + newMessage + "!"; 
// return newString 
return newString;
}

//console.log(welcomeMessage({name: "bert"})); 
// QUnit.test("welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'", function(assert){
//     assert.equal(welcomeMessage({name: "bert"}), "Welcome Bert!");
//     assert.equal(welcomeMessage({name: "Charlie"}), "Welcome Charlie!");
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function profileInfo that will take in a object as a parameter
function profileInfo(object) {
 // creating a new variable which will be a string of the name property of the input object uppercased 
    let newString = object.name.charAt(0).toUpperCase() + object.name.slice(1); 
// creating a new variable which will be the string of the species property on the input object uppercased 
    let newString2 = object.species.charAt(0).toUpperCase() + object.species.slice(1); 
// creating a final string that will concat the name property and species properties with their first characters uppercased with is a between them 
    let newString3 = newString + " is a " + newString2; 
    //return the final string 
    return newString3; 
}



// QUnit.test("profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'", function(assert){
//     assert.equal(profileInfo({name: "jake", species: "dog"}), "Jake is a Dog");
//     assert.equal(profileInfo({name: "reggie", species: "dog"}), "Reggie is a Dog");
//   });
//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating a function called maybe noises that takes in an object as a parameter 
function maybeNoises(object) {
// creating an if/ else statement 
    if(object.noises.length > 0){ 
       return object.noises.join(" "); 
    } else if (object.noises.length === 0){
       return "there are no noises"; 
    } else { 
        return "there are no noises";
    }


}

// QUnit.test("maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'", function(assert){
//     assert.equal(maybeNoises({noises:["bark", "woof", "squeak","growl"]}), "bark woof squeak growl");
//     assert.equal(maybeNoises({noises: []}), "there are no noises");
//     assert.equal(maybeNoises({}), "there are no noises");

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function called hasWord that will take in a string of words and a single word as parameters 
function hasWord(string, word) {
// spliting the string parameter and making it into an array 
    let newArr = string.split(" "); 
    for(var i = 0; i < newArr.length; i++){ // creating a for loop that will loop through the new array 
        if (newArr[i] == word){ // if the value of the array loosely equals the input word return true 
            return true; 
        }
    }
// else return false 
    return false; 
}
// QUnit.test("hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.", function(assert){
//     var data = "This is a super awesome string of words";
//     assert.strictEqual(hasWord(data, "awesome"), true);
//     assert.strictEqual(hasWord(data, "words"), true);
//     assert.strictEqual(hasWord(data, "turtle"), false);
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function addFriend which will take in a string of name and an object as parameters 
function addFriend (name, object) {
// pushing the input name into the friends property of object 
    object.friends.push(name); 
// returning the object with name added 
return object; 
}
// QUnit.test("addFriend() : Should take a name and an object and add the name to the object's friends array then return the object", function(assert){
//     assert.deepEqual(addFriend("lester", {friends:[]}), {friends:["lester"]});
//     assert.deepEqual(addFriend("jimmy", {friends:["bobby","jones"]}), {friends:["bobby", "jones", "jimmy"]});
//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// creating function isFriend which will take in the parameters of name and an object 
function isFriend(name, object) {
if(object.hasOwnProperty('friends')){ // if the object has a friends property we will iterate through the friends property in the input object 
    for(var i = 0; i < object.friends.length; i++){
        if(object.friends[i] === name){ // if the value at in the friends array strictly equals the name input parameter return true 
            return true; 
        }
    }
} // else return false 
return false; 

}
// QUnit.test("isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise", function(assert){
//     assert.equal(isFriend("jimmy",{friends:["bobby", "ralf"]}), false);
//     assert.equal(isFriend("ralf",{friends:["bobby", "ralf"]}), true);
//     assert.equal(isFriend("chuck",{}), false);
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {


}


// QUnit.test("nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with", function(assert){
//     var data = [
//       {name: "Jimmy", friends:["Sara", "Liza"]},
//       {name: "Bob", friends:[]},
//       {name: "Liza", friends: ["Jimmy"]},
//       {name: "Sara", friends: ["Jimmy"]}
//     ];
//     assert.deepEqual(nonFriends("Jimmy", data), ["Bob"]);
//     assert.deepEqual(nonFriends("Bob", data), ["Jimmy", "Liza", "Sara"]);
//     assert.deepEqual(nonFriends("Sara", data), ["Bob","Liza"]);
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    
        var obj = object; // creating variable named obj and setting it equal to object 
        obj[key] = value; // updating the property in object to equal value 
        return obj; // returning new object 
        }
        

// QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
//     var data = {a: "one", b: "two", "hokey": false};
//     assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
//     var data = {a: "one", b: "two", "hokey": false};
//     assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
//     var data = {a: "one", b: "two", "hokey": false};
//     assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
//   });
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
// creating a for in loop to loop through the input object 
for(let key in object){
    // creating a for loop to iterate through the array
    for(let i = 0; i < array.length; i++){
    // creating if statement that if the key/value of object is equal to the value in the input array delete the property 
    if(array[i] === key){
        delete object[key]; 
    }
    }
} // returning the object revised 
return object; 
}


// /* global removeProperties */
// QUnit.test("removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
//     var data = {a: "one", b: "two", "hokey": false};
//     removeProperties(data, ["a","hokey"]);
//     assert.deepEqual(data, {b: "two"});

//     var data = {a: "one", b: "two", "hokey": false};
//     removeProperties(data, ["b"])
//     assert.deepEqual(data, {a: "one", "hokey": false});

//     var data = {a: "one", b: "two", hokey: false};
//     removeProperties(data, []);
//     assert.deepEqual(data, {a: "one", b: "two", "hokey": false});
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) { // converitng the array to a set 
    // the set will remove any diplicates in the input array 
let newArr = [...new Set (array)]
// return the new array without duplicates 
return newArr; 
}



// /* global dedup */
// QUnit.test( "dedup() : Should take an array and return an array with all the duplicates removed", function( assert ) {
//     var arrayOne = [1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"];
//     var arrayTwo = ["hello", "hello", "hello", "hello", "hello", "world", "hello", "world", "world", "world"];
//     assert.deepEqual(dedup(arrayOne), [1,2,3,4,5,"a","b","c"]);
//     assert.deepEqual(dedup(arrayTwo), ["hello", "world"]);
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}