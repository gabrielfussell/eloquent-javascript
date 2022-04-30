// function problemChild() {
//     "use strict";
    
//     for(i = 0; i < 10; i ++) {
//         console.log("Happy happy");
//     }
// }

// //problemChild();

// //incorrectly writes to the global scope instead of creating a new person object
// //strict mode prevents this
// function Person(name) {
//     this.name = name;
// }

// let ferdinand = Person("Ferdinand");
// //console.log(name); 

// function numberToString(n, base = 10) {
//     let result = "", sign = "";
//     if(n < 0) {
//         sign = "-";
//         n = -n;
//     }
//     do {
//         result = String(n % base) + result;
//         //debugger;
//         n = Math.floor(n / base);
//     } while (n > 0);
//     return sign + result;
// }

// console.log(numberToString(13));

