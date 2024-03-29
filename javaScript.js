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

// Milestone 6: Array map to do one line loop magic

const add1 = (first, second) => first + second;
const result = add1(10,20);
console.log(result);

/* 
purpose: 
1. get an array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/
const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2)
const makeDouble2 = numbers.map(x => x * 2);
// console.log(makeDoubleDirect);
const fiveTimes = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTimes);

// Milestone 6: Map string array, array of objects map, foreach

// find first latter of all element like(T,T,T,T)
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
const firstLetters = friends.map(friend => friend[0]);

// find length of all element like [9,10,9,11]
const nameLengths = friends.map(friend => friend.length);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
// take all name and price from the object
const items = products.map(product => product.name);
const prices = products.map(p => p.price);

// for each to show all element it wont return
products.forEach(product => console.log(product));

// Milestone 6: Implement filter, find on an array of objects

// filter function stores value of implemented conditions
const numbers = [12, 5, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(n => n < 10);
const even = numbers.filter( num => num % 2 === 0);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];
const expensive = products.filter(product => product.price < 100);

// find function output only fist element of implemented condition
const fives = numbers.find(num => num % 5 === 0);
const cheap = products.find(product => product.price < 40000);
