function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return history;
        } else if(current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(13));

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