// Day 8

// Question no 22

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.

let colours:string[] = ["Red","Orange","Pink","Purple","Blue"];

//index error:
console.log(colours[5]);

// correct error:
console.log(colours[3]);

// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let car = 'subaru';
console.log("Is car == 'subaru' ? I predict True.");
console.log(car == 'subaru');

// 10 tests true and false:


//True Test:

//1:

let animal = "cat";
console.log("Is animal == 'cat' ? I predict True.");
console.log(animal == 'cat');

//2:

let num1 = 12;
console.log("Is num1 == 12 ? I predict True.");
console.log(num1 == 12);

//3:
let names:string[] = ["Ayesha","Anamta","Aqsa","Rida"]
console.log("Is names.length == 4 ? I predict True.");
console.log(names.length == 4);

//4:
let myNum = 12;
console.log("Is myNum > 11 ? I predict True.");
console.log(myNum > 11);

//5:
let std = "Hammad";
console.log("Is std === 'Hammad' ? I predict True.");
console.log(std ==='Hammad');

//False Test:

//1:
let fruit = "Maango";
console.log("Is fruit == 'orange' ? I predict False.");
console.log(fruit == 'orange');

//2:
let stdAge = 17;
console.log("Is stdAge > 18 ? I predict False.");
console.log(stdAge > 18);

//3:
let colour = "blue";
console.log("Is colour == 'red' ? I predict False.");
console.log(colour == 'red');

//4:
let city:string[] = ["Karachi","Lahore","Quetta","Islamabad","Peshawar"]
console.log("Is city.length == 4 ? I predict False.");
console.log(city.length == 4);

//5:
let nameOfDays = 7;
console.log("Is nameOfDays === 8 ? I predict False.");
console.log(nameOfDays === 8);

// Question no 24


// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let animal_1:string = "Cat";
let animal_2:string = "CAT";


// Test 1: Equality with string 

console.log("Testing Equality with strings:")
console.log(animal_1 === animal_2);  // False

// Test 2: Inequality with string 

console.log("Testing Inequality with strings:")
console.log( animal_1 !== animal_2);  // True

// Test 3: Tests using the lower case function

console.log("Tests using the lower case function:");

let fruits:string = "Mango";

console.log(fruits.toLowerCase() === "mango");

// Test 4: Numericals Tests

let age1:number = 19;
let age2:number = 20;

console.log("Tests with Numericals value");

// Equality 

console.log( age1 === age2);

// Inequality

console.log( age1 !== age2);

// Greater Than

console.log( age1 > age2);

// Less Than

console.log( age1 < age2);

// Greater Than or Equal to

console.log( age1 >= age2);

// Less than or Equal to

console.log( age1 <= age2);

// Test 5:  Tests using "and" and "or" operators:

console.log("Tests using 'and' and 'or' operators");


let isEvening:boolean = true;
let isSunny :boolean = false;

console.log(isEvening && isSunny);

console.log(isEvening || isSunny);


// Test 6 : Test whether an item is in a array

let cities:string[] = ["Karachi","Lahore","Islamabad","Quetta"]

console.log(`Is "Lahore" in cities:`);

console.log(cities.includes("Lahore"));

// Test 7 : Test whether an item is not in a array

console.log(`is "Peshawar" not in cities:`);

console.log(cities.includes("Peshawar"));










