

//In Javascript an operator is a special symbol used to perform operations on operands, which are values and variables




/*

0. Different types of Operators

Arithmetic Operators 
Comparison Operators 
Logical Operators 
Assignment Operators 
Conditional Operators 
Ternary Operator 
*/

1. /*Arithmetic operators are used to perform mathematical operations between numeric operands.
Adds two numeric operands 
let x = a + b; 

 let a = 10; 
 let b = 7; 
x = 17;

 Subtracts the left operand from the right operand 

 let x = a - b; 

 let a = 10; 
 let b = 7; 
x = 3

  *    Multiplies the two operands 

let x = a * b

 let a = 10; 
 let b = 7; 
x = 70; 

  /	Divides the left operand by the right operand 

  let x = a / b; 

  let a = 100; 
  let b = 10; 

  x = 10; 
 %    Modulus or remainder operator, returns the remainder of two operands 

x % 2 = 0;


++ The Increment operator, increases the value of the operand by one 

let x = 3;
const y = x++;

// x = 4
// y = 3

– – The Decrement operator, decreases the operand value by one
There’s such things as pre and post increment 

let x = 3;
const y = x--;

x = 2; 
x = 1;  


x++, ++x, x ––, ––x


2. Comparison Operators compare two different operands and provide a boolean value of true or false
==  Compares the equality of two operands without considering type 
	x == 8	false;	
x == 5	true;	
x == "5"	true;

===  Strict equality operator compares operator with type 

	x === 5	true	
x === "5"	false


!=  Inequality operator compares the unequal of two operands 

	x != 8	true

!== strict inequality operator compares value and type

	x !== 5	false	
x !== "5"	true	
x !== 8	true

> returns a boolean value of true if the left side is greater than the right side 

	x > 8	false;


< returns a boolean value of true if the left side is less than the right side 

	x < 8	true

 >= returns a boolean value of true if the left side is greater than or equal to the right side 

 x >= 8	false

<= returns a boolean value of true if the leftside is less than or equal to the right side

	x <= 8	true

3. The Logical operators are used to combine two or more conditions


&& This is the AND operator, it checks to see if both conditions are true 

let c = 2 
console.log((c > 2) && (c < 2)); // false

|| The OR operator, checks to see if one of the conditions is true in a statement 

let c = 4; 
console.log((c > 2) || (c < 2)); // true 

! The NOT operator will reverse the boolean result of a operand or condition 

const a = true, b = false;

console.log(!a); // false
console.log(!b); // true

4. The Assignment operators helps to assign values to variables 
=    assigns the right operand to the left operand 
*/

 //+= sums up the left and the right operand and assigns the result to the left operand 

 let x = 10;

x += 5; 

x = 15; 

//-= subtracts the right operand value from the left and assigns the result to the left operand 


 let x = 10;
x -= 5; 

x = 5; 


//*= multiples the left operand to the right operand and assigns the value to the left operand 


 let x = 10;
 
x *= 5; 

x = 50; 

  //    /= divides the left operand from the right operand and assigns the value to the left operand 

 let x = 10;

x /= 5; 

x = 2 ;
//%= gets the remainder of the left operand by dividing from the right operand and assigns the result to the left operand 

let x = 10;
x %= 5


// 5. A unary operation is an operation with only one operand. This operand comes either before or after the operator. 
// Unary operators are more efficient than standard JavaScript function calls. Additionally, unary operators can not be overridden, therefore their functionality is guaranteed

//Unary plus (+)	Tries to convert the operand into a number  

//Unary negation (-)	Tries to convert the operand into a number and negates after

//Increment (++)	Adds one to its operand

//Decrement (--)	Decrements by one from its operand

//Logical NOT (!)	Converts to boolean value then negates it

//Bitwise NOT (~)	Inverts all the bits in the operand and returns a number

//typeof	Returns a string which is the type of the operand

// delete	Deletes specific index of an array or specific property of an object

//void	Discards a return value of an expression.




// 6. A Ternary operator is a special operator that assigns a value to a variable based on a condition it essentially is a shorter form of an if else statement 

//  It starts with a conditional expression followed 
// by a    ?   the second part will be executed if the statement is true, the third part is executed if the statement is false

let age = 24;

const beverage = age >= 21 ? "Beer" : "Juice"; // => will log beer to the console


