//stack memory  (Primitive),  Heap memory (Non-Premitive)

let myYoutubeName = "farrukhgul.com";

let anotherName = myYoutubeName;
anotherName = "chaiorcode";

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    emial: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "farrukh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
