'use strict';

//1

let number = 1;

switch (number){
    case 1:
        console.log('pirmadienis');
        break;
    case 2:
        console.log('antradienis');
        break;
    case 3:
        console.log('treciadienis');
        break;
    case 4:
        console.log('ketvirtadienis');
        break;
    case 5:
        console.log('penktadienis');
        break;
    case 6:
        console.log('sestadienis');
        break;
    case 7:
        console.log('sekmadienis');
        break;
    default:
        console.log('Neteisingai nurodytas skaicius')
}

//2

let menuo = 'lapkritis';

switch (menuo.toLowerCase()){
    case 'sausis':
        console.log(1);
        break;
    case 'vasaris':
        console.log(2);
        break;
    case 'kovas':
        console.log(3);
        break;
    case 'balandis':
        console.log(4);
        break;
    case 'geguze':
        console.log(5);
        break;
    case 'birzelis':
        console.log(6);
        break;
    case 'liepa':
        console.log(7);
        break;
    case 'rugpjutis':
        console.log(8);
        break;
    case 'rugsejis':
        console.log(9);
        break;
    case 'spalis':
        console.log(10);
        break;
    case 'lapkritis':
        console.log(11);
        break;
    case 'gruodis':
        console.log(12);
        break;
default:
    console.log('Irasytas ne menesio pavadinimas');
}