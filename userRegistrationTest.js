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

	it("givenFirstName_WhenAllCapLetter_Should return true ",function(){
                let check = checkPattern.checkFirstName("PRIYANKA");
                assert(check);
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
