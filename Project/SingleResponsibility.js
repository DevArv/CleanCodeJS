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
        return true;
    }
}

//Definition of the child class UserIdentification
class UserId extends UserDetails {
    constructor(name, identification) {
        super(name);
        this.identification = identification;
    }

    changeId(identification) {
        if(this.verifyDetails()) {
            console.log('You can change the identification');
        }
        console.log('You cant change the identification');
    }
}

const userCreate = new UserDetails("Alex", '001');
userCreate.changeId(true);