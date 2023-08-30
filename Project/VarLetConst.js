//Use of var
var age = 30

{
    console.log('Value inside the block', age)
    var age = 24
}

console.log('Value outside the block', age);
age = age * 2
console.log('Value changed', age);

//Use of let
let age = 30;

{
    console.log('Value inside the block', age);
    let age = 24;
}

console.log('Value outside the block', age);
age = age * 2;
console.log('Value changed', age);

//Use of const
const PI = 3.14159;
PI = 3.1416; //The value of const cannot be changed, so this line of code will cause an error.
console.log(PI);