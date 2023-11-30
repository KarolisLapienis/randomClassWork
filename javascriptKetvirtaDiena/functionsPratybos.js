"use strict"

//Javascript skaidres 3 dalis 30skaidre pratybos

// 1


function countAvgGrade(grades) {
    let gradeCount = grades.length;
    let gradeSum = 0;
    for (let i = 0; i < gradeCount; i++) {
        gradeSum += grades[i];
      };
    let avgGrade = gradeSum / gradeCount;
    return avgGrade;

}
let myGrades1 = [10, 9, 10, 4, 2, 8]
let myAvgGrade1 = countAvgGrade(myGrades1)
console.log(myAvgGrade1)

// 2

function grantScholarship(avgGrade) {
    if (avgGrade >= 8) {
        console.log("Scholarship granted")
    }
    else {
        console.log("Scholarship denied, grades too low")
    }
}

let scholarshipStatus = grantScholarship(myAvgGrade1)

// 3

function inputName() {
    let humanName = prompt("Enter a name")
    return humanName
}

let enteredName = inputName()
console.log(enteredName)

// 4

let signInCount = 0

function greet(humanName) {

    console.log(`Welcome to the cosmos ${humanName}, this is sign in number ${++signInCount}!
    `)
}

let pasveikinimas1 = greet(enteredName)
let pasveikinimas2 = greet(enteredName)
let pasveikinimas3 = greet(enteredName)

// 5

function yearSalary(name, monthlySalary) {
    let yearSalary = monthlySalary * 12;
    let print = console.log(`${name} yearly salary is ${yearSalary}`)
    return print
}

const myName = "Karolis"
let myMonthlySalary = 1500
let myYearlySalary = yearSalary(myName, myMonthlySalary)
// 6

let fuelConsumption = 10

function tripPrice(range, fuelPrice) {
    let price = ((range / 100) * fuelConsumption) / fuelPrice
    return price
}

let kelionesKaina = tripPrice(1000, 1.5)
console.log(`Kelione kainuoja ${kelionesKaina} EUR`)

// 7

function isOddOrEven(year) {
    if (year % 2 == 0) {
        console.log(`${year} is even`)
    }
    else {
        console.log(`${year} is odd`)
    }
}

let someYear = 1992
let someYearOddOrEven = isOddOrEven(someYear)