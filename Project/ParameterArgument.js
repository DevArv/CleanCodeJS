//Parameters
function humanAge(cat) {
    console.log("This is the age of this cat in human age: " + cat * 7);
}
//Arguments
humanAge(10);

//Default parameters
function accessLog(user = 'visitor') {
    console.log(`Welcome back dear ${user}!`);
}

accessLog();
accessLog('Alexander');