/**************
 REGULAR EXPRESSIONS
 *************/

 let basic1 = new RegExp("abc");
 let basic2 = /abc/;

/*
When using the second type of declaration, escape any forward
slashes that are part of the pattern with a backslash.

Backslashes that aren't part of any special character codes (like \n)
will be preserved.
*/

//these are equivalent
let escape1 = new RegExp("ab/c");
let escape2 = /ab\/c/;

//console.log(/abc/.test("abcde")); //true
//console.log(/abc/.test("abxde")); //false

//part of the expression matches any of the characters between the brackets
//console.log(/[0123456789]/.test("in 1992"));
//console.log(/[0-9]/.test("in 1992"));

/*
\d	Any digit character (same as [0-9])
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A non alphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
*/

// ^ after the opening bracket to match everything EXCEPT what's inside
let not = /[^01]/;

// + after something means it may match more than once, but not zero times
let repeatingDigits = /\d+/;
//console.log(repeatingDigits.test("123")); //true
//console.log(repeatingDigits.test("")); //false

// * after something means it may match more than once, including zero times
let repeatingDigitsZero = /\d*/;
//console.log(repeatingDigitsZero.test("123")); //true
//console.log(repeatingDigitsZero.test("")); //true

// ? makes part of a pattern optional
let optional = /neighbou?r/;
//console.log(optional.test("neighbour")); //true
//console.log(optional.test("neighbor")); //true

// {x} means a pattern must occur x number of times
// {x, y} means the pattern must occur between x and y amount of times (inclusive)
// {x,} to say it must occur x or more times
let dateTimeFormat = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
//console.log(dateTimeFormat.test("1-30-2003 8:45"));

// Part of a regular expression encolsed in parentheses is counted as a single element
let crying = /boo+(hoo+)+/i;
console.log(crying.test("bobooboohoo"));