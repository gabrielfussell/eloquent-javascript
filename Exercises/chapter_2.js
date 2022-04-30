//Looping a triangle
let s = "";
for(let i = 0; i < 7; i++) {
    s = s + "#";
    console.log(s);
}

//Fizzbuzz
for(let i = 1; i < 101; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}