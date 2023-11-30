"use strict"

// //1

// let num1 = 0

// while (num1 < 10){
//     console.log(num1)
//     num1 ++
// }

// //2

// let num2 = 0

// while (num2 < 10){
//     let num2Square = num2 ** 2
//     console.log(num2Square)
//     num2 ++
// }

// // 3

// let num3 = 10

// while (num3 < 100){
//     if (num3 % 2 == 0) {
//         console.log(num3)
//     }
//     num3 ++
// }

// // 4

// let num4 = 1
// let num4Max = parseInt(prompt("Iveskite skaiciu"))
// while (num4 <= num4Max) {
//     console.log(num4)
//     num4++
// }

// // 5

// const numArray5 = [1, 2, 3]

// for (let num of numArray5){
//     console.log(num)
// }

// // 6

// const myName = "Karolis"
// let n = 5
// let index = 0
// while (index < n) {
//     console.log(myName)
//     index++
// }

// // 7

// let num7 = parseInt(prompt("iveskite skaiciu kurio daugybos lentele norite suzinoti"))
// let dauginamasis = 1
// while (dauginamasis < 11) {
//     let result = num7 * dauginamasis
//     console.log(`${num7}*${dauginamasis}=${result}`)
//     dauginamasis++
// }
// // 8

// const x = [-10, 10]

// for (let num of x) {
//     let result = (7 * num) + (5 * num) -3
//     console.log(result)
// }

// // 9

let egliuKiek = parseInt(prompt("iveskite egluciu kieki"))
let counter = 1
let h = 2
let heightSum = 0
while (counter <= egliuKiek) {
    let eglesAukstis = h * counter
    heightSum += eglesAukstis
    counter++
}

let heightAvg = heightSum / egliuKiek
console.log(heightAvg)
