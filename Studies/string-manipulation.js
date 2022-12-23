/*JavaScript provides various functions and methods to manipulate the value of a string. These methods help users to make 

changes with the string values, finding indexes of a particular character, or converting a string to lower/ upper case etc.

In JavaScript a string is a primitive data type (a data type which is not an object); 
it can consist of any series of characters inside single or double quotes. 
It can either be a constant or variable. Strings are used to store data in the form of text. 
They have zero-based indices. In JavaScript a string is not an array of characters but rather an object;
 and to change or manipulate a string some functions or methods are required.

Here are some of the most common forms of string manipulation-

 concat(), 
indexOf(), 
lastIndexOf(), 
charAt(), 
.length,  
replace(), 
split(), 
slice(), 
substring(), 
search(), 
toUpperCase(), 
toLowerCase(), 
trim()

The concat() method joins two strings and returns a new string. 

let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);

result = seafood; 

 The indexOf() method returns the position of the first occurrence of a value in a string.

 let text = "good morning everyone";
conole.log(text.indexOf("e")) = 13; 


The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.

 let text = "good morning everyone";
conole.log(text.indexOf("e")) = 20; 

The charAt() method returns the character at a specified index (position) in a string.

The index of the first character is 0, the second 1, ...

 let text = "good morning everyone";
conole.log(text.charAt(0)) = 'g; 

str.length
This method returns the length of the string. 
This can be common on the frontend for doing data validation on text field input, 
limiting the length of certain data objects, and much more.

let str = "matt";
console.log(str.length); // this outputs 4



replace(); 
This method takes an occurrence of a character in a string and replaces it with another character. 

const userInput = '414 555 5656';
console.log(userInput.replace(' ', '-')); // 414-555-5656

split();

This function returns an array of substrings. Here is an example of splitting a string by spaces:

const hello = "Hello World";
const helloWorldSplit = hello.split(' ');
console.log(helloWorldSplit); // ["Hello", "World"];
console.log(helloWorldSplit[0]); // "Hello"

slice(); 

The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

const str = "The morning is upon us.";
str.slice(-3); // 'us.'
str.slice(-3, -1); // 'us'
str.slice(0, -1); // 'The morning is upon us'
str.slice(4, -1); // 'morning is upon us'

substring() 
The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.

let text = "Hello world!";
let result = text.substring(1, 4);
result = 'ell; 

search()
the search() method matches a string against a regular expression

let text = "Mr.red house a blue house";
let position = text.search("blue");
position = 15; 

toUpperCase(), 
The toUpperCase() method converts a string to uppercase letters.

string.toUpperCase() 

string = 'hello"
string = HELLO; 

toLowerCase(),

The toLowerCase() method converts a string to lowercase letters.

string = 'HELLO"
string = "hello"; 


trim();
The trim() method removes whitespace from both ends of a string and returns a new string, 
without modifying the original string

const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
expected output: "Hello world!";
*/ 



