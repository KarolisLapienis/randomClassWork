"use strict"

// js skaidriu 4 dalis skaidre 6 pratybos 

// 1

for (let i = 1; i < 11; i++) {
    console.log(i)
}

// 2

for (let a = 10; a > 0; a--) {
    console.log(a)
}

// 3

for (let b = 1; b <= 10; b += 2 ) {
    console.log(b)
}

// 4

for (let c = 1; c <= 10; c++) {
    console.log(c * 2)
}

// 5

for (let d = 0; d < 5; d++) {
    console.log(d)
    if(d == 3) {
        break
    }
}

// 6

for (let e = 0; e <= 10; e++) {
    if(e === 7) {
        continue
    }
    console.log(e)
}