// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arrays){
let flattenedArray = arrays.flat(); 

return flattenedArray; 
}

  

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {

  for(let value = start; value = test(value); value = update(value)){
    body(value); 
  }
return loop; 
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every() {

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(string) {
// create arrays to store ltr and rtl
let ltr = []; 
let rtl = []; 

for(let i = 0; i < string.length; i++){
let script = characterScript(string.charCodeAt(i)); 

if (script !== null){
if(script.direction === "ltr"){
  ltr.push(script); // ltr += 1 
} else if (script.direction === "rtl"){
  rtl.push(script); // rtl += 1
}
}

}

if(ltr.length > rtl.length){
  return "ltr";
} else {
  return "rtl"; 
}

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
