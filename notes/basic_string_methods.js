/*
String, number, and boolean are NOT objects. You can't
add properties onto them willy nilly like the below example.

This properties do, however, have built in methods.
*/
let kim = "Kim";
kim.age = 43;
console.log(kim.age); //undefined

console.log("Kim Kitsuragi".slice(5, 8));
console.log("Kim Kitsuragi".indexOf("K")); //case sentitive! returns -1
console.log("Kim Kitsuragi".indexOf("m")); //2
console.log("Kim Kitsuragi".indexOf("ragi")); //9

console.log(String(6).padStart(5, "0"));

//split a string into an array
let sentence = "Gojira is here to destroy";
let words = sentence.split(" ");
console.log(words);

//join an array of strings back into a single string
console.log(words.join(". "));