// primitive datatype
// 7 types : string, null, boolean, number, undefined, symbol, bigInt

// reference datatype (non-primitive): Array, Functions, Objects

const score = 100 //number
const scoreValue = 100.3 //number
let isLoggedIn = false //boolean
let outsideTemp = null //null
let userEmail; //undefined
const userName = "krish" //string
const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId); //false reason => symbol not same

const bigNumber = 345653427975n //bigInt

const heros = ["superman", "naagraj", "doga"] // arrays

let myObj = {
    name: "krish",
    age: 18
} //object

let myFunction = function(){
    console.log("hello world");
} //function

console.log(typeof bigNumber); //result bigint
console.log(typeof outsideTemp); // result object
console.log(typeof myFunction); // result function
console.log(typeof myObj); //result object
console.log(typeof heros); //result object






