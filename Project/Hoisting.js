//Hoisting
//Recommended
myAge();

function myAge() {
    let age = 30;
    console.log('This is my actual age: ', age);
}

//Not recommended
console.log('My pet is a: ', dog); //> Undefined
var dog = "Tobbie";
console.log(dog); //> Tobbie