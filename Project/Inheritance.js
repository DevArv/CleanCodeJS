//Without ES6
//Parent Class
function Transport(brand) {
    this.brand = brand;
}

Transport.prototype.declaration = function () {
    console.log("The brand of this transport is " + this.brand);
}

//Child Class
function Car(brand) {
    this.brand = brand;
}

Car.prototype = Object.create(Transport.prototype);

Car.prototype.writeCode = function (repair) {
    if(repair) console.log("The code of the computer of this car need to be repair");
    else console.log("The code of the computer of this car its working");
};

var car = new Car("Mazda");
car.declaration();
car.writeCode(false);

//With ES6 - Recommended.
//Parent Class
class Transport {
    constructor(brand) {
        this.brand = brand;
    }

    declaration() {
        console.log("The brand of this transport is " + this.brand);
    }
}

//Child Class
class Car extends Transport {
    constructor(brand) {
        super(brand);
    }

    writeCode(repair) {
        repair ? console.log("The code of the computer of this car need to be repair") : ("The code of the computer of this car its working");
    }
}

const car = new Car("Tesla");
car.declaration();
car.writeCode(true);
car.writeCode(false);