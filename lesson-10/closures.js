// let a = 10;
// function getNum(user) {
//     console.log(a);
//     // let user = 'andrij';



//     function sayHello() {
//         console.log(`hello ${user}`);
//     }
//     sayHello();
// }

// getNum(`ihor`);

//===========

// function calc(n) {
//     return function () {
// console.log(n + 10);
//     };
// }

// let res = calc(50);
// res = calc(400);
// res();

//===========================

// function calc(n) {
//         return function () {
//     console.log(n + 10);
//         };
//     }
    
//     let res = calc(50);
//     res = calc(400);
//     res();

//======================

// function increment(n){
//     return function(i){
//         return function(u){
//             console.log(n + i + u);
//         }
      
//     };
// }

// console.log(increment());

// let res = increment(10);
// res(50);
// console.log(res);


// let pizza = increment(5);
// pizza(40);


//Carrying====================

// increment(10)(5);
// increment(100)(90);

// increment(5)(8)(9);


//===========================
// function generateURI(domainName) {
//     return function (url) {
//         return `http://${url}.${domainName}`;
//     };
// }

// let fb = generateURI('com')('facebook');
// let tw = generateURI('com')('twitter');
// let uni = generateURI('net')('unian');
// console.log(fb);
// console.log(tw);
// console.log(uni);

//==========================
function frameworkManager () {
    let frameWrks = ['vue', 'Angular'];
    return {
        show(){
            console.log(frameWrks)
        },
        add(newItem) {
            frameWrks.push(newItem);
        }
    }
}

console.log(frameworkManager());

let manager = frameworkManager();
// console.log(manager);

manager.add('react');
manager.show();
