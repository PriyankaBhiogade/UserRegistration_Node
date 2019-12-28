class UserRegistarion {

	checkFirstName(fName){
		let pattern = RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
		return pattern.test(fName);
	}

	checkEmail(email){
                let pattern = RegExp("^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$");
                return pattern.test(email);
        }
}
module.exports = new UserRegistarion();

