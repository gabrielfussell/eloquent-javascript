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

//Brackets indicate a set of characters. Any character within that set would pass the test (equivalent to "OR")
let mySet = /[1234]/;

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
let subExpressions = /boo+(hoo+)+/i;
//console.log(subExpressions.test("bobooboohoo"));

// exec() function returns null if no match was found
// otherwise retuns an object with info about the match
let regexMatch = /\d+/.exec("one two 100");
//console.log(regexMatch);

//Strings also have a match method that takes a regular expression which works similarly
let stringMatch = "one two 100".match(/\d+/);
//console.log(stringMatch);

let groupMatchSingle = /'([^']*)'/; //match on quoted text
//console.log(groupMatchSingle.exec("she said 'hello'"));
let groupMatchNone = /bad(ly)?/;
//console.log(groupMatchNone.exec("bad"));
let groupMatchMultiple = /(\d)+/;
//console.log(groupMatchMultiple.exec("123"));


//***Dates and Times***
let basicDateObject = new Date();
//Months start at zero but days start at one!!!
let specificDate = new Date(2005, 06, 01); //July 1st, 2005

//Timestamps are stored in # of milliseconds before or after midnight on January 1st, 1970 (unix time)
let specificTime = specificDate.getTime();
//console.log(specificTime);


function dateFromString(string) {
    //console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string));
    let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
    return new Date(year, month - 1, day);
}

let myDate = dateFromString("1-30-2003");
//console.log(myDate);

//***Word and String Boundaries***
// ^ matches the start of the input and  $ matches the end
let oneOrMoreDigits = /^\d+$/; //matches a string consisting ONLY of one or more digits
let beginngingExclaimation = /^!/; //matches string starting with !
let contradictory = /x^/; //can't match anything as x can't precede the string

// \b matches word boundaries, the change from a word character to a non word character or vice versa.
// This can occur at any point in the string
//https://stackoverflow.com/questions/7605198/how-does-b-work-when-using-regular-expressions
let simpleCat = /cat/;
//console.log(simpleCat.test("concatenate")); //true
let isolatedCat = /\bcat\b/;
//console.log(isolatedCat.test("concatenate")); //false

// | functions as an OR operator
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
//console.log(animalCount.test("15 pigs")); //true
//console.log(animalCount.test("15 pigchickens")); //false


//You can also use regular expressions in string's replace method
let temple = "Borobudur";
//console.log(temple.replace(/[ou]/g, "a")); // "g" is a tag meaning "global" and will replace all instances


//You can refer to matched groups with the variables $1, $2, etc up to $9 and the whole match with $&.
let names = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip";
//console.log(names);
//console.log(names.replace(/(\w+), (\w+)/g, "$2 $1"));

//You can also pass a function to the second argument of replace
let agencies = "the fbi and cia";
//console.log(agencies.replace(/\b(fbi|cia)\b/g, s => s.toUpperCase()));

let stock = "1 lemon, 2 cabbages, and 101 eggs";
//match must always be the first argument? then your regex groups are fed into the function arguments
function minusOne(match, amt, unit) { 
    //console.log(match);
    amt = Number(amt) - 1;
    if(amt == 1) {
        //only one left, remove the "s"
        unit = unit.slice(0, unit.length - 1);
    } else if (amt == 0) {
        amt = "no";
    }
    return amt + " " + unit;
}
//console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


//***Greed***
/*
[^] matches everything not in an empty set - alternate way to match any character.
    Doing it this way includes newline characters, which the period character would not.

The repetition operators +, *, ? and {} are "greedy" and will first try to match all the way
to the end of the string, and then backtrack.

Putting a question mark after them makes them non-greedy: +?, *?, ??, {}?
*/
function stripCommentsGreedy(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, "");
}

// console.log(stripCommentsGreedy("1 + /* 2 */3")); //1 + 3
// console.log(stripCommentsGreedy("x = 10; //ten!")); //x = 10;
// console.log(stripCommentsGreedy("1 /* a */ + /* b */ 1")); //1 1

function stripCommentsNonGreedy(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, "");
}

// console.log(stripCommentsNonGreedy("1 + /* 2 */3")); //1 + 3
// console.log(stripCommentsNonGreedy("x = 10; //ten!")); //x = 10;
// console.log(stripCommentsNonGreedy("1 /* a */ + /* b */ 1")); //1 1



//***Dynamically Create Regex Objects***
let fullname = "Harry Dubois";
let text = "Harry Dubois is a suspicious character";
let regexp = new RegExp("\\b(" + fullname + ")\\b", "gi");
console.log(text.replace(regexp, "_$1_"));