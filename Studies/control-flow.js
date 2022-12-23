// CONTROL FLOW
// 1
//Control flow is in which runs a computer interprets code. Computers typically read code from left to right, programmers will often add conditionals and loops that will change the structure of the control flow. 

// 2 If Statement
// There are four types of conditions will execute a certian block of code, based on if its true or false. The first statement in a conditional chain is called the if statement. 

// the if statement executes a certain block of code based on whether a condition in the if statement is true or false. 
// here in the code below we have created a function with an if statement in the body
var printWeather = function(weather){
    //Our printWeather function takes in a string as a parameter
      if(weather === "cold"){ // this line we have our condtion in the parantheses that will execute certain code below if the condition is true
        console.log("its chilly outside")
      }// because our arugment for this print weather function is a string of "cold" and "cold" strictly equals "cold" our function will print the string of "its chilly outside to the console"
    }
    console.log(printWeather("cold")); // => "its chilly outside to the console"
    
    // 3 
    //ELSE IF
    // an else if statement allows for another block of logic to be read and executed based on the first if statement being truthy or falsey
    
    var printWeather = function(weather){
    // here we have added a else if statement to the body of our printWeather function. When the first if statement is not executed the next conditional else if statement is evaluated and executed based on the logic being truthy or falsey
      if(weather === "cold"){ 
        console.log("its chilly outside")
      } else if (weather === "hot"){
          console.log("its steaming out there")
      } 
    }
      // because our argument in printWeather function is a string of hot and hot === hot 
    console.log(printWeather('hot'));// <= prints its steaming out here
    
    
    
    // 4 ELSE
    // the else statement adds another layer to a conditional statement if a certain block of code is not executed in the previous statement based on truthy or falsey an else statement will excute block of code 
    
    var printWeather = function(weather){
    // here we have added another layer to the body of our printWeather function we have added an else statement that executes based on the IF statment being truthy or falsey
      if(weather === "cold"){ 
        console.log("its chilly outside")
      } else if (weather === "hot"){
          console.log("its steaming out there")
      } else { 
        console.log("its beautiful")
      }
    }
      // 
    console.log(printWeather('warm'));// <= prints its beautiful
    
    // 5 
    // SWITCH STATEMENT
    // The last conditional statement control flow we have not covered yet is a switch statement. A switch statement allows for many different blocks of code to be executed based on a certain case
    
    var month; 
    switch (getMonth) {
      case 0:
        month = "January";
        break;
      case 1:
        month = "Feburary";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      default: = "Unknown Month";
    }
    // the logic of this switch statement based on the case, if a certain case occurs month will equal a particular string of the month
    