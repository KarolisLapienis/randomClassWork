'use strict'

//1

let pazymiuVidurkis = 9;
let lankomumas = 'geras'

if (pazymiuVidurkis > 8 && lankomumas == 'geras') {
    console.log(`Jusu vidurkis yra ${pazymiuVidurkis} ir lankomumas ${lankomumas}, stipendija gausite!`)
}
else {
    console.log(`Deja, stipendijos negausite`)
}

//2

let x = 3
let y = 3
let z = 2

if (x < y && y < z) {
    console.log(`Skaicius ${x} yra mazesnis uz ${y} ir ${z}. skaicius ${y} yra didesnis uz ${x}, bet mazesnis uz ${z}.`)
}
else if (y < x && x < z) {
    console.log(`Skaicius ${y} xra mazesnis uz ${x} ir ${z}. skaicius ${x} yra didesnis uz ${y}, bet mazesnis uz ${z}.`)
}
else if (z < y && y < x) {
    console.log(`Skaicius ${z} yra mazesnis uz ${y} ir ${x}. skaicius ${y} yra didesnis uz ${z}, bet mazesnis uz ${x}.`)
}
else if (x == y && y < z) {
    console.log(`Skaicius ${x} yra lygus ${y} ir mazesnis uz ${z}.`)
}
else if (x == y && y > z) {
    console.log(`Skaicius ${x} yra lygus ${y} ir didesnis uz ${z}.`)
}
else if (x < y && y == z) {
    console.log(`Skaicius ${y} yra lygus ${z} ir didesnis uz ${x}.`)
}
else if (y < x && y == z) {
    console.log(`Skaicius ${y} yra lygus ${z} ir mazesnis ${x}.`)
}
else if (y < x && x == z) {
    console.log(`Skaicius ${x} yra lygus ${z} ir didesnis uz ${y}.`)
}
else if (y > x && x == z) {
    console.log(`Skaicius ${x} yra lygus ${z} ir mazesnis uz ${y}.`)
}
else {
    console.log(`Visi skaiciai yra lygus`)
}

//3

let atlyginimas = 1600
let statusas = 'vedes'

if (statusas == 'nevedes' && atlyginimas > 950) {
    console.log('Sveikiname, jus gavote paskola!')
}
else if (statusas == 'vedes' && atlyginimas > 1500) {
    console.log('Paskola bus suteikta')
}
else {
    console.log('Kai uzdirbsi daugiau, ateik, pakalbesim')
}

//3 su nestinimu

let name = 'John';
let salary = 1600;
let isMarried = true;

if(isMarried){
    if(salary >= 1500){
        console.log(`Sveikiname, jus gavote paskola ${name}`);
    }
    else{
        console.log('kai uzdirbsi daugiau, ateik, pakalbesim');
    }
}
else{
    if(salary >= 950) {
        console.log(`Sveikiname, jus gavote paskola ${name}`);
    }
    else{
        console.log('kai uzdirbsi daugiau, ateik, pakalbesim');
    }
}

//3 su switch

switch (true) {
    case salary >= 1500 && isMarried:
        console.log(`Sveikiname, jus gavote paskola ${name}`);
        break
    case salary >= 950 && !isMarried:
        console.log(`Sveikiname, jus gavote paskola ${name}`);
        break;
    default:
        console.log('kai uzdirbsi daugiau, ateik, pakalbesim');
}

//random stuff

let dayTime = 'evening';

switch(dayTime.toLocaleLowerCase()){
    case 'morning':
        console.log('Labas rytas!')
        break
    case 'afternoon':
        console.log('Laba diena!')
        break
    case 'evening':
        console.log('Labas vakaras!')
        break
    case 'naktis':
        console.log('Labanakt!')
    default:
        console.log('netinkama dayTime reiksme')
}