//"use strict";

let x = 1;
var y = 2;

var name1 = "Petras";  // var nenaudoti!!! naudoti let arba const

let name2 = "Jonas";

const nameConst = "Algis";

let name3;

name4 = "LALALA"

name3 = "Kazimieras";


console.log(x, y, name1, name2, nameConst);

console.log(name3);

console.log(name4);

console.log(name1 + "sumuse" + name2);

let sumusimas = name1 + "sumuse" + name2
console.log(sumusimas);

const Pi = 3.14;

console.log(2 * Pi + Pi);

console.log(name1 + " sumuse " + name2 + " !!!! " + (x + y) + " !!!! kartus !!!, " + name3 + " stebejo ir verke!")

console.log(`${name1} sumuse ${name2} !!!! ${x + y} !!!! kartus !!!, ${name3} stebejo ir verke!`);

// Strings, there are many string methods like length, slice, startsWith, endsWith and many more!!!

const foxString = "The quick brown fox jumps over the lazy dog."

foxString.length;

console.log(foxString.length)


// there are many ways to convert a string to number