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