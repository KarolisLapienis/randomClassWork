"use strict"
// for of pratybos. js 4 skaidres pratybos 12-toj skaidrej.

// 1

const numbers = [2.34, 54, 67.77, 1.99]
let sum = 0
for (let element of numbers) {
    sum += element
}
console.log(sum)


// 2

const words = ["Geros", "dienytes", "skanios", "kavytes"]

for (let element of words) {
    let wordsCount = 0
    for (let raide of element){
        wordsCount++
    }
    console.log(`${element}=${wordsCount}, ${element.length}`)
}

