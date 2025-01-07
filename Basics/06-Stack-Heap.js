 /*+++++++++++++++++++++++Stack & Heap Memory+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/ 
 
 
 
//Stack(Primitive Data Types) & Heap(Reference Data Types) Memory



 //Stack Memory




 //example of stack memory where the value of myAgent is copied to anotherAgent and then anotherAgent is changed to KillJoy
 //but the value of myAgent remains the same as Phoenix as it is a primitive data type and stored in stack memory
let myAgent = "Phoenix"

let anotherAgent = myAgent;
anotherAgent = "KillJoy";

console.log(myAgent); //Phoenix
console.log(anotherAgent); //KillJoy




//Heap Memory



//example of heap memory where the value of Phoenix is copied to Cypher and then the role of Cypher is changed to Sentinel
//but the role of Phoenix also changes to Sentinel as it is a reference data type and stored in heap memory
let Phoenix = {
    role: "Duelist",
    abilities: ["Blaze", "Curveball", "Hot Hands", "Run It Back"]
}

let Cypher = Phoenix;

Cypher.role = "Sentinel";

console.log(Phoenix.role); //Sentinel
console.log(Cypher.role); //Sentinel