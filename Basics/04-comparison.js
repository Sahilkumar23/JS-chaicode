// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("2" > 1);
// console.log("02" > 1);




// console.log(null > 0); //false
// console.log(null == 0);//false

// console.log(null >= 0); //true
//for above explaination is below:
/*  The reason is that an equality check(==) and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >=0 is true and null > 0 is false.

*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0)

//false in all cases



// ===


console.log("2" === 2); //checks for datatype also
