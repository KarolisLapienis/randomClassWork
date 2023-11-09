"use strict";

//1
let text1 = "hello world!";
text1 = "hola!";
console.log(text1);

//2.1
let skaicius = 1;
console.log(skaicius);
skaicius++;

console.log(skaicius++);

//2.2
let didesnisSkaicius = 10;

didesnisSkaicius--;
console.log(didesnisSkaicius);

didesnisSkaicius -= 1;
console.log(didesnisSkaicius);

--didesnisSkaicius;
console.log(didesnisSkaicius);

//2.3
let x = "3";
console.log(typeof x);

x = 1*x
console.log(typeof x);

x = toString(x)
console.log(typeof x);

x = +x;
console.log(typeof x);

x = toString(x)
console.log(typeof x);

x = parseInt(x);
console.log(typeof x);


//3
let y = 5;
let z = y ** 3;
console.log(z);