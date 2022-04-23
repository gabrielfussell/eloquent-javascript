/*
Rest parameters

use "..." in function definition. The individual items
you pass in will be treated as an array.
*/
function iHateEverything(...things) {
    for(let thing of things) {
        console.log("I hate " + thing + "!");
    }
}

iHateEverything("dogs", "cats", "rats");

/*
Spread syntax

The opposite of rest, but uses the same "..." notation.
'Spreads' an array into separate arguments.
*/

function sum(x, y, z) {
    console.log(x + y + z);
}

let nums = [3, 65, 89];
sum(...nums); //157

/*
If the array you pass in with spread contains more arguments
than what the function takes, any additional members of the
array beyond that number will be ignored.
*/
let nums2 = [3, 65, 89, 100];
sum(...nums2); //still 157