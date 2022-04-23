/****************************
higher order functions take another function as an argument
****************************/

function repeat(n, action) {
    for(let i = 0; i < n; ++i) {
        action(i);
    }
}

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

//console.log(labels);

//return value is a function where the value of n is 'baked in'
function greaterThan(n) {
    return m => m > n;
}

const greaterThan10 = greaterThan(10);
//console.log(greaterThan10(11));

function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    }
}
//noisy(Math.min)(4, 5, 6);

//foreach
//["ferrets", "elephants", "tapirs"].forEach(element => console.log(`It's a bunch of ${element}!`));


/****************************
FILTER

A built in method for arrays that filters based
    on the provided function (defined here as its own function as an example).
The resulting array can be any length.
****************************/
function filter(array, test) {
    let passed = [];
    for(let element of array) {
        if(test(element)) passed.push(element);
    }
    return passed;
}

//returns all living scripts
//console.log(filter(SCRIPTS, script => script.living));

//using the standard syntax; return all top-to-bottom scripts
let arr = SCRIPTS.filter(s => s.direction == "ttb");


/****************************
MAP

A built in method for arrays that transforms("maps") the original
    array based on the provided function.
The resulting array will be the same length as the original, but in
    the new format.
****************************/
function map(array, transform) {
    let mapped = [];
    for(let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

//here filter and map are used together to get just the names of all right-to-left dead scripts
let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl" && !s.living);
let rtlNames = rtlScripts.map(s => s.name);
//console.log(rtlNames);


/****************************
REDUCE

A built in method for arrays that reduces all the elements
    of the original array down to one value, based on the
    provided function.
Always returns only one result.
If you provide a start value, start is set to "currnent" and
    the first element of the array is set to "element".
If a start value is not provided, "current" is the first
    element of the array and "element" is the second.
****************************/
function reduce(array, combine, start) {
    let current = start;
    for(let element of array) {
        current = combine(current, element);
    }
    return current;
}

let sum = reduce([1, 2, 3, 4], (a, b) => a + b, 0);
//console.log(sum);

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

/* 
This combines two higher order functions to return the object of
the language with the most characters (in the sample SCRIPTS array)
*/
let mostCharacters = SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
})

//compute the average of an array
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}

/* 
Combine all three of the above functions to give the average age of dead and living scripts
*/
let avgDead = Math.round(average(SCRIPTS.filter(s => !s.living).map(s => s.year)));
let avgLiving = Math.round(average(SCRIPTS.filter(s => s.living).map(s => s.year)));

//console.log(avgDead);
//console.log(avgLiving);

/****************************
CHARACTER CODES

Javascript characters are encoded as a sequence of 16 bit numbers,
    called a code unit.
Originally all characters were only one code unit, but that
    wasn't enough for all int'l characters.
Therefore some characters are made up of two code units, like emoji.
charCodeAt gives you the code unit, which may or may not
    correspond to the full character.
codePointAt DOES give the full unicode character, but its
    argument is an index into the sequence of code units.
    So you will still need to deal with whether a character
    uses one unit or two.
the "for/of" loop was written with the two unit characters
    in mind and will loop properly over each character, not
    just each code unit.
****************************/

let horseShoe = "🐎👞";
//console.log(horseShoe.length);
//console.log(horseShoe[0]); //invalid half character
//console.log(horseShoe.charCodeAt(0)); //code of half character
//console.log(horseShoe.codePointAt(0)); //actual code for horse emoji

let ghostOgre = "👻👹";
// for(let char of ghostOgre) {
//     console.log(char);
// }

/****************************
A FINAL EXAMPLE

The textScripts function puts all the above together to
create a function that returns which scripts are present
in a string and what percentage of that string they make up.
EX: 61% Han, 22% Latin, 17% Cyrillic
****************************/
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

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterByScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({name}) => name != "none");

    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";

    let mapped = scripts.map(({name, count}) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");

    //uncomment to show intermediate steps
    console.log(scripts);
    console.log(total);
    console.log(mapped);
    
    return mapped;
}

textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"');