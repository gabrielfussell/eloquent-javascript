//Recursive function to determine evenness
function isEven(n) {
    let i = Math.abs(n);

    if(i == 0) {
        return true;
    } else if(i == 1) {
        return false;
    } else {
        return isEven(i - 2);
    }
}