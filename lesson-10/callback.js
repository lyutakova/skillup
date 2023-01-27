
// const myFunc = ()=>{
//     console.log('hello tetiana');
// }

// // myFunc();


// // const greetUser = (myFunc)=>{}
// const greetUser = (clb)=>{
//     console.log(clb);
//     clb();
// }
// // greetUser(10);
// // greetUser([1, 2, 3, 4]);
// // greetUser(true);
// greetUser(myFunc);


//===== Calculator =======================
// function sum(a, b){
//     return a + b;
// }

// function sub(a, b){
//     return a - b;
// }

// function mult(a, b){
//     return a * b;
// }

// function div(a, b){
//     return a / b;
// }

// function calculate(a, b, callback) {
//     // console.log(a);
//     // console.log(b);
//     // console.log(callback);
//     return callback(a, b);
// }

// let res = calculate(10, 5, sum);
//  res = calculate(10, 5, div);
// console.log(res);

// function calculate(a, b, clb){
//     return clb(a, b)
// }

// calculate(10, 20, (a, b)=>{
// console.log(a + b);
// })

//==============Event listeners===============
// let btn = document.addEventListener('click', ()=>{
//     console.log('click the button');
// })


// function  onButtonClick() {
//     console.log('click the button');
//     document.body.style.background = 'magenta';
// }
// let btn = document.addEventListener('click', onButtonClick)
