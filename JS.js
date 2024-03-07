'use strict'
// const atsitiktiniai = (count, min, max) => {
//     const rands = [];
//     while (rands.length < count) {
//         const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
//         rands.push(randomNum);
//     }
//     return rands;
// };

// let numbersArray = atsitiktiniai(30, 5, 25);
// console.log(numbersArray)

// for (let i = 1; i <= 10; i++) {
//     const randomNum = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
//     numbersArray.push(randomNum);
// }

// console.log(numbersArray);


// const minusIndex = numbersArray.map((el, index) => el - index)
// console.log(minusIndex)

// let didesniUz15 = numbersArray.map((num, index) => (index % 2 == 0 && num > 15) ? "nulis" : num)
// console.log(didesniUz15)

// 4 pratybos

// let duomenys = {
//     id: "0001",
//     type: "donut",
//     name: "Cake",
//     ppu: 0.55,
//     topping: [
//       { id: "5001", type: "None" },
//       { id: "5002", type: "Glazed" },
//       { id: "5005", type: "Sugar" },
//       { id: "5007", type: "Powdered Sugar" },
//       { id: "5006", type: "Chocolate with Sprinkles" },
//       { id: "5003", type: "Chocolate" },
//       { id: "5004", type: "Maple" },
//     ],
//   };

  
// duomenys.topping.forEach(item => {
//     Object.keys(item).forEach(key => {
//         console.log(`${key}: ${item[key]}`)
//     })
// })

// const family = {
//     grandparents: {
//         grandma: 'Marge',
//         grandpa: 'Homer',
//     },
//     parents: {
//         mom: 'Lisa',
//         dad: 'Millhouse',
//     },
//     children: {
//         daughter: 'Anne',
//         son1: 'Peter',
//         son2: 'Bob',
//     },
// }


// for (let i in family) {
//     let members = Object.values(family[i]).join(' ')
//     console.log(`${i}: ${members}`)
// }

// let knygos = [
//     {
//       isbn: 9786098233346,
//       price: 7.99,
//       year: 2006,
//       title: "Bloga dukte",
//       pagecount: 250,
//     },
//     {
//       isbn: 9786098233391,
//       price: 7.99,
//       year: 2015,
//       title: "Mergina kuria jis pazinojo",
//       pagecount: 315,
//     },
//     {
//       isbn: 9786099609324,
//       price: 7.99,
//       year: 2019,
//       title: "Tapk ragana",
//       pagecount: 150,
//     },
//     {
//       isbn: 9786094792250,
//       price: 6.99,
//       year: 2007,
//       title: "Sfera",
//       pagecount: 450,
//     },
//     {
//       isbn: 9786094792335,
//       price: 9.99,
//       year: 2019,
//       title: "Mes susitinkame cia",
//       pagecount: 500,
//     },
//     {
//       isbn: 9786094273780,
//       price: 7.99,
//       year: 2019,
//       title: "Sunaikinimas",
//       pagecount: 509,
//     },
//     {
//       isbn: 9786098233483,
//       price: 12.99,
//       year: 2018,
//       title: "Artemide",
//       pagecount: 199,
//     },
//     {
//       isbn: 9786094273872,
//       price: 4.99,
//       year: 2015,
//       title: "Fondas ir imperija",
//       pagecount: 185,
//     },
//     {
//       isbn: 9786094273902,
//       price: 7.99,
//       year: 2019,
//       title: "Amzinybes fjordo pranasai",
//       pagecount: 333,
//     },
//     {
//       isbn: 9786094442742,
//       price: 5.99,
//       year: 2004,
//       title: "Bejegiai",
//       pagecount: 777,
//     },
//     {
//       isbn: 9786094442940,
//       price: 14.99,
//       year: 2019,
//       title: "Klajunai",
//       pagecount: 172,
//     },
//     {
//       isbn: 9786090404386,
//       price: 7.99,
//       year: 2015,
//       title: "Mergina, kuri pakliuvo i voratinkli",
//       pagecount: 356,
//     },
//   ];
  
// //   for(let i in knygos) {
// //     for(let a in knygos[i]) {
// //         console.log(`${a} --> ${knygos[i][a]}`)
// //     }
// //   }

// let masyvas = []
//   for(let i in knygos) {
//     if(knygos[i].year > 2015) {
//         masyvas.push(knygos[i].title)
//     for(let a in knygos[i]) {
//         }
//     }
//   }
// console.log(masyvas)

let familiesBill1 = [20, 70, 250]
let familiesTotalBill = []
let familiesTotalTip = []

function calcTip(familiesBill) {
    let tip = 0
    let totalBill = 0
    familiesBill.forEach(bill => {
        if (bill < 50){
            tip = bill * 0.2
            totalBill = bill + tip
        }
        else if(50 < bill && bill < 200) {
            tip = bill * 0.15
            totalBill = bill + tip
        }
        else {
            tip = bill * 0.10
            totalBill = bill + tip
        }
        familiesTotalBill.push(totalBill)
        familiesTotalTip.push(tip)
    })
}

calcTip(familiesBill1)
console.log(familiesTotalTip)
console.log(familiesTotalBill)