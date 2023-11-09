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

let text1 = "The quick brown fox jumps over the lazy dog."
let weatherToday = "Very nice weather."
let text2 = "Very berry."

let concatenatedText = text1.concat(weatherToday, text2)

console.log(concatenatedText)

console.log(text1.length)

let textEndsWith = text1.endsWith("dog.")
console.log(textEndsWith)

let textIndexOf = text1.indexOf("quick")
console.log(textIndexOf)

let textMachWith = text1.match("jumps")
console.log(textMachWith)

let textRepeat = text1.repeat(3)
console.log(textRepeat)

let textReplace = text1.replace("fox","cat")
console.log(textReplace)

let textSearch = text1.search("dog")
console.log(textSearch)

let textSlice = text1.slice(3, 7)
console.log(textSlice)

let textSplit = text1.split("quick")
console.log(textSplit)

let textSubstring = text1.substring(5, 9)
let toUpper = text1.charAt(5).toUpperCase()
let subs = text1.substring(5, 9)
let concated = toUpper.concat(subs)
let text = text1.replace("quick", concated)
console.log(textSubstring)
console.log(text)


let text4 = "        55555     55555      "
let textTrim = text4.trim()
console.log(textTrim)


// there are many ways to convert a string to number
// Javascript yra tik vienas skaiciu tipas - number


