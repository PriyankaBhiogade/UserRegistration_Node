let assert = require('assert');
let checkPattern =  require("./userRegistration");

describe("First Name validation Test",function() {
	it("givenFirstName_WhenProper_Should return true ",function(){
		let check = checkPattern.checkFirstName("Priyanka");
		assert.ok(check);
	});

	it("givenFirstName_WhenProper_Should return true ",function(){
		let check = checkPattern.checkFirstName("Pri");
		assert.ok(check);
	});

	it("givenFirstName_WhenAllCapLetter_Should return false ",function(){
                let check = checkPattern.checkFirstName("PRIYANKA");
                assert(check == false);
        });

	it("givenFirstName_WhenEmpty_Should return false ",function(){
		let check = checkPattern.checkFirstName("");
		assert(check == false);
	});

	 it("givenFirstName_WhenCapLetterIsMissing_Should return false ",function(){
                let check = checkPattern.checkFirstName("priyanka");
                assert(check == false);
        });

	 it("givenFirstName_WhenMidLetterIsCap_Should return false ",function(){
                let check = checkPattern.checkFirstName("priyanKa");
                assert(check == false);
        });

	it("givenFirstName_WhenTwoCapLetter_Should return false ", function(){
                let check = checkPattern.checkFirstName("pRiY");
                assert(check == false);
        });

	it("givenFirstName_WhenNull_Should return false ", function(){
                let check = checkPattern.checkFirstName(null);
                assert(check == false);
        });

	it("givenFirstName_WhenNameContainNumber_Should return false ", function(){
                let check = checkPattern.checkFirstName("1Pri13");
                assert(check == false);
        });

	it("givenFirstName_WhenSpecialSym_Should return false ", function(){
                let check = checkPattern.checkFirstName("pRiY@");
                assert(check == false);
        });
});

describe("Emial validation Test",function() {
        it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc@yahoo.com");
                assert.ok(check);
        });

	it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc-100@yahoo.com");
                assert.ok(check);
        });

	it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc.100@yahoo.com");
                assert.ok(check);
        });

	it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc111@yahoo.com");
                assert.ok(check);
        });

	it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc-100@abc.com");
                assert.ok(check);
        });

	it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc.100@abc.com.in");
                assert.ok(check);
        });

	it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc@1.com");
                assert.ok(check);
        });

        it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc@abc.com.com");
                assert.ok(check);
        });

         it("givenEmail_WhenProper_Should return true ",function(){
                let check = checkPattern.checkEmail("abc+100@abc.com");
                assert.ok(check);
        });

	it("givenEmail_When'@'SymbolMissing_Should return false ",function(){
                let check = checkPattern.checkEmail("abc111yahoo.com");
                assert(check == false);
        });

        it("givenEmail_WhenStartWith'.'_Should return false ",function(){
                let check = checkPattern.checkEmail(".abc-100@abc.com");
              assert(check == false);
        });

        it("givenEmail_WhenAtLastContain'1'Char_Should return false ",function(){
                let check = checkPattern.checkEmail("abc.100@abc.com.i");
              assert(check == false);
        });

        it("givenEmail_WhenStartWith'.'_Should return false ",function(){
                let check = checkPattern.checkEmail(".abc@1.com");
              assert(check == false);
        });

        it("givenEmail_WhenConatain'*,()'_Should return false ",function(){
                let check = checkPattern.checkEmail("abc().*@abc.com.com");
              assert(check == false);
        });

         it("givenEmail_WhenContain'%,*'_Should return false ",function(){
                let check = checkPattern.checkEmail("abc+100*@%abc.com");
              assert(check == false);
        });

	it("givenEmail_WhenContain'..'_Should return false ",function(){
                let check = checkPattern.checkEmail("abc..100@abc.com");
              assert(check == false);
        });

        it("givenEmail_WhenLastCharEndWith'.'_Should return false ",function(){
                let check = checkPattern.checkEmail("abc.@abc.com");
              assert(check == false);
        });

        it("givenEmail_WhenTIDContainDigit_Should return false ",function(){
                let check = checkPattern.checkEmail("abc@abc.com.1n");
              assert(check == false);
        });

        it("givenEmail_WhenContainMultipleTID_Should return false ",function(){
                let check = checkPattern.checkEmail("abc+100@abc.com.in.in");
              assert(check == false);
        });
});

describe("Mobile Number validation Test",function() {
        it("givenMobileNumber_WhenProper_Should return true ",function(){
                let check = checkPattern.checkMobileNum("09 9874563210");
                assert.ok(check);
        });

        it("givenMobileNumber_WhenProper_Should return true ",function(){
                let check = checkPattern.checkMobileNum("91 1425367485");
                assert.ok(check);
        });

        it("givenMobileNumber_WhenProper_Should return true ",function(){
                let check = checkPattern.checkMobileNum("11 0014253674")
                assert.ok(check);
        });

        it("givenMobileNumber_WhenContainLessThan10Digit_Should return false ",function(){
                let check = checkPattern.checkMobileNum("1425367");
                assert(check == false);
        });

        it("givenMobileNumber_WhenEmpty_Should return false ",function(){
                let check = checkPattern.checkMobileNum("");
                assert(check == false);
        });

	it("givenMobileNumber_WhenOnly10Digit_Should return false ",function(){
                let check = checkPattern.checkMobileNum("9874563214")
                assert(check == false);
        });

        it("givenMobileNumber_WhenContainChar_Should return false ",function(){
                let check = checkPattern.checkMobileNum("1425367a14");
                assert(check == false);
        });

        it("givenMobileNumber_WhenContainSpaceInBetween_Should return false ",function(){
                let check = checkPattern.checkMobileNum("91 1452 3698");
                assert(check == false);
        });

	it("givenMobileNumber_WhenContainLessThan10Digit_Should return false",function(){
                let check = checkPattern.checkMobileNum("91 145698");
                assert(check == false);
        });
});

