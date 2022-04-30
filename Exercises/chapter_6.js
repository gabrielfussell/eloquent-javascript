/***********************
A Vector Type
************************/
class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y));
    }
}

let v1 = new Vec(10, 2);
let v2 = new Vec(3, 5);
// console.log(v1);
// console.log(v2);
// console.log(v2.length);

/***********************
Groups
************************/
class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        if(this.group.indexOf(value) == -1) {
            this.group.push(value);
        } else {
            console.log(`Group already contains value ${value}`);
        }
    }

    delete(value) {
        let index = this.group.indexOf(value);

        if(index == -1) {
            console.log(`${value} does not exist in group`);
        } else {
            this.group.splice(index,1);
        }
    }

    has(value) {
        for(let element of this.group) {
            if(value === element) return true;
        }
        return false;
    }

    get length() {
        return this.group.length;
    }

    static from(iterable) {
        let g = new Group();

        for(let element of iterable) {
            g.add(element);
        }

        return g;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if(this.group.length == 0) {
            return {done: true};
        } else if(this.position == this.group.length) {
            return {done: true};
        } else {
            let value = `Item "${this.group.group[this.position]}" is at position ${this.position}`;
            this.position++;

            return {value, done: false};
        }
    }
}

let g = new Group();
g.add("cats");
g.add("dogs");
g.add("guinea pigs");
g.add("capybara");
//console.log(g.group);
// g.delete("dogs");
// console.log(g.group);
// console.log(g.has("cats"));
// console.log(g.has("england"));

//let g2 = Group.from("frankenstein");
// console.log(g2.group); 

// console.log(g.length);

// for(let item of g) {
//     console.log(item);
// }

let cat = {
    name: "Marty"
    , color: "Black"
    , sex: "M"
    , age: 1
    , hasOwnProperty: "This is a stupid property name"
};

let dog = {
    name: "Gus"
    , color: "Brown"
    , sex: "F"
    , age: 3
    //, hasOwnProperty : "Yes"
}

console.log(cat.hasOwnProperty);

/*
Using this syntax you can call the hasOwnProperty method from the
prototype of the cat object, even though cat has a property with
the same name as the method.

Don't do this with your property names, it's terrible.
*/
console.log(hasOwnProperty.call(cat, "color"));