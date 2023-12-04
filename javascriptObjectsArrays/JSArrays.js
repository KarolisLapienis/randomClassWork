// // JS 5 dalies skaidriu pratybos 61 skaidreje

// "use strict"

// // 1

// let myArray = [1, 3, 5, 7]

// for (let i of myArray) {
//     console.log(i)
// }

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }

// myArray.forEach((number) => {
//     console.log(number)
// })

// // 2

// let sum = 0
// for (let i of myArray) {
//     sum += i
// }

// console.log(sum)

// // 3 

// let sakinys = 'Gera diena su vistiena'



// 4 

// let myArray = [1, 30, 5, 7, 11, 10]
// let minNum = Math.min(...myArray)

// console.log(minNum)

// let minNumIndex = myArray.indexOf(minNum)

// console.log(minNumIndex)

// let newArray = myArray.splice(minNumIndex, 3, [10, 10, 10], 20, 20, 20)

// console.log(newArray)
// console.log(myArray)


////////////////////// pratybos 2  /////////////////////////
// 1
let carMakes = ['BMW', 'Ferrari', 'Audi', 'Honda']
let carFoundBentley = carMakes.find(car => car === 'Bentley')
console.log(carFoundBentley)

if (!carFoundBentley) {
    carMakes.push('Bentley')
}

console.log(carMakes)

// 2
let prekes = ['vanduo', 'vanduo', 'lempute', 'vanduo']
let unikaliosPrekes = []

for (let preke of prekes) {
    if (unikaliosPrekes.indexOf(preke) === -1) {
        unikaliosPrekes.push(preke)
    }
}

console.log(unikaliosPrekes)

// 3

let vaisiai = ['bananas', 'mandarinas', 'citrina', 'mandarinas', 'bananas', 'mandarinas']
let unikalusVaisiai = []

for (let vaisius of vaisiai) {
    if (!unikalusVaisiai.includes(vaisius)) {
        unikalusVaisiai.push(vaisius)
    }
}

console.log(unikalusVaisiai)

// 4

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (sk of skaiciai) {
//     if (sk % 2 === 0) {

//     }
// }

const pakeistiSKaiciai = skaiciai.map((sk) => sk % 2 === 0 ? 'Jonas' : sk)

console.log(pakeistiSKaiciai)

let pakeistiSKaiciaiDidziosiosRaides = pakeistiSKaiciai.map((sk) => typeof sk === 'string' ? sk.toLocaleUpperCase() : sk)

console.log(pakeistiSKaiciaiDidziosiosRaides)
