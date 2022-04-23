function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

//whiteRabbit.speak("Oh my ear and whiskers, how late it's getting!");
//hungryRabbit.speak("I could use a carrot right now");

//this syntax also works
//speak.call(hungryRabbit, "Burp!");

/*
When an object gets a request for a property that it doesn't
have, its prototype will be searched for the property, then the
prototype's prototype, and so on.

The prototype of an empty object is Object.prototype, the highest
level in the hierarchy.
*/
let empty = {};
//console.log(empty.toString);
//console.log(empty.toString());

//console.log(Object.getPrototypeOf({}));
//console.log(Object.getPrototypeOf(Object.prototype));

//you can also create your own prototypes
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEEE!");

//and create constructors to help define properties the objects should have
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

/*easier syntax for constructors is to use the NEW keyword in front of the function call
All constructors have a prototype property, which is an empty object that derives from
Object.prototype. You can either overwrite or extend it.

Write constructor names with a capital letter.
*/
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbit("weird");

//create a class
class Rabbit2 {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
//you can only put methods in the prototype
//properties have to be set outside the initial declaration
Rabbit2.prototype.teeth = "small";

//you can also override the property value from the prototype
let blackRabbit = new Rabbit2("black");
console.log(blackRabbit.teeth);

blackRabbit.teeth = "large";
console.log(blackRabbit.teeth);