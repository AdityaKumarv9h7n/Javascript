const now = 2024;

const firstName = "Aditya";
const lastName = "Kumar";
const Age = now - 2005;
const Country = "India";

const personsAge = now - 2005;

// console.log(typeof Name);
// console.log(typeof Age);

// Maths operators

console.log(Age, personsAge, Age - personsAge);
console.log(Age * 2);
console.log(personsAge / 5);
console.log(personsAge ** 2);
console.log(personsAge ** (1 / 2));
console.log(firstName + " " + lastName);

//Assignment operators
let x = 34;
x += 10;

// meaning of this code is x = x + 10;

x -= 20;

// meaning of this code is x = x - 20; but think about the last defined value of the x in this case when we log this x into the console we will get the last assign value of the x is 34+10 which is 44
// so the code is x = 44 - 20 which is 24

console.log(x);

x *= 4;
console.log(x);

x /= 4;
console.log(x);

x++;
console.log(x);

//x++ means x = x + 1;
//x-- means x = x - 1;
//++x means x = x + 1;
//--x means x = x - 1;
//x++ and x-- are post increment and post decrement operators
//++x and --x are pre increment and pre decrement operators

// Comparison Operators

console.log(Age < personsAge);
console.log(personsAge < Age);
console.log(Age >= personsAge);
console.log(Age <= personsAge);

console.log(Age <= 18);
console.log(Age >= 18);

console.log(Age);

// Operators Precedence order

console.log(now - 2005 >= now - 2000);
// in the precedence order list Substract or any other maths operators have the higher precedence than any other type of operators

console.log(Age ** 2);

// Exponentiation operator has the higher precedence  and the Associativity of this operator is from right-to-left it means

console.log(2 ** 2 / 3 ** 2);

// in this condition first 3**2 will be done and then 2**2 and then the result of 2**2 will be divided by the result of 3**2

// so this clears that exponentiation works first and than any other type of operators like additive operators, multiplicative operators

// here is the another example of the same thing

let z, y;
z = y = 20 - 13;

console.log(z, y);

// in this condition first 20 - 13 will be done and then the result of 20 - 13 will be assigned to both the variables z and y

let massOfMarks = 95;
let heightOfMarks = 188;

let massOfJohn = 85;
let heightOfJohn = 176;

// BMI is the ratio of the mass of a person to the square of their height

console.log(massOfMarks / (heightOfMarks / 100) ** 2);

console.log(massOfJohn / (heightOfJohn / 100) ** 2);

// or

console.log(massOfMarks / ((heightOfMarks / 100) * (heightOfMarks / 100)));
console.log(massOfJohn / ((heightOfJohn / 100) * (heightOfJohn / 100)));

const markHigherBmi =
  massOfMarks / ((heightOfMarks / 100) * (heightOfMarks / 100));

const johnHigherBmi =
  massOfJohn / ((heightOfJohn / 100) * (heightOfJohn / 100));

console.log(markHigherBmi);

// Extra Points to remember
//  What console.log Does:

// console.log() is a function that outputs a value to the console. It does not return the value it logs; it simply prints it to the console.
// In JavaScript, console.log() returns undefined

// in this condition first the BMI of both the person will be calculated and then the result will be

massOfMarks = 95;
heightOfMarks = 188;

massOfJohn = 85;
heightOfJohn = 176;

// now i am going to check my own bmi value

const massOfAditya = 44;
const heightOfAditya = 166;

console.log(massOfAditya / ((heightOfAditya / 100) * (heightOfAditya / 100)));

const nameOfUser = "Aditya";
const ageOfUser = 20;
const massOfUser = 44;
const heightOfUser = 166;

const aditya = "I'm " + nameOfUser + " a " + ageOfUser + " years old student  ";

// below is the method to write template strings which helps to write the string in a more readable way

const newAditya = `I'm ${nameOfUser} a ${ageOfUser} years old Web Developer I am currently working on JavaScript  `;

console.log(aditya);

console.log(newAditya);

// you can use backticks to write the template strings and use the ${} to insert the variables inside the string

// for example you can write the string like this to directly log into the console

console.log(`this is the string`);

// to show the above line of code in the console in multiple line the only thing you have to do is to hit the enter or the return key on the specific line where you want to break the line

// for example the below code will show the string in multiple line in the console

console.log(`this is the 
string`);

// but before the ES6 or the previous version of the javascript to write the multiple line strings you then have to use the \n\ to start the new line

// for example

//if i wanted to write the same above code in the previous version of the javascript then i would have to write the code like this

console.log(
  "this is the \n\
string"
);

// or

console.log("this is the \nstring");

// if you will hit the tab then that space of the tab will also be taken by the browser to show that message in the console of the browser

const ageOfSarah = 19;
const minimumAge = 18;

if (ageOfSarah >= minimumAge) {
  console.log("Sarah is eligible to vote and to get the driving licence");
}

// or we can write it as
let name = "Rohit";
let ageOfThePerson = 14;
let minimumAgeForDriving = ageOfThePerson >= 18;

if (minimumAgeForDriving) {
  console.log(`You are ready to rock ${name}`);
}

// in the above code ${name} the ${} is the place holder and name is the string inside that placeholder and it will be replaced by the actual value of the name variable in the console of the browser

// in the () of if condition which means that if the condition is true then the code inside the if condition will be executed in this condition it will log to theconsole to the

// and for not true it will not log anything to the console

// in the condition of the if() will not true we use else condition here else is explained

if (minimumAgeForDriving) {
  console.log(`You are ready to Rock ${name}`);
} else {
  const yearsLeft = 18 - ageOfThePerson;
  console.log(
    `${name} you need to wait for ${yearsLeft} more years to apply for the Driving Licence`
  );
}

/*  if(){
    } else {
    }


    the above structure of if and else is known as controled structure in JS

    and  any variable which you will assume inside the  curly bracket  after the else will not be used outside the curly brackets

    if(){
    } else {
    }

    in this code these two brackets { }
     are the code block
    */

// for example the below code will show an error that script.js:231 Uncaught ReferenceError: yearsLeft is not defined at script.js:231:13 you can try it just by simply uncomment it

// console.log(yearsLeft);

const birthYear = 2345;
const century = "21st Century";
if (2100 > birthYear >= 2000) {
  console.log(century);
}

if (2000 > birthYear >= 1900) {
  console.log(`20th Century`);
} else {
  if (birthYear < 1900) console.log("You are devil");
}

if (birthYear > 2024) {
  console.log(`you do not exist`);
}

if (markHigherBmi < johnHigherBmi) {
  console.log("Mark's BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Mark's");
}

if (markHigherBmi > johnHigherBmi) {
  console.log(
    `Marks BMI is (${markHigherBmi}) higher than the Jhon's BMI(${johnHigherBmi})`
  );
} else {
  console.log(
    `Jhon's BMI is (${johnHigherBmi}) higher than the Marks BMI (${markHigherBmi})`
  );
}

let no1 = 3;
let no2 = 5;

if (no1 > no2) {
  console.log(`${no1} is greator than ${no2}`);
} else {
  console.log(`${no1} is smaller than ${no2}`);
}

// Type Conversion and coercion

// Type Conversion is when we manually convert from one type to another and Coercion is when JS itself converts the type for us.

// Type Coercion happens completely hidden from us, we don't need to do anything, it just happens.

// converting the string into the number using the Number() function

const inputYear = "1920";
console.log(inputYear); // this will give us a string

console.log(Number(inputYear)); // this will convert the string 1920 into the number type
// this will give us 1920 which will be a number type

console.log(Number(inputYear) + 18); // this will add 18 to the number type 1920 and give us  1938 because inputYear is a number type now

console.log(Number("Rohit")); // this will log to the console NaN which stands for Not a Number because Rohit is not a number type it is a string type

console.log(typeof NaN); // this will log number to the console because NaN is a number type in JS

console.log(String(NaN)); // this will log NaN to the console because NaN is a number type and we are converting it into a string type using the String() function

// NaN is still a number but it is an invalid number that's why when we change the type of NaN to string it will still be NaN and not undefined or null or any other type

// we get NaN when we try to convert a string into a number if the string is not a valid number type

// when operation Numner() fails to give us a new number type it will return NaN which stands for Not a Number

// now we are going to converting the number into the string by using the String() function

console.log(String(19), 19); // this will log the first number to the console as a string and the another number as a number only because we are using the comma operator which will return the second number only as a number not will change the another number to the string type

// to convert any type into the another type we need to start the type name with a capital letter like String() Number() Boolean() etc.

// In JavaScript we can only convert Number into the string and to the boolean but can't convert into  undefined or into null type because undefined and null are not types in JavaScript they are values in JavaScript.

//now we are going to learn type coercion in JavaScript

console.log("I am " + 25 + " years old "); // this will log to the console I am 25 years old because the + operator is used here which will convert the number 25 into the string type and then concatenate

console.log(" I am " - 25 + " years old "); // this will log to the console "NaN years old" because as we from the Operators precedence that substraction works from the left-to-right so in this case first JS will convert the "I am" string into the number which will be NaN and then from the NaN 25 will be substracted which will also give us NaN as the result and at last the javascript will concatenate the NaN with the string " years old " which will give us "NaN years old" as the result

console.log(" I am " - 25 + " years old "); // in this example first the javascript will try to do the substraction operation which will fail because we can't subtract a number from a string so it will give us NaN as the result and then the javascript will concatenate the NaN with the string " years old " which will give us "NaN years old" as the result

console.log("I am " + 25 + " years old "); // in this example first the javascript will look around the 25 if he finds that after the + sign in anyside of the 25 there is a string then it will convert the 25 into the string type and then concatenate the strings which will give us

console.log("I am " + 25 - " years old"); // the result will be NaN

console.log("I am " + (25 - " years old")); // the result will be I am NaN

console.log("I am " - 25 - " years old"); // the result will be NaN

console.log("I am " - 25 - " years old"); // the result will be NaN // - operator usually tries to convert the string into the number when it is used with the number

console.log("I am " + 25 + " years old"); // the result will be I am 25 years old because it will convert the 25 into the string because here in the both side of 25 there is a string so it will convert the 25 into the string and then concatenate the strings together

console.log("23" + "10" + 3); // the output of this code in the console will be 23103 because the number will be converted into the string because in the left side of the number 3 there is a + operator and after the + operator in the left side there is a string so it will convert the number 3 into the string and then concatenate the strings

console.log(3 + "10" + "23");

console.log("23" - "10" - 3); // the result will be 10 because here - operator will try to convert the string into the number and then it will do the substraction operation which will give us 10 as the result

console.log("23" * "2"); // in this case the javascript will convert the strings into the numbers and then it will do the multiplication operation which will give us 46 as the result

console.log("40" / "20"); // in this case the javascript will convert the strings into the numbers and then it will do the division which will give us the result 2

// coerecion in the comparision operation

console.log("23" < "14"); // this will also first convert the string into the number and then it will be compared and the result will be false because 23 is greater than 14

let n = "1" + 1; // here the value will be 11 as a string
n = n - 1; // here the value will be 10 as a number
console.log(n);

// the result of the above will be 10 because first of all the value of the n will be 11 as a string and in the another line of the code it will be converted into the number and then 1 will be substracted and this will give us 10 as the result

console.log(2 + 3 + 4 + "5"); // the output will be 95 as a string

console.log("10" - "4" - "3" - 2 + "5"); // the output will be 15 as a string
// Truthy and Falsy Values

//Falsy values are values that are not exactly false but would be false  when we try to convert them into a boolean

// In js there are only 5 falsy values which are 0,"", null,undefined,NaN

// value that will be converted to true is called truthy value when we try to convert anything other than falsy values into the boolean will give true 

console.log(Boolean(3));// the output will be true because number 3 is not a falsy value

console.log(Boolean(0));// this will log to the console false because 0 is a falsy value

console.log(Boolean(null));//this will log to the console false because null is a falsy value
console.log(Boolean(undefined));//------------------------------
console.log(Boolean(""));//-------------------------------------
console.log(Boolean(NaN));//------------------------------------

// In JS {} this curly brackets are known as objects and the Boolean Value of Objest is True because this is not in the list of the 5 falsy values

console.log(Boolean({}));// the output will be true because the boolean value of an object in JS is true because will be discuss further 

// conversion into the booleans actually happens explicitally that is called type coersion

const money = "0";
if(money){
  console.log(`Don't waste the whole money you have at once`);
}else {
  console.log(` I think that You should have some`);
}

// In the above example in the if section the money is converted into the boolean and the boolean value of the 0 is false so in this condition the else worked and due to which we get " I think that You should have some" as the output

// in any other condition when we put the value of money rather than falsy value (that can be a string or anyother number) we will get "Don't waste the whole money you have at once" as the output

// for example if we put 5 as the value of the money in the constant that will show us the result "Don't waste the whole money you have at once"

// and if we put any string as the value of the constant like Jhon that will log the same message as it gave above in the condition of 5

let height;
if(height){
  console.log( `Height is defined`)
}else {
  console.log(`Height is Undefined`)
}

// in the above condition we get the output "Height is Undefined" because the variable height is not defined and the boolean value of the undefined is falsy as the result the else condition worked and we get the output "Height is Undefined"


// in the above case when we put the value of height as 0 we will still get the result "Height is Undefined" because the boolean value of the 0 is falsy and the else condition worked
// so through this approach we can have some trouble in order to exactly know about the height is defined or not


