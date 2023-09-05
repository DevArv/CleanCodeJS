//Not using rest
function students() {
    console.log("Nathaly " + "Alexander");
}

students("Ana"); //> This return Nathaly and Alexander, but will ignore the new name because its not part of the parameter list.

//Using rest
function students(...names) {
    console.log(names);
}

students("Ana", " Alexander", "Nathaly"); //> This return all the names of the students

//Spread operator is also to clone objects
const animal = {
    pet: 'Cat',
    name: 'Salem'
};

const spreadAnimal ={...animal};
console.log(spreadAnimal);

//Concatenate with spread operators
const activeStudent = ["Alexander"];
const newStudents = ["Ana", "Nathaly"];

const allStudents = [...activeStudent,...newStudents];
console.log(allStudents);