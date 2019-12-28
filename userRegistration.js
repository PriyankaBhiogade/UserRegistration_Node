class UserRegistarion {

	checkFirstName(fName){
		let pattern = RegExp("^[A-Z]{1}[a-zA-Z]{2,}");
		return pattern.test(fName);
	}

	checkEmail(email){
                let pattern = RegExp("^[a-zA-Z0-9]([._+-]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$");
                return pattern.test(email);
        }

	checkMobileNum(mNum){
                let pattern = RegExp("^[0-9]{2}[[:space:]][0-9]{10}$")
                return pattern.test(mNum);
        }

	checkPassword(password){
		 let pattern = RegExp("[a-zA-Z]*[A-Z]+[a-zA-Z]*$")
                return pattern.test(password);
        }
}
module.exports = new UserRegistarion();

