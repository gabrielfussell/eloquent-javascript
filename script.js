/*
Putting "use strict" at the top of your file or function
enables strict mode. This will eliminate some silent errors
and generally help you catch some errors early, though certainly
not all.
*/

function problemChild() {
    "use strict";
    
    for(i = 0; i < 10; i ++) {
        console.log("Happy happy");
    }
}

//problemChild();

//incorrectly writes to the global scope instead of creating a new person object
//strict mode prevents this
function Person(name) {
    this.name = name;
}

let ferdinand = Person("Ferdinand");
//console.log(name); 

/*
Aside from setting a breakpoint in the code editor,
you can also use the keyword "debugger".
*/
function numberToString(n, base = 10) {
    let result = "", sign = "";
    if(n < 0) {
        sign = "-";
        n = -n;
    }
    do {
        result = String(n % base) + result;
        //debugger;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}

//console.log(numberToString(13));

/*
Returning a special value is a good way to indicate an error.
Here if the user doesn't supply a number the function returns NULL.
Other common values are undefined or -1.
*/
function promptNumber(question) {
    let result = Number(prompt(question));
    if(Number.isNaN(result)) return null;
    else return result;
}

//console.log(promptNumber("How many trees do you see?"));

/*
If the function can already return every kind of value then
you may have to wrap the result in an object like the example
below.
*/
function lastElement(array) {
    if(array.length == 0) {
        return {failed: true};
    } else {
        return {element: array[array.length - 1]};
    }
}

//Throwing exceptions
function promptDirection(question) {
    let result = prompt(question);
    if(result.toLowerCase() == "left") return "L";
    if(result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if(promptDirection("Which way?") == "L") {
        return "a house";
    } else {
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch(error) {
    console.log("Something went wrong: " + error);
    console.log(error.message); //property that gives you the error message
    console.log(error.stack); //property that stores the stack trace
}