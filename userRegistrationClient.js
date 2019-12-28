let userRegistraion = require("./userRegistration");
let read = require("readline-sync");

let firstName = read.question("Enter your First Name : ");
if(userRegistraion.checkFirstName(firstName)){
	console.log("Valid Firstname");
}else{
	console.log("Invalid Firstname");
}

let lastName = read.question("Enter your Last Name : ");
if(userRegistraion.checkLastName(lastName)){
        console.log("Valid Last Name");
}else{
        console.log("Invalid Last Name");
}

