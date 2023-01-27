
// call - работает с примитивами/ возвращает и вызывает функцию
// apply - работает с массиовом/ возвращает и вызывает функцию
// bind - работает с примитивами/ Возвращает и НЕ возвращает функцию

// Call =========================

// const ihor = {
//         name: 'ihor',
//         age: 25,
    
//         info() {
//             console.log(this.name, this.age);
//         },
//     };

//     // ihor.info();

//     const sara = {
//         name: 'sara',
//         age: 45,
//     };


//     const andrij = {
//         name: 'andrij',
//         age: 40,
//     };

// sara.info();// ERROR


// ihor.info();
// ihor.info.call(sara);
// ihor.info.call(andrij);

//----------------------------------

// const ihor = {
//             name: 'ihor',
//             age: 25,
        
//             info() {
//                 console.log(this.name, this.age);
//             },
//         };

// function greet(clb) {
//     // console.log(`call callback clb: ${clb()}`);
//     clb();
// }

// greet(()=>{
//     ihor.info.call(ihor);
// });


// Apply =========================


// let arr = [100, 20, 50, 4, 1010];

// // const min = Math.min(100, 20, 50, 4, 1010);
// // const min = Math.min(1..toExponential.arr);

// const min = Math.min.apply(Math, arr);

// console.log(min);

// Bind ==========================

// const ihor = {
//                 name: 'ihor',
//                 age: 25,
            
//                 info() {
//                     console.log(this);
//                 },
//             };
// const andrij = {
//                 name: 'andrij',
//                 age: 44,
//             };

            
// ihor.info.call(andrij);
// let res = ihor.info.bind(andrij);
// console.log(res());

// ihor.info.bind(andrij)();


// const ihor = {
//     name: 'ihor',
//     age: 25,

//     info() {
//         console.log(this);
//     },
// };

// let btn = addEventListener('click', ihor.info.bind(ihor));

// let btn = addEventListener('click', ihor.info.call(ihor));

// let btn = addEventListener('click', ihor.info.bind(ihor)); !!! work after click on a button

// let btn = addEventListener('click', ihor.info); // Window



//===================

const ihor = {
    name: 'ihor',
    age: 25,

    info() {
        console.log(this);
    },
};