// this - окнтекст вызова

// function greet(){
//     console.log(`hello`, this);
// }

// greet();
// window.greet();
// this.greet();


// this in objects and methods ==========

// const ihor = {
//     name: 'ihor',
//     age: 25,

//     info() {
//         console.log(this.name, this.age);
//     },
// };

// const marina = {
//     name: 'marina',
//     age: 35,

//     info() {
//         console.log(this.name, this.age);
//     },

//     greet(){
//         this.info()
//     }
// };

// ihor.info();
// // marina.info();
// marina.greet();



// const ihor = {
//     name: 'ihor',
//     age: 25,

//     info() {
//         console.log(this.name, this.age);
//     },
// };

// function greet(clb){
// console.log(`callback clb: ${clb()}`);
// }

// greet(ihor.info); // lost context whe any function passed as callback. @this@ lost from @ihor@


// // this in arrow functions =========================

// const info = ()=>{
//     console.log('Global scope info', this);
// };

// info();
// window.info();// !!! window.info() is not a function
// this.info(); // window.info() is not a function


// const ihor = {
//     name: 'ihor',
//     age: 25,

//     info() {
//         console.log(this.name, this.age);
//     },
// };

// ihor.info = () => {
//     console.log('Global scope info', this);
// }

// // console.log(ihor);
// ihor.info();


// This in event listeners =====================

// let btn = addEventListener('click',()=>{
//     document.body.style.background = 'teal';
//     console.log(this);
// });

//========= This in ES5 Classes ================

// function User(name, age){
// this.name = name;
// this. age = age;
// }

// const ihor = new User('ihor', 25)
// const sweta = new User('sweta', 23);
// console.log(ihor);
// console.log(sweta);