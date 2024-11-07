//Primitives and Non-Primitve data types(call by value and call by reference)


// 7 types : String, Number, Boolean, Null, Undefined, Symbol(used to make a value unique), BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;

let userEmail;


const id =Symbol('123')
const anotherId =Symbol('123')

console.log(id === anotherId); //false 

const bigNumber = 345050909099n





//Non-Primitve types or Referenced types
//Arrays, Objects, Functions

//all non primitives return "function" for "typeof" and function returns "function object"


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
Return type of variables in JavaScript
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


 /*+++++++++++++++++++++++Stack & Heap Memory+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++      


 