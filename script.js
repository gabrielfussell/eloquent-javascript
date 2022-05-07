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