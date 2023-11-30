"use strict"
// // while pratybos
// //1
// let skaicius = 1
// while (skaicius < 11) {
//     console.log(skaicius++)
// }

// //2

// let skaicius1 = 10
// while (skaicius1 > 0) {
//     console.log(skaicius1--)
// }

// //3

// let skaicius2 = 1
// while (skaicius2 < 11) {
//     if (skaicius2 % 2 !== 0){
//         console.log(skaicius2)
//     }
//     skaicius2++
// }

// // do while
// // 1 ne iki galo padariau
// let sk = 0;
// let suma = 0;
// let vidurkis = 0;
// let skaic = 0;
// do {
//   skaic = parseInt(prompt(`Iveskite skaiciu`));
//   if (skaic >= 0) {
//     sk++;
//     suma += skaic;
//   } else {
//     vidurkis = suma / sk;
//     console.log(vidurkis);
//     break;
//   }
// } while (skaic >= 0);

// // 2
// let virsutineRiba = 10
// let randomNum = Math.floor(Math.random() * virsutineRiba)
// let guess
// console.log(randomNum)
// do {
//     guess = parseInt(prompt(`Spekite skaiciu nuo ${0} iki ${virsutineRiba}`))
//     if (guess === randomNum){
//         alert("atspejote")
//     }
//     else {
//         alert("bandykite dar karta")
//     }
// } while (guess !== randomNum)


