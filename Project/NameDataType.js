//Arrays
//Not Recommended
// const user = ["Jose", "Pedro", "Sonia"];
const nameList = ["Jose", "Pedro", "Sonia"];
//Recommended
const users = ["Jose", "Pedro", "Sonia"];
const namesList = ["Jose", "Pedro", "Sonia"];

//Bool
//Not recommended
const animal = true;
const ride = false;
const hair = true;
//Recommended
const isAnimal = true;
const canRide = false;
const hasHair = true;

//Numerical
//Not recommended
const employee = 23;
//Recommended
const minEmployee = 20;
const maxEmployee = 25;
const totalEmployee = 23;

//Functions
//Not recommended
deleteUserFromDataBase();
saveThisUserInThisWindow();
//Recommended
deteteUser();
saveUser();
//Access, modification or predicate functions
getUser();
setUser();
isValidEmployee();

//Class
//Not recommended
class DataUser {}
class Info {}
//Recommended
class User {}
class Payment {}


//Exercise: Correctly name according to data type
//Arrays
//Not recommended
const x = [1, 2, 3, 4, 5]
const name = ['Cande', 'Alex', 'Mariana']
const colors = ['red', 'green', 'blue']
//Recommended
const numbers = [1, 2, 3, 4, 5];
const userNames = ['Cande', 'Alex', 'Mariana'];
const colorsList = ['red', 'green', 'blue'];

//Bool
//Not recommended
const active = true
const correct = false
const write = true
const user = false
//recommended
const isActive = true;
const isCorrect = false;
const canWrite = true;
const hasUser = false;

//Numerical
//Not recommended
let result = 3543
const y = 20
const PI = 3.14159 

let maxResult = 3543;
const minNumber = 20;
const totalPI = 3.14159;

//Functions
//Not recommended
sendAlertIfIsEmpty()
ifNotExistCreateNewObject()
password()
results()
//Recommended
sendAlert();
createObject();
isValidPassword();
getResults();

//Class
//Not Recommended
class School {}
class NewService {}
class ImplementNewAccount {}
//Recommended
class School {}
class Service {}
class Account {}