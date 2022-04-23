//A map is a special type of object
//the property names must be strings
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

//console.log("Is Jack's age known?", ages.has("Jack"));

class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
Rabbit.prototype.toString = function() {
    return `a ${this.type} rabbit`;
}

killerRabbit = new Rabbit("killer");
killerRabbit.speak("AIIIIEEEEEE!");
//console.log(killerRabbit.toString());


const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
}

//console.log([1, 2].toString());
//console.log([1, 2][toStringSymbol]());

let okIterator = "OK"[Symbol.iterator]();
//console.log(okIterator.next());
//console.log(okIterator.next());
//console.log(okIterator.next());

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            this.content[y * width + x] = element(x, y);
        }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }
    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }

    [Symbol.iterator]() {
        return new MatrixIterator(this);
    }
}

//custom iterator
class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return {done: true};

        let value = {x: this.x,
                    y: this.y,
                    value: this.matrix.get(this.x, this.y)};
        this.x++;
        if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
        }
        return {value, done: false};
    }
}

let m = new Matrix(2, 2, (x, y) => `value ${x},${y}`);

// for(let {x, y, value} of m) {
//     console.log(x, y, value);
// }

/*
Getters are a special type of method. You access them like a property,
but the value is calculated by the object rather than stored directly.
Defined by using "get" in front of the method name.
*/

let varyingSize = {
    get size() {
        return Math.floor(Math.random() * 100);
    }
}

//console.log(varyingSize.size);
//console.log(varyingSize.size);

/*
Setters are very similar, just for values you SET instead.
*/

class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return this.celsius * 1.8 + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value - 32) / 1.8;
    }

    //"static" keyword stores the method on the constructor
    static fromFahrenheit(value) {
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
//console.log(temp.fahrenheit);
temp.fahrenheit = 86;
//console.log(temp.celsius);

//this is how you would create the object with a fahrenheit temperature
let temp2 = Temperature.fromFahrenheit(100);
//console.log(temp2.celsius);

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if(x < y) return element(y, x);
            else return element(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if(x != y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
//console.log(matrix);
console.log(matrix.get(2, 3));