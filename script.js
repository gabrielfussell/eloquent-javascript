//Regexp Golf

//1
let one = /ca[rt]/;
// console.log(one.test("carton"));
// console.log(one.test("carborator"));
// console.log(one.test("cassava"));

//2
let two = /pr?op/;
// console.log(two.test("proper"));
// console.log(two.test("popcorn"));
// console.log(two.test("plop"));

//3
let three = /ferr(et|y|ari)/;
// console.log(three.test("ferret"));
// console.log(three.test("ferry"));
// console.log(three.test("ferrari"));
// console.log(three.test("ferrous"));

//4
let four = /\w+ious\b/;
// console.log(four.test("furious"));
// console.log(four.test("ious"));
// console.log(four.test("lugubrious"));
// console.log(four.test("Your most lugubriousness"));

//5
let five = /\s(\.|,|:|;)/;
// console.log(five.test("I , said"));
// console.log(five.test("I :said"));
// console.log(five.test("I said; "));

//6
let six = /\w{6,}/;
// console.log(six.test("I will organize it later"));
// console.log(six.test("One, two, three"));

//7
let seven = /(\b[^e\s]\w+)/;
//doesn't start with e: (\b[^e\s]\w+)