console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1)
// JS automatically preffered "2" as a number not a string
// but NOTE => DONT USE DIFF DATATYPES DURING COMPARISONS

console.log(null > 0);  // result false
console.log(null < 0);  // result false
console.log(null == 0); // result false
console.log(null >= 0); // result true
console.log(null <= 0); // result true

// the reason is that an equity check == and comparisions > < <= >= work diiferently
// comparisions convert null to a number, treating as 0
// thats why null >= 0 is true

console.log(undefined == 0); //false
console.log(undefined < 0);  //false
console.log(undefined <= 0); //false
console.log(undefined >= 0); //false
// reason 21 is not convertable
// but 22 23 24 is convertable but false. NOTE => dont compare different datatypes AVOID IT

// === is strict check , also check datatypes
 
console.log("2" == 2); // true
console.log("2" === 2); // false , not converted


