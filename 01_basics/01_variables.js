const accountId = 23345
let accountEmail = "krish@google.com"
var accountPassword = "12345"
accountCity = "Ramgarh"
let accountState

// accountId = 3 // not allowed

accountEmail = "kk@gmail.com"
accountPassword = "23346"
accountCity = "ranchi"

console.log(accountId);

/*
Prefer not to use var
because of issues in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])