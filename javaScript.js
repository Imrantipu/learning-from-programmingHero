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