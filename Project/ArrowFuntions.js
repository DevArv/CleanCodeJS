//Example: 1
const hoursByDay = () => "A day have 24 hours";
console.log(hoursByDay());

//Example: 2
//Without arrow functions
[5, 10, 15].map(function (age){
    console.log(age * 7);
});

//With arrow functions
[5, 10, 15].map((age) => age * 7);

//Example: 3
//If the code is not implemented with the arrow functions,
//It should be with the normal use of function, as show below.
//This is not recommended anymore.

const counter = {
    number: 0,
    increase() {
        setInterval(
            function () {
                console.log(++this.number);
            }.bind(this), 1000
        )
    },
};

counter.increase();

//Recommended
const counterRecommended = {
    number: 0,
    increase() {
        setInterval(() => {
            console.log(++this.number);
        }, 1000);
    }
}

counterRecommended.increase();