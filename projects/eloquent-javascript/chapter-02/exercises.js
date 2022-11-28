
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) { // creating a function named triangles that takes in a number as a parameter 
  var hashTag = ""; // creating an empty string to hold the hashtags 
  let i = 0; // setting i equal to zero 
  
  while(i < num){ // creating a while loop, while i is less than the input number 
   console.log(hashTag += "#"); // log hashtag += the hashtag sign 
    i++; // increment i
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
  for(var i = 1; i <= 15; i++){ // creating a for loop that starts at 1 and will iterate to 15 
    if (i % 3 == 0 && i % 5 === 0) { // if i is divisible by 3 and 5 logging fizzbuzz to the console 
        console.log("fizzbuzz"); 
      } else if (i % 5 == 0 ) {// if i is divisible by 5 logging buzz to console 
      console.log("buzz");
      } else if (i % 3 == 0) { // if i divisible by 3 logging fizz to the console 
      console.log("fizz");
      } else {// logging the number to the console if not divisible by 3, 5 or both 
        console.log(i) 
      }
    }
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
    // creating a variable chessboard and setting it equal to an empty string 
      var chessboard = ""; // this will hold all the hastags that will create the board
    //creating a for loop i that will start at zero and end at the number parameter 
    for (var i = 0; i < number; i++) {   
      for (var j = 0; j < number; j++) { // creating for loop that will start a j zero and end at the input parameter 
      var sum = j + i; // creating a variable of sum which equals i + j
      if (sum % 2 == 0){ // creating an if else statement that if sum is an even number we'll push a space into chessboard   
          chessboard += ' '; 
       } else if (sum % 1 === 0){// if sum is odd we'll push a hashtag into chessboard 
          chessboard += '#';
        }
       
      }
      chessboard += "\n"; // creating a line break for chessboard to get our hashtags on different lines
    }
    
    console.log(chessboard); // logging the chessboard to the console
    
    
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
