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

console.log(Boolean(3)); // the output will be true because number 3 is not a falsy value

console.log(Boolean(0)); // this will log to the console false because 0 is a falsy value

console.log(Boolean(null)); //this will log to the console false because null is a falsy value
console.log(Boolean(undefined)); //------------------------------
console.log(Boolean("")); //-------------------------------------
console.log(Boolean(NaN)); //------------------------------------

// In JS {} this curly brackets are known as objects and the Boolean Value of Objest is True because this is not in the list of the 5 falsy values

console.log(Boolean({})); // the output will be true because the boolean value of an object in JS is true because will be discuss further

// conversion into the booleans actually happens explicitally that is called type coersion

const money = "0";
if (money) {
  console.log(`Don't waste the whole money you have at once`);
} else {
  console.log(` I think that You should have some`);
}

// In the above example in the if section the money is converted into the boolean and the boolean value of the 0 is false so in this condition the else worked and due to which we get " I think that You should have some" as the output

// in any other condition when we put the value of money rather than falsy value (that can be a string or anyother number) we will get "Don't waste the whole money you have at once" as the output

// for example if we put 5 as the value of the money in the constant that will show us the result "Don't waste the whole money you have at once"

// and if we put any string as the value of the constant like Jhon that will log the same message as it gave above in the condition of 5

let height;
if (height) {
  console.log(`Height is defined`);
} else {
  console.log(`Height is Undefined`);
}

// in the above condition we get the output "Height is Undefined" because the variable height is not defined and the boolean value of the undefined is falsy as the result the else condition worked and we get the output "Height is Undefined"

// in the above case when we put the value of height as 0 we will still get the result "Height is Undefined" because the boolean value of the 0 is falsy and the else condition worked
// so through this approach we can have some trouble in order to exactly know about the height is defined or not

// Equality Operators
const age = 18;
if (age === 18) console.log("Now you are an Adult");
else {
  console.log("You are not an Adult");
}

// In the above example we get the if condition as the output because the value of the age is exactly equal to 18 and here we have used the strict equallity operator which will only log the answer to the console if that condition will strictly true and in the condition of not exactly true condition the else block will be loged to the console

// in the above example we used the console.log statement in the if condition without using any curly brackets because we have a single line of term to log to the console.

// Strict Equality operator only does the type conversion

// and there is a another type of equality operator which is loose equality operator which actually do the type coersion

let weight = "18";
if (weight == 18) {
  console.log(`You are of 18 kg`);
} else {
  console.log(`You are under 18`);
}

// in the above example we get the if condition in the console because the type of the equality operator we are using is loose equality operator and due to which it converts the string into the number to make that possible because we know that loose equality operator converts the string into the number or the number into the string

weight = 18;
if (weight == 18) {
  console.log(`You are of 18 kg`);
} else {
  console.log(`You are under 18`);
}
// in this condition the result will be the same due to the same cuse but here the weight is 18 which is already in the number

// to get the data from the webpage we can use the prompt function

// prompt("what is the name of the day can you help me to remind I was sick so i forgot the day when I went to the hospital if you know who i am then please try to understand it. it is urgent ?  ")// in this case we will get a popup on our site like yoursite name and then says like message you have to fill in that box and then have to click ok which can be collected about which you will learn later

//

// the data which we will get though the above method will be in the string and if we want to convert that message into the number or into the any othe data type we have to wrap that prompt function like this
// const perfectAge = Number (prompt ( `What is you current Age ?`));
// console.log(perfectAge);

// the logged value of the above code in the console will be the value that the user will put in the popup box which will be basically a number because we wraped the prompt function with the Number which will convert the sting Number value into the Number Value

// const userData = prompt("what is your name");
// console.log(userData);

// in the above case we used a const userData to store the data of the prompt of the user and then we used the console.log function to print the data of the user in the console

// always try to use strict equallity operator to compare any two number

// there is also a "else if" condition in which you have to write the else if condition after the first if condition so make sure to have multiple condition to execute at once like here is the example

let heightOfRohit = 23;

if (heightOfRohit === 18) {
  console.log(`Hey you are right `);
} else if (heightOfRohit === 17) {
  console.log(`Hey you are not wrong but at least you should of 17.5 kg`);
} else if (heightOfRohit === 23) {
  console.log(`hey you are of 23 that is great`);
} else {
  console.log(`you should be something like 18,17 or 23`);
}

// In the above example if any of the above if or else if condition will not be apply to anyone than at last it will log else condition to the console

// we will get the "2nd else if" version of the code because we changed the weight value from 18 to 23. we can also add more else if condition.

// there is also a different operator which also comes with strict different operator which is !== and also the loose different operator which is != and the loose different operator will do the type coersion and the strict different operator will not do the type coersion

weight = 13;
if (weight !== 18) {
  console.log(`You are of 18 kg`);
} else {
  console.log(`You are under 18`);
}

// there is also a loose different operator which actually does the type coersion here is the example of that

weight = "24";
if (weight != 24) {
  console.log(`hey you are of 24`);
} else {
  console.log(`you are exactly of 24`);
}

// in the above example we can see that we defined the weight value in the string but under the if statement we are using the loose different operator which actually does the type coersion means it changes the string 24 into the number 24 automatically and then it logged the correct answer of the condition which is the else block

// but try to use the strict different operator whenever you will try to use

// Basic Boolean Logic , "And","Or" and "Not"operator

// below is the example of the conditional operation 

// Example :-  A : Sarah has a driver's license
// B : Sarah has good vision
// AND operator can be understand as "Sarah has a driver's license AND good vision"

// And operator :- when both the condition given above will be true than in that case the result will be true this will also the same for more than two logical conditon because at least one condition for all the logics should be true 

// and in any other case the result will be false because one of the condition will be false which will make the whole result false 

// OR operator works in a opposite way of the AND operator because when at least one of the condition will be true than the result will be true and if all the condition will be false in that case the answer will be false 

// OR Operator :-  A : Sarah has a driver's license OR good vision

// if any one will be true than the result will be true and if both will be false than the result will be false

// Not operator basically inverts the condition 

// if Sarah has a driver's license then it will be false and if Sarah does not have a driver's license then it will be true

// and also same for the another statement if Sarah has a good vision than it will be false and if she does not has a good vision than it will be true

// here is the example of the all of the above Boolean logics
// Age = 16
//  A: Age is greater or equal to 20 (This condition is false)
// B: Age is less than 30(this condition is true)
//  so the !A = True
// A AND B = False
// A or B = True
// !A or B = True
// A or !B = False

// The symbol of AND operator is && 

let hasDriversLicense = true; // this is the case A
let hasGoodVision = true;// this is the case B
console.log(hasDriversLicense && hasGoodVision);// the result will be true 

hasDriversLicense = true; // this is the case A
hasGoodVision = false;// this is the case B

console.log(hasDriversLicense && hasGoodVision);// the output will be false as we know from the truth table of the AND Operator

// now we are going to use the or operator 
//as you can see that the OR operator looks like these two straight vertical lines  ||
console.log(hasDriversLicense || hasGoodVision );// as we know from the truth table of the OR logic we will get the True as our output of this code in the console

hasDriversLicense = false; // this is the case A
hasGoodVision = false;// this is the case B

console.log(hasDriversLicense || hasGoodVision);// the output of this code in the console will be false because we can see both the above condition is false so we know from the truth table of the OR logic the output in this case will be false

// and the not logic is denoted as this !hasDriversLicense the exclamation sign in the beginning of the variable makes the logic Not type

console.log(!hasDriversLicense);// the output will be true because the real statement is true and we know that the Not operator actually inverts the value it means that the output will be true

let shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
  console.log(`Yes she should drive`)
}else{
  console.log(`She should not drive...`)
}
// in the above example the else block should be work because the boolean value of shouldDrive is false so it will log the else block to the console

hasDriversLicense = true; // this is the case A
hasGoodVision = true;// this is the case B

shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
  console.log(`Yes she should drive`)
}else{
  console.log(`She should not drive...`)
}
// in the above condition the if block will be logged to the console because the boolean value is true 

// we can also assign the third variable to add more condtion into these two condition

let isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);// the output will be true 

hasDriversLicense = false;
isTired = false;
console.log(hasDriversLicense && hasGoodVision || isTired);// the output will be false

console.log(hasDriversLicense || hasGoodVision && isTired); // the output will be false 


// now we can add one more condition with these two conditions
shouldDrive = hasDriversLicense && hasGoodVision && !isTired ;
if(shouldDrive){
  console.log(`Yes she should drive`)
}else{
  console.log(`She should not drive...`)
}
// the output will be the else statement and the output will be true if when the value of the hasDriversLicense will be true hasGoodVision will be true and the isTired will be false which is false in the above condition 

hasDriversLicense = true;
hasGoodVision = true;
isTired = false;
shouldDrive = hasDriversLicense && hasGoodVision && !isTired ;

if(shouldDrive){
  console.log(`Yes she should drive`)
}else{
  console.log(`She should not drive...`)
}

// when we define the same variable again and agin with different values we also have to define the new variable in this case we also have to define the shouldDrive variable here if we not do it then in that case the result will be shown according to the uper defined shouldDrive condition

// the output of the above code will be the if statement as we know from the truth table of the && and || operators

/* Coading Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete agaist each other 3 times. The winner with the highest average score wins the trophy! 

1) calculate the average score for each team, using the test data below 
2) Compare the team's average scores to determine the winer of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3) BONUS 1: Include a requirement for a minimum score of 100. With this rule a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks

4) BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise no team wins the trophy.

TEST DATA : Dolphines score 96; 108 and 89; Koalas score 88, 91 and 110

TEST DATA BONUS 1: Dolphins score 97, 112, and 101. Kolas score 109,95 and  123

TEST DATA BONUS 2: Dolphins score 97 , 112, and 101. Kolas score 109,95 and  106
*/

let firstMatchDolphin = 96;
let secondMatchDolphin = 108;
let thirdMatchDolphin = 89;

let fistMatchKoalas = 88;
let secondMatchKoalas = 91;
let thirdMatchKoalas = 110;

// average of the Dolphins is 
let averageDolphines = (96+108+89)/3;
console.log(averageDolphines);

// average of the Koalas is
let averageKoalas = (88+91+110)/3;
console.log(averageKoalas);

if (averageDolphines > averageKoalas && averageDolphines >= 100 ){
  console.log(`Dolphines has won the match by ${averageDolphines - averageKoalas} points`)
}else if (averageDolphines < averageKoalas && averageKoalas >= 100 ){
  console.log(`Koalas has won the match by ${averageKoalas - averageDolphines} points`)
}else if (averageDolphines === averageKoalas >= 100 ){
console.log(` Draw `)}
else{
  console.log(`no one won beacuase the team with the highest points may have not passed the minimum criteria of having 100 points `)
}

// The Switch Statement

const day = "monday";
switch (day) {
  case "monday":
      console.log("Plan your day accouring to the week");
    break;
    case "tuesday":
      console.log("This is the tuesday and you have to work hard")
    break;
    case "wednesday":
      console.log("Do what you want to do today");
    break;
    case "thursday":
    case "friday":
      console.log("do only necessary work");
      break;
    case "saturday":
      console.log("Get ready for the sunday");
      break;
    case "sunday":
      console.log("Now its time to take rest");
      break;
    default:
      console.log("choose a valid day");
      break;

}

// in the above code the switch statement actually will switch the output of the code as it will change according to the case and the break; atually act like a break of this type of code if we not write break after every console.log than it will also log the result of the another case below is the example of this case

dayNew ="monday"
switch(dayNew){
  case("monday"):
  console.log(`this is the output`);
  // break;
  case("tuesday"):
  console.log( `This is the tuesday`);
  break;
  case("wednesday"):
  console.log(`this is the wednesday`);
  break;

}


//you can see the result of the above code as you can see that i have commented out the break; after the monday logged value which makes the JS not to stop because we have commented out the break; so due to which it logged the another value of the case of the tuesday which is the This is the tuesday so make sure to add break while using this switch statement method to avoid any kind of error other wise use the if else way as given below and also make sure to add the : sign after every case as we have written above 

dayNew = "Thursday";
if(dayNew === "monday"){
  console.log(`hey do your own work `)
}else if (dayNew === "thuesday"){
  console.log(`It is tuesday you should start to do `)
}else if (dayNew === "wednesday" ){
  console.log(`Today is wednesday and now you have to fix something`)
}else if(dayNew === ("thursday" || "friday")){
  console.log(`today is the only day to give your 100%`)
}else if (dayNew === "saturday"){
  console.log(`today is the saturday you should prepare for the sunday`)
}else if(dayNew === "sunday"){
  console.log(`Now take rest`)
}else{
  console.log(`OPPS! select a valid day`)
}


/* we can also write the above 
  else if(dayNew === ("thursday" || "friday")){
  console.log(`today is the only day to give your 100%`)
  line as follows

  else if (dayNew === "thursday" || dayNew === "friday"){
  console.log(`today is the only day to give your 100%`)
  line as follows`)} */



// Statements and Epressions
// the line of text that gives us some (value or result) as the output  is known as Expression like 3 + 4 is an expression or 1922 or true && false && !false is also a expression because this will give us some result 
// Expressions are like the words that output some results but the Statements are the Sentences which does not shows any result as the output 

// like here is the example of the statement

if(34>30){
  const str ="34 is bigger than 30";
}

// in the above example the output of this code will be nothing so the above code is a Statement 
// we insert the Expression in the placeholder not the Statement because the statement does not produces any result in itself

const me = "this is the text which is stored in the me variable "
console.log(`this is the placeholer ${me}`)
// Inshort you can remember it as Expression Produces values but Statements don't

// The conditional (Ternary) Operator
// in the conditional (Ternary) Operator we actually first declar a variable and than we write if like condition in the following way without using if  keyword as given below and then we use a question mark "?" after we write the condition which actually will be execuated if the given condition will be true and then we write a colon ":" after that we define what will be happened if the first condition will not be true 


let ageMine = 14;
ageMine >= 18 ? console.log("Hey you can drink any thing you want"): console.log("Only one thing is available for you");

// conditional operator is an operator so it has some value and therefore this is an expression not a statement (so we can use it in the place holder)

// we can simply use the ternary operator to simply execute a condtion statement in a simple way than the comparision to the If else statement here is an example of how we can simplify the usages of the Ternary operator in this way

ageMine = 14;
let drink = ageMine >= 18 ? "You can drink anything" : "You can only drink water";
console.log(drink);

//in the above code let drink = ageMine >= 18 ? "You can drink anything" : "You can only drink water"; is the expression 

// we can also write the above code in the form of the if else statement so here is the defined way to write the above code 

let drink2;
if (ageMine >= 18){
  drink2 = "anything you want to drink"
}else {
  drink2 = "you can only drink water";
}
console.log(drink2);

console.log(`${ageMine >= 18 ? "You can drink anything" : "You can only drink water"}`)

// Inside of a tempelate literal you can use the conditional becase the ternary operator has a value as we used in the above code  

// in the above example in the placeholder we used the expression ageMine >= 18 ? "You can drink anything" : "You can only drink water" because the expression has a value which can be  "You can drink anything" or "You can only drink water"  for different condition
