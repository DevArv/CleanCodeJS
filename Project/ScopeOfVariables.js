//Global scope
let age = 30

function userAge() {
    console.log(age);
}

userAge();

//Local scope
function greet() {
    let greeting = "Welcome dear user.."
    console.log("Greeting insede the block: ", greeting);
}

greet();
console.log(greeting);

//Block scope
{
    let animal = "Cat";
    var dog = "Tobbie";
    console.log('Animal inside the block: ', animal);
}

console.log('Dog of the block ', dog);
console.log('Animal of the block: ', animal);

//Static scope
const PI = 3.14;

function printPI() {
	console.log(PI);
}

function mainApp() {
	const PI = 3.14159;
	printPI();
}

mainApp();