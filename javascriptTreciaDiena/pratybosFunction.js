//1
let myGrades = [10, 9, 10, 9, 10, 9]

function countAvgGrade(grades) {
    let gradeCount = grades.length;
    let gradeSum = 0;
    for (let i = 0; i < gradeCount; i++) {
        gradeSum += grades[i];
      };
    let avgGrade = gradeSum / gradeCount;
    return avgGrade;
}

let avgGrade = countAvgGrade(myGrades)
console.log(avgGrade)

//2


/////////////////////////////////////////////////////////////////////
function countSum(num1, num2) {
    let sum = num1 + num2;
    return sum;
}

let mySum = countSum(3, 7);
console.log(mySum)

///////////////////////////////////////
function countSum1(num1 = 3, num2) {
    let sum = num1 + num2;
    return sum;
}

let mySum1 = countSum1(undefined, 17);
console.log(mySum1)

//////////////////////////////////////////////////////////////////////

