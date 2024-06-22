const accountId = 12345;
let accountEmail = "farrukh@gmail.com";
var accountPassword ="222222";

accountCity = "Lahore";

// accountId = 2; not allowed

accountEmail = "fg@gmail.com";
accountPassword = "567657655";
accountCity = "kamoke";
let accountState;

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);