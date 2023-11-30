"use strict"

// Javascript skaidres 3 dalis skaidre 35 pratybos

// 1

function sum2Numbers(num1, num2) {
    let sum = num1 + num2
    return sum
}

let myNum1 = parseInt(prompt("Enter the first number"))
let myNum2 = parseInt(prompt("Enter the second number"))
let mySum = sum2Numbers(myNum1, myNum2)
alert(mySum)

// 2

function numSquare() {
    let num = parseInt(prompt("Enter a number"))
    let square = num ** 2
    return square
}

let myNumSquare = numSquare()
console.log(myNumSquare)


// 3

function isNumberPositive(num) {
    if (num > 0) {
        return `${num} is a positive number`
    }
    else if (num < 0) {
        return `${num} is a negative number`
    }
    else {
        return `${num} is neither a negative nor a positive number`
    }
}

console.log(isNumberPositive(1))

// 4


// 5

function isOddOrEven(number) {
    if (number % 2 == 0) {
        console.log(`${number} is even`)
    }
    else {
        console.log(`${number} is odd`)
    }
}

let someNumber = 15
let someNumberOddOrEven = isOddOrEven(someNumber)

// 6

function arDalijasiBeLiekanos(num1, num2) {
    let answer
    if (num1 % num2 == 0) {
        answer = `Number ${num1} divides by ${num2} without residue`
    }
    else {
        answer = `Number ${num1} divides by ${num2} with residue`
    }
    return answer
}

let number1 = parseInt(prompt("Enter a number"))
let number2 = parseInt(prompt("Enter a second number"))
let myAnswer = arDalijasiBeLiekanos(number1, number2)

console.log(myAnswer)

// 7

function whichNumberIsBiggest(num1, num2, num3) {
    let biggestNumber = Math.max(num1, num2, num3)
    return biggestNumber
}

let myNumber10 = 5
let myNumber20 = 10
let myNumber30 = 15
let myBiggestNumber = whichNumberIsBiggest(myNumber10, myNumber20, myNumber30)

console.log(myBiggestNumber)

// 8

function inputNames() {
    let number = parseInt(prompt("Enter a number"))
    let sudetis = 15 - 5 + number
    return sudetis
}

console.log(inputNames())