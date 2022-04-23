let todoList = [];

//add a task to the end of the list
function remember(task) {
    todoList.push(task);
}

//removes and returns the first item in the list
function getTask() {
    return todoList.shift();
}

//add a task to the front instead of the back of the queue
function rememberUrgently(task) {
    todoList.unshift(task);
}

remember("Buy shampoo");
remember("Make doctor's appointment");
remember("Return library books");
remember("Do laundry");
remember("Pick up rx");
remember("Order christmas presents");
remember("Do dishes");

//Find a specific item
console.log(todoList.indexOf("Buy shampoo")); //returns 0
console.log(todoList.indexOf("Buy dog food")); //returns -1 since it doesn't exist

/*
Return a subset of an array

Starting index is inclusive, end index is EXCLUSIVE
*/
console.log(todoList.slice(2, 5));
//if no ending index specified, the rest of the array is returned
console.log(todoList.slice(3));


//Combine arrays
let moreTasks = [
    "Buy beer"
    , "Take cat to groomers"
    , "Wash car"
];

let bigList = todoList.concat(moreTasks);
console.log(bigList);

