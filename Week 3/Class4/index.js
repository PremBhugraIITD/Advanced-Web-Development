import jwt from "jsonwebtoken";

const user = {
    username:"Prem Bhugra",
    accountNumber:1234567890,
}

const token = jwt.sign(user,"secret");
console.log("Token Value:",token);

const original = jwt.decode(token); //If a wrong jwt is passed as an argument (not in a valid jwt format), null is returned.
console.log("Original User:",original);

const decoded1 = jwt.verify(token,"secret");
console.log("With correct token and correct secret:",decoded1);
// const decoded2 = jwt.verify(token,"wonrgsecret");  //Error thrown: Invalid signature
// const decoded3 = jwt.verify("wrongtoken","secret"); //Error thrown: Invalid signature