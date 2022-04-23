/*
Phi function is for correlation.
Returns a number between -1 and 1
1 is perfectly correlated
-1 is always opposite
0 is no correlation

Array indexes and their binary equivalent:
0, 1, 2, 3
00, 01, 10, 11
*/
function phi(table) {
    return (
        (table[3] * table[0] - table[2] * table[1])
        / Math.sqrt(
            (table[2] + table[3])
            * (table[0] + table[1])
            * (table[1] + table[3])
            * (table[0] + table[2])
            )
    );
}

/*
When creating a function you can give the elements
of the array friendlier names to make it easier
to read.
*/
function phi2([n00, n01, n10, n11]) {
    return(
        (n11 * n00 - n10 * n01)
        / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10))
    );
}

let {name} = {name: "Faraji", age: 23};
console.log(name);