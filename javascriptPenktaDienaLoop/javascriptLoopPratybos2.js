"use strict"

// js skaidriu dalis 4 pratybos is 7 skaidres


let person = {
    name: "Sam",
    age: 33,
    job: "officer",
}

for (let key in person) {
    console.log(key)
}


let person1 = {
    name: "Sam",
    age: 33,
    job: "officer",
    hobbies: {
        1: "swimming",
        2: "reading",
        3: "skating",
    }
}

for (let key in person1.hobbies) {
    let hobby = person1.hobbies[key];
    console.log(`my hobby is ${hobby}`)
}

for (let key in person1) {
    if (key === "hobbies") {
        for (let hobby in person[key]) {
            console.log(`my hobby is ${person1[key][hobby]}`)
        }
    }
}
// 1

const leFamily = {
    me: 33,
    father: 55,
    mother: 53,
    sister: 32,
    brother1: 28,
    brother2: 25,
    aunt: 61,
    uncle: 60,
    cousin1: 37,
    cousin2: 37,
    grandfather1: 79,
    grandmother1: 77,
    grandfather2: 81,
    grandmother2: 80,
    cat: 3,
    dog: 7,
    parrot: 2,
  };


for (let property in leFamily) {
    let count = 0
    console.log(leFamily[property])
    if (leFamily[property] > 65) {
        console.log(++count)
    }
}

// 2
