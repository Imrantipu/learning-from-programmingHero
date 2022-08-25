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