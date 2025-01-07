 //Primitives and Non-Primitve data types(call by value and call by reference)


// 7 types : String, Number, Boolean, Null, Undefined, Symbol(used to make a value unique), BigInt
const score = 100 //Number datatype
const scoreValue = 100.3 //This is a floating-point number
// Both integerNumber and floatNumber are of type number.
const isLoggedIn = false;
const outsideTemp = null;

let userEmail;


const id =Symbol('123')
const anotherId =Symbol('123')

//Symbols are always unique, even if they have the same description. This is why id and anotherId are not equal, and the output of console.log(id === anotherId); is false.

console.log(id === anotherId); //false 

const bigNumber = 345050909099n
// BigInt: The BigInt type is used for arbitrarily large integers.
// n Suffix: The n suffix is used to create a BigInt literal. Without the n, the number would be treated as a regular Number type.








//Non-Primitve types or Referenced types********************************************************************************************************************
//Arrays, Objects, Functions






// Non-primitive types (like arrays, objects, etc.) typically return "object" when you use typeof. The only exception among non-primitives is functions, which return "function"



//"Function is "function object" in javascript
// When you use typeof on a function, it returns "function", not "function object". However, behind the scenes, functions in JavaScript are indeed objects (a special type of object). This means you can add properties to them like any other object

const Agents = ["Phoenix", "Brimstone", "KillJoy", "Cypher", "Deadlock"]; //Array datatype
let myObj={
   name: "Phoenix",
   role: "Duelist",
   
}//object data type

const myFunction = function(){
  console.log("Hello World!");
}
//Javascript is a dynamically typed language.

console.log(typeof myObj);
console.log(typeof myFunction);//output= function object


console.log(typeof outsideTemp); //datatype shown using "typeof" for null is object

console.log(typeof id);//symbol
console.log(typeof Agents);//object

/*
Return type of variables in JavaScript when typeof is used:
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

       */




 