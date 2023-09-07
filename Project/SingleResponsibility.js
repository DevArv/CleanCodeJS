//Not recommended because has more than one responsability
class UserId {
    constructor(name, identification) {
        this.name = name;
        this.identification = identification;
    }

    changeIdentification(identification) {
        if(this.internationalIdentification()) {

        }
    };

    internationalIdentification() {
    };
}

//Recommended
//Class UserDetails
class UserDetails {
    constructor(name){
        this.name = name;
    };

    verifyDetails() {
        return false;
    }
}

//Definition of the child class UserIdentification
class UserInfo extends UserDetails {
    constructor(name, identification) {
        super(name);
        this.identification = identification;
    }

    changeDetails(identification) {
        if(this.verifyDetails()) {
            console.log("You can change the identification");
        }else {
        console.log("You are not allowed to change the details");
        }
    }
}

const newUpdate = new UserInfo("Alex", "001");
newUpdate.changeDetails();