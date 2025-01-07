// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);



// console.log("2" > 1); //true
// console.log("02" > 1); //true


//**************************************************************** */



//"<" and ">" converts null to a number, treating it as 0
// That's why 0>0 is false and 0<0 is also false
console.log(null > 0); //false
console.log(null < 0); //false


console.log(null == 0); //false
console.log(null >= 0); //true
//for above explaination is below:
/*  The reason is that an equality check(==) and comparisons > < >=
<= work differently.
Comparisons convert null to a number, treating it as 0.
That's why null >=0 is true and null > 0 is false.

*/






//************************************************************************* */

//******************************************* */
// let a=null;
// let b=Number(a);
// console.log(b); //0
// console.log(b == 0);//true

//******************************************* */



console.log(null == undefined); //true
//explaination: Using the loose equality operator (==), null and undefined are considered equal
console.log(null=== undefined); //false
//because null and undefined are not equal in the strict equality operator (===)




//******************************************* */



// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0)

//false in all cases



// ===


console.log("2" === 2); //checks for datatype also
