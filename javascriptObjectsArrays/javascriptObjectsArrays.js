// reduce

// const array = [1, 5, 11, 3]

// const total = array.reduce((accumulator, currentValue) => {
//     console.log(accumulator)
//     console.log(currentValue)
//     return accumulator + currentValue
// }, 0)

// console.log(total)








// const sk = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newSk = sk.filter(function(element, index) {
//     console.log(index)
//     console.log(element)
//     return element %2 === 0
// })
// console.log(newSk)













const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numFind = num.find((element) => element == /[0-9]/)

console.log(numFind)
