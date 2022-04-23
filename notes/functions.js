//Different ways to define functions

const square = function(x) {
    return x * x;
};

function square2(x) {
    return x * x;
}

/*
Arrow Function
Read as "this input produce this result"
*/
const power = (base, exponent) => {
    let result = 1;
    for(let i = 0; i < exponent; ++i) {
        result *= base;
    }
    return result;
};

/*
If there's only one parameter you can omit the parentheses.
If the function is a single expression you can also omit the
    curly braces.
The below two examples are both valid and produce the same result.
*/
const square3 = (x) => { return x * x; };
const square4 = x => x * x;

//if no parameters, you can use empty parentheses
const horn = () => { console.log("toot!"); };