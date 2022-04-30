//const SCRIPTS = require("./lang_scripts");

/***********************
Flattening
************************/
let arr = [
    ["clementine", "raspberry", "strawberry"]
    , ["iceberg lettuce", "kale", "spinach"]
    , ["brie", "asiago", "muenster"]
];

let full = arr.reduce((prev, next) => prev.concat(next));
//console.log(full);

/***********************
Your Own Loop
************************/
let obj = {
    name: "Florbo"
    , occupation: "Morbo"
    , age: 490
}
let cat = "Cheeto";
let snacks = [
    "Flamin' Hot Cheetos"
    , "Pretzels"
    , "Cheese"
]

/*
A for loop consists of the following parts:

for(Initialization; Condition; Repitition) {
    Body
}
*/

/*
for(let i = 0; i < snacks.length; ++i) {
    console.log(snacks[i]);
}
*/

function myLoop(start, test, update, body) {
    for(let value = start; test(value); value = update(value)) {
        body(value);
    }  
}

//myLoop(5, n => n > 0, n => n - 1, console.log);

/***********************
Everything
************************/
let numbers = [2, 4, 6, 8, 9];

function every(array, test) {
    for(let element of array) {
        if(test(element)) {
            continue;
        } else {
            return false;
        }
    }
    return true;
}

function every2(array, test) {
    let pass = array.some(element => test(element));
    let fail = array.some(element => !test(element));
    console.log("Do some pass the test: " + pass);
    console.log("Do some fail the test: " + fail);

    //Some passed the test
    if(pass === true) {
        if(fail === true) {
            //Some also failed the test, so it is false that all passed
            return false;
        } else {
            //Some did NOT fail the test, so it is true that all passed
            return true;
        }
    }
    //If some failed the test, then it is false that all passed
    return false;
}

let even = function(n) {
    return n % 2 === 0;
}

/*
let areSomeEven = numbers.some(e => even(e));
console.log(areSomeEven);
console.log(numbers.some(e => !even(e)));
*/

let petNames = ["Milo", "Moon Moon", "Crabby"];

//console.log("Did all elements pass the test? " + every2(petNames, element => element[0] == "M"));

/***********************
Dominant Writing Direction
************************/

function countBy(items, groupName) {
    let counts = [];
    for(let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if(known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function characterByScript(code) {
    for(let script of SCRIPTS) {
        if(script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function dominantDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterByScript(char.codePointAt(0));
        return script ? script.direction : "none" ;
    });

    let counts = scripts.map(s => s.count);
    let maxCount = Math.max(...counts);
    let maxCountIndex = counts.indexOf(maxCount);
    let domDir = scripts[maxCountIndex].name;

    /*
    console.log(scripts);
    console.log(counts);
    console.log(maxCount);
    console.log(maxCountIndex);
    console.log(domDir);
    */
   return domDir;
}

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(dominantDirection('الْعَرَبِيَّة'));
console.log(dominantDirection('ᠴᠢᠯᠦᠭᠡᠲᠦ ᠨᠡᠪᠲᠡᠷᠬᠡᠢ ᠲᠣᠯᠢ ᠪᠢᠴᠢᠭ ᠪᠣᠯᠠᠢsome english text'));
console.log(dominantDirection('ꡏꡡꡃ ꡣꡡꡙ ꡐꡜꡞ'));