//let admin = 'ihor'
//let pass = 1234
//if (admin === 'ihor' && pas === 1234){
 //   console.log('Go')
//} else{
 //   console.log('stop')
//}

const { startTransition } = require("react/cjs/react.production.min")


const isFriend = true
const isOnline =true
const isDNd = false

if (isFriend && isOnLine && !isDND) {
    console.log('Hello')
} else{
    console.log('Away from chat')
}

const free = true
const basic = true
const pro = true

if (free && pro) {
    console.log('Hello new Abonent with MEGA INTERNET')
} else {
    console.log('Pay for FUN')
//}

let colorRed = 'red'
let colorYellow = 'yellow'
let colorGreen = 'green'

let sygnal = 'magenta'

if (sygnal === 'green') {
    console.log('Go')
} else if (sygnal === 'yellow') {
    console.log('Wait')
} else if (sygnal === 'red') {
    console.log('Mulfunction')
}

const leapYear = 2022
if (leapYear % 4 === 0) {
    console.log('leapYear', leapYear)
} else {
    console.log('Not')
}

//==================
//Ternary operator

//Boolean ? true : false

//if (leapYear % 4 === 0) {
  //  console.log(leapYear)
//}

//const orks = 100000
//if (orks > 100000) {
   //// console.log('Well done!')
//} else {
    //console.log('Destroy more')
//}
//D
//let res = (orks > 100000) ? console.log('Well done!') : console.log('Destroy more')

//console.log(res)


//Boolean ? true :false

//let colorRed = 'red'
//let colorGreen = 'green'
//let colorYellow = 'yellow'


let sygnal = 'magenta'

if (sygnal === 'green') {
    console.log('Go')
} else if (sygnal === 'yellow') {
    console.log('Wait')
} else if (sygnal === 'red') {
    console.log('Mulfunction')
}

switch(sygnal){
case 'green':
    console.log('Go')
}

for (A; B; C;)

A - loop start
B - Boolean
C - Cancel

// for (A; B; C;) {}

//for(let i = 0; i <= 10; i +=1) {
  //  console.log('Kolo', i)
//}

//for ( let i = 0; i <=10; i+= 1) {
  //  if (i % === 0) {
    //    console.log(i)
    //}
//}

//for (let i = 0; i <= 10; i += 1) {
  //  if (i % 2 !== 0) {
      //  console.log(i)
    //}
//}

const year = 2000
const currentYear = 2022

for (let i = year; i <= currentYear; i) {
    if (i % 4 === 0) {
        if (i === 2012) {
            continue
        }

        if (i === 2004) {
            continue
        }


        console.log(i)
    }
}


//const year = 2000
////const currentYear = 2022

//for (let i = year; i <= currentYear; i) {
   // if (i % 4 === 0) {
       // if (i === 2012) {
          //  break
       // }

        //console.log(i)
    //}
//}

//for (let i = 100; i >= 0; i -= 1) {
  //  console.log(i)
//}

//=================
A
while (B) {
    // loop body
    C
}

let i = 0

while(i <= 10){
    console.log(i)
    i += 1
}

for (let i = 0; i <= 10; i += 1){
    console.log(i)
}

//================
//A
//do {
    // loop body
   //// C
//} while (B);

do {
console.log(i)
i += 1
} while (i < 10);




let user ='Sara'


console.log(
   '%c${user}',
   'color: green; 
)
console.error(user)
console.log(user)
console.dir(user)
console.table(user)
console.info(sara)