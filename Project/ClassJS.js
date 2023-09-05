//Without ES6 - constructor
function Person(name) {
    this.name = name;
}

var person = new Person("Alexander");
console.log(person.name);

//With ES6 - constructor
class Person {
    constructor(name) {
        this.name = name;
    }
}

var person = new Person("Nathaly");
console.log(person.name);

//Without ES6 - method
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return "Hello, my name is " + this.name;
}

var person = new Person("Ana");
console.log(person.name);
console.log(person.sayHello());

//With ES6 - method
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        return "Hello, my name is " + this.name;
    }
}

const person = new Person("Tito");
console.log(person.name);
console.log(person.sayHello());