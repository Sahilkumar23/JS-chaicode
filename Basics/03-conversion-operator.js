let score = 33 // output = number
// let score1 = "33abc" // output = NaN
// let score1 = "33" // output = number
// let score1 = null // output = 0
// let score1 = undefined; // output = NaN
let score1 = true




// console.log(typeof score);
// console.log(typeof(score1));// output = string(before type conversion)

let valueInNumber = Number(score1);  //  (type conversion) //Number conversion
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

let booleanisLoggedIn = Boolean(isLoggedIn); //Boolean conversion
// console.log(booleanisLoggedIn);

/*

1 => true; 0 => false;
"" => false
"Sahil" => true
*/

let anyNumber= 33;

// console.log(typeof anyNumber); // 33 is "number"

let stringNumber= String(anyNumber); //type conversion      //String Conversion

// console.log(stringNumber);

// console.log(typeof stringNumber); // 33 "number" converted to "string"



// ************************** Operations ************************************

let value = 3;
let negValue = -value;
// console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);



let str1 = "hello"
let str2 = " sahil!"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2")
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2")

console.log((3 + 4) * 5 % 3);

// console.log(true); // output=true
// console.log(+true); //output=1
// console.log(+"");//output=0

let counter = 100
counter++;
console.log(counter);
// ++counter;  //Prefix and Postfix operators

//link to study
//hhtps://tc39.es/ecma262/multipage/abstract-operations.



