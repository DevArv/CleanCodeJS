// 1. Pronounceable and expressive names

//Not recommended
const yyyymmdstr = moment().format("YYYY/MM/DD");

//Recommended
const currentDate = moment().format("YYYY/MM/DD");

//2. Names without technical information

//Not recommended
let arrayNames = ["Alex", "Nathaly", "Salem"];

//Recommended
let namesList = ["Alex", "Nathaly", "Salem"];

//3. Use ubiquitous language

//Not recommended
getUserInfo();
getClientData();
getCustomerRecord();

//Recommended
getUser();