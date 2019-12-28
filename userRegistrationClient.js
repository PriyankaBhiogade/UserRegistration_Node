let userRegistraion = require("./userRegistration");
let read = require("readline-sync");

let firstName = read.question("Enter your First Name : ");
if(userRegistraion.checkFirstName(firstName)){
	console.log("Valid Firstname");
}else{
	console.log("Invalid Firstname");
}

let lastName = read.question("Enter your Last Name : ");
if(userRegistraion.checkFirstName(lastName)){
        console.log("Valid Last Name");
}else{
        console.log("Invalid Last Name");
}

let email = read.question("Enter your Email : ");
if(userRegistraion.checkEmail(email)){
        console.log("Valid Email");
}else{
        console.log("Invalid Email");
}

let mobileNum = read.question("Enter your Mobile Number : ");
if(userRegistraion.checkMobileNum(mobileNum)){
        console.log("Valid Mobile Number");
}else{
        console.log("Invalid Mobile Number");
}


