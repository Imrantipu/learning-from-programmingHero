// // Get value after click
// document.getElementById('id-name').addEventListener('click',function(){
//     // catch all class name
//     const friends = document.getElementsByClassName('class-name');

// // use effect after click in all classes like change bacground color
// for(const friend in friends){
//     friend.style.bacgroundColor = 'red';
// }
// // text in center using one id
// const thirdLine = document.getElementById('id-name');
// thirdLine.style.textAlign = 'center';
// // get the id to write new html div
// const newHtmlContainer = document.getElementById('id-name');
// // now creat new html div
// const friend = document.createElement('div');
// friend.innerHTML = `
// <h3 clas='friend-name'>New Friend</h3>
// `
// // now write new html after existing html as chile
// newHtmlContainer.appendChild(friend);
// // now add style from parent class
// friend.classList.add('parent-class');
// });


// // Milestone 6: 30-4 Template string, multiple line string, dynamic string
// const a = 20;
// const b = 30;
// const summary = `sum of ${a} and ${b}  is: ${a+b}`;


// // Milestone 6: Arrow function, multiple parameter, function body
// // function declaration
// function add(first, second){
//     const total = first + second;
//     return total;
// }
// // function expression
// const add1 = function add1(first, second){
//     const total = first + second;
//     return total;
// }
// // function expression with anonymous function
// const add1 = function (first, second){
//     const total = first + second;
//     return total;
// }

// // function expression with anonymous function with direct return value
// const add1 = function(first,second){

//     return first + second;
// }
// // arrow function 
// const add1 = (first, second) => first + second;



// Milestone 6: More Arrow functions and big arrow function

const multipy = (a,b) => a*b;
// no parameater arrow function
const getPi = () => 3.14;
// one parameater arrow function
const doubleIt = (num) => num *2;

// one parameater simplified version arrow function
const fiveTimes = num => num *5;

// multi line arrow function use return if needed
const doMath = (x,y,z) => {
    // similar function code
}

// Milestone 6: Spread operator, array max, copy arrays

// use of math max
const maxNumber = Math.max(56,45,999,47);
// find maximum number in a array using spread operator
const array = [45,567,777,888];
const arrayMaxNumber = Math.max(...array);
// make new array using spread operator
const newArray = [48,67,...array,67];


// Milestone 6: (advanced) Object and Array Destructuring

// object destructuring : variable name and property name same
const fish = {
     name : "King Hilsa",
     color : 'silver',
     price : 4000
}

const {name,color,price} = fish;

// Array Desstructuring 
const nayoks = ['sakib','bappi','raj'];
const [king,lost,notun] = nayoks;



// Milestone 6:  Access Value, nested object Optional chaining
// object in an array
const users = [ {id: 1, name: 'abul', job: 'doctor'} ]
// Access name object property in users array
const access = users[0].name;

// array in an object
const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
// first entering data object then data arrey first element then select job from inner object
const firstJob = data.data[0].job;

// using chain element with error using question mark
const firstJob = dat?.data[0]?.job


