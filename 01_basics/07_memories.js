//2 types 
// stack(primitive) and heap(non-primitive)

let myName = "krish"

let anothername = myName
anothername = "mahtochris"

console.log(myName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "krish@google.com"

console.log(userOne.email)
console.log(userTwo.email);
