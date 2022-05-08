/**************
 REGULAR EXPRESSIONS
 *************/

 let re1 = new RegExp("abc");
 let re2 = /abc/;

 /*
When using the second type of declaration, escape any forward
slashes that are part of the pattern with a backslash.

Backslashes that aren't part of any special character codes (like \n)
will be preserved.
 */

//these are equivalent
let re4 = new RegExp("ab/c");
let re3 = /ab\/c/;

//console.log(/abc/.test("abcde")); //passes the test
//console.log(/abc/.test("abxde")); //fails the test

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
let re5 = /[^01]/;