let score = 33 // output = number
// let score1 = "33abc"
// let score1 = "33"
// let score1 = null
// let score1 = undefined; 
let score1 = true




// console.log(typeof score);
// console.log(typeof(score1));// output = string(before type conversion)

let valueInNumber = Number(score1);  //  (type conversion)
// console.log(valueInNumber);
// console.log(typeof(valueInNumber));

/*
After type conversion to Number using Number()
"33abc" => NaN,
"33" => 33,
null => 0,
undefined => NaN
true => 1, false => 0
*/




// let isLoggedIn = 1
// let isLoggedIn = 0;
// let isLoggedIn = "Sahil"
let isLoggedIn = "";

let booleanisLoggedIn = Boolean(isLoggedIn);
// console.log(booleanisLoggedIn);

/*

1 => true; 0 => false;
"" => false
"Sahil" => true
*/

let anyNumber= 33;

console.log(typeof anyNumber); // 33 is "number"

let stringNumber= String(anyNumber); //type conversion

console.log(stringNumber);

console.log(typeof stringNumber); // 33 "number" converted to "string"
