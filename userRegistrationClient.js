let userRegistraion = require("./userRegistration");
let read = require("readline-sync");

let firstName = read.question("Enter your First Name : ");
if(userRegistraion.checkFirstName(firstName)){
	console.log("Valid Firstname");
}else{
	console.log("Invalid Firstname");
}

