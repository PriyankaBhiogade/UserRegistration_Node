class UserRegistarion {

	checkFirstName(fName){
		let pattern = RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
		return pattern.test(fName);
	}
 
	checkLastName(lName){
                let pattern = RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
                return pattern.test(lName);
        }
}
module.exports = new UserRegistarion();
