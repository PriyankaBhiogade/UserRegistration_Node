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
		let pattern1 = RegExp("^[a-zA-Z0-9!@#$%^&*()<>-_+]{8,}");
		let pattern2 = RegExp("[A-Z]");
		let pattern3 = RegExp("[0-9]");
		let pattern4 = RegExp("^([a-zA-Z0-9])*[!@#$%^&*()<>-_+]{1}([a-zA-Z0-9])*$");
		if(pattern4.test(password)){
			return pattern1.test(password) && pattern2.test(password) && pattern3.test(password);
		}else{
			return false;
		}
	}

}
module.exports = new UserRegistarion();

