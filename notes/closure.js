/*
Here makeAdder returns the second function with x already built in.

The value of makeAdder(5) is the function x + y where x is defined as 5.
To actually get x + y, you must call the result of madeAdder(5) and pass in
a value for y.

makeAdder creates more functions. This is possible because of the concept of
CLOSURE. That is, when a function is created in JS the combination of both the
function itself and the lexical environment in which it was declared are stored.

add5 and add10 are both CLOSURES. In add5 x = 5, and in add10 x = 10.
*/
function makeAdder(x) {
    return function(y) {
        return x + y;
    }
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5);
console.log(add5(2));

console.log(add10);
console.log(add10(2));