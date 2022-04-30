/**************************
SUM OF A RANGE
**************************/
function range(start, end, step) {
    let nums = [];
    if(step == undefined) {
        step = 1;
    } else if(step == 0) {
        console.log("Step value cannot be zero");
        return;
    }

    if(start < end) {
        //check that ending # can be reached
        if(step < 0) {
            console.log("Invalid step parameter.");
            console.log("If starting num is less than ending num, step must be GREATER than 0.");
            console.log("Start #: " + start + "\nEnd #: " + end + "\nStep: " + step);
            return;
        }

        //loop for increment
        for(let i = start; i <= end; i = i + step) {
            nums.push(i);
        }
    } else if (start > end) {
        //check that ending # can be reached
        if(step > 0) {
            console.log("Invalid step parameter.");
            console.log("If starting num is greater than ending num, step must be LESS than 0.");
            console.log("Start #: " + start + "\nEnd #: " + end + "\nStep: " + step);
            return;
        }

        //loop for decrement
        for(let i = start; i >= end; i = i + step) {
            nums.push(i);
        }
    }
    return nums;
}

function sum(nums) {
    let total = 0;

    for(let num of nums) {
        total = total + num;
    }

    return total;
}

//let myRange = range(5, 2, -1);

//console.log(myRange);
//console.log(sum(myRange));

/**************************
REVERSING AN ARRAY
**************************/

//returns a new array
function reverseArray(array) {
    let reverseArray = [];

    for(let i = array.length - 1; i >= 0; --i) {
        reverseArray.push(array[i]);
    }

    return reverseArray;
}

let animals = ["cats", "dogs", "pigs", "hedgehogs", "penguins", "orangutans"];

let newAnimals = reverseArray(animals);
//console.log("Original array: " + animals);
//console.log("Reversed array: " + newAnimals);

//reverse in place
function reverseArrayInPlace(array) {
    let originalLength = array.length;

    for(let i = originalLength - 1; i >= 0; --i) {
        array.push(array[i]);
    }
    array.splice(0, originalLength);
}

//console.log(animals);
//reverseArrayInPlace(animals);
//console.log(animals);

/**************************
LISTS
**************************/
//A list is a nested set of objects
//arrayToList returns an object like below example
let exampleList = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};


let myArray = ["buffalo wings", "chicken noodle soup", "kimchi"];

function arrayToList(array) {
    function createObject(arrayPosition) {
        if(arrayPosition == array.length - 1) {
            return {
                value: array[arrayPosition],
                rest: null
            }
        }
        else {
            return {
                value: array[arrayPosition],
                rest: createObject(arrayPosition + 1)
            }
        }
    }
    return createObject(0);
}

//str = JSON.stringify(arrayToList(myArray), null, 2);
//console.log(str);

let myList = {
    value: "haricot verts",
    rest: {
        value: "cabbage",
        rest: {
            value: "penne a la vodka",
            rest: null
        }
    }
};

function listToArray(list) {
    let array = [];

    function createArray(obj) {
        if(obj.rest == null) {
            array.push(obj.value);
        }
        else {
            array.push(obj.value);
            createArray(obj.rest);
        }
    }
    createArray(list);
    return array;
}

//let arr = listToArray(myList);
//console.log(arr);

let myElement = {
    value: "kombucha",
    rest: null
}

function prepend(element, list) {
    element.rest = list;
    return element;
}

//console.log(JSON.stringify(myElement, null, 2));
//console.log(JSON.stringify(prepend(myElement, myList), null, 2));

function nth(list, num) {
    let i = 0;
    let value = undefined;

    function readValue(obj) {
        if(i == num) {
            value = obj.value;
            return value;
        }
        else {
            ++i;
            if(obj.rest == null) {
                return undefined;
            }
            else {
                readValue(obj.rest);
            }
        }
    }

    readValue(list);
    return value;
}

console.log(JSON.stringify(myList, null, 2));
console.log(nth(myList, 2));


/**************************
DEEP COMPARISON
**************************/

let george = {
    name: "George Adams",
    age: 34,
    sex: "male",
    shirtColor: "blue",
    heldItems: ["keys", "cash", "cigarettes"],
    siblings: [
        {
            name: "Lilly Adams",
            age: 27,
            sex: "female",
            shirtColor: "orange"
        },
        {
            name: "Calvin Adams",
            age: 31,
            sex: "male",
            shirtColor: "red"
        }
    ]
}

let george2 = {
    name: "George Adams",
    age: 34,
    sex: "male",
    shirtColor: "blue",
    heldItems: ["keys", "cash", "cigarettes"],
    siblings: [
        {
            name: "Lilly Adams",
            age: 27,
            sex: "female",
            shirtColor: "orange"
        },
        {
            name: "Ringo Starr",
            age: 31,
            sex: "male",
            shirtColor: "red"
        }
    ]
}

let spidersGeorg = {
    name: "Spiders Georg",
    age: 3400,
    sex: "???",
    shirtColor: "N/A",
    heldItems: ["keys", "cash", "cigarettes"],
    siblings: ["Randolph", "Monty"]
}

let spidersRinga = {
    name: "Spiders Georg",
    age: 3400,
    sex: "???",
    shirtColor: "N/A",
    heldItems: ["keys", "cash", "cigarettes"],
    siblings: ["Randolph", "Monty"]
}

let arr = [1, "cat","paris"];
let arr2 = [1, "cat", "paris"];

let num = 66;
let str = "string";
let str2 = "string";
let n = null;
let n2 = null;

/*
This could be improved by checking if a key exists in both
objects, and seeing if the length of the length of the objects
is the same before doing the comparison.
*/
function deepEqual(item1, item2) {
    if(item1 === null && item2 === null) {
        return true;
    }
    else if(typeof(item1) != typeof(item2)) {
        return false;
    }
    else if(typeof(item1) != "object") {
        return item1 === item2;
    }
    else {
        //both are objects
        let keys = Object.keys(item1);
        for(let key of keys) {
            //check for and handle nested objects
            if(typeof(item1[key]) === "object") {
                if(deepEqual(item1[key], item2[key]) === true) {
                    console.log("Deeper comparison of " + key + " is true");
                    continue;
                }
                else {
                    return false;
                }
            } else if(item1[key] === item2[key]) {
                console.log(item1[key] + " === " + item2[key]);
                continue;
            } else {
                console.log("Different key found!");
                console.log(item1[key] + " != " + item2[key]);
                return false;
            }
        }
        console.log("All keys are the same");
        return true;
    }
}


deepEqual(george, george2);