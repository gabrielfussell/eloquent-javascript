/***********
RETRY
***********/
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
    //get random number between 1 and 10
    let num = Math.floor(Math.random() * 10) + 1;

    if(num >= 9) {
        return x * y;
    } else {
        throw new MultiplicatorUnitFailure("This function fails 80% of the time for no reason.");
    }  
}

/*
for(;;) {
    try {
        let n = primitiveMultiply(2, 5);
        console.log("Multiplication successful: " + n);
        break;
    } catch (e) {
        if(e instanceof MultiplicatorUnitFailure) {
            console.log("The rogue multiply function is on the rampage again.");
        } else {
            throw e;
        }
    }
}
*/

/***********
THE LOCKED BOX
***********/

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() { 
        if(this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let wasLocked = box.locked;
    box.unlock();

    try {
        body();
    } finally {
        if(wasLocked) box.lock(); //re-lock the box only if it was locked to start with
    }
}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

//box.locked = false;
try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch(e) {
    console.log("Error raised:", e);
}

console.log(box.locked);