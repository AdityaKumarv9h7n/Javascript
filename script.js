const now = 2024;

const firstName = "Aditya"
const lastName = "Kumar"
const Age = now - 2005;
const Country = "India"


const personsAge = now -2005;



// console.log(typeof Name);
// console.log(typeof Age);


// Maths operators


console.log(Age, personsAge, Age -  personsAge);
console.log(Age*2);
console.log(personsAge/5);
console.log(personsAge**2);
console.log(personsAge**(1/2))
console.log(firstName + " " + lastName);

//Assignment operators 
let x = 34;
 x += 10;

 // meaning of this code is x = x + 10;

 x -= 20;

 // meaning of this code is x = x - 20; but think about the last defined value of the x in this case when we log this x into the console we will get the last assign value of the x is 34+10 which is 44
 // so the code is x = 44 - 20 which is 24

 console.log(x)

 x *= 4
 console.log(x)

 x /= 4
 console.log(x)

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

console.log(Age**2);

// Exponentiation operator has the higher precedence  and the Associativity of this operator is from right-to-left it means 

console.log(2**2/3**2);

// in this condition first 3**2 will be done and then 2**2 and then the result of 2**2 will be divided by the result of 3**2



// so this clears that exponentiation works first and than any other type of operators like additive operators, multiplicative operators 

// here is the another example of the same thing

let z,y;
z = y = 20 - 13;

console.log(z,y);

// in this condition first 20 - 13 will be done and then the result of 20 - 13 will be assigned to both the variables z and y 


let massOfMarks = 78
let heightOfMarks = 169

let massOfJohn = 92
let heightOfJohn = 195

// BMI is the ratio of the mass of a person to the square of their height

console.log(massOfMarks/(heightOfMarks/ 100) **2);

console.log(massOfJohn /(heightOfJohn/ 100) **2);

// or

console.log(massOfMarks/((heightOfMarks/100)*(heightOfMarks/100)));
console.log(massOfJohn / ((heightOfJohn/100)*(heightOfJohn/100)));


const markHigherBmi = console.log(massOfMarks/((heightOfMarks/100)*(heightOfMarks/100)))

const johnHigherBmi = console.log(massOfJohn / ((heightOfJohn/100)*(heightOfJohn/100)));

console.log (markHigherBmi < johnHigherBmi);
// in this condition first the BMI of both the person will be calculated and then the result will be


    massOfMarks = 95
    heightOfMarks = 188

    massOfJohn = 85
    heightOfJohn = 176

// now i am going to check my own bmi value 

const massOfAditya = 44
const heightOfAditya = 166

console.log(massOfAditya /((heightOfAditya/100)*(heightOfAditya/100)));


const nameOfUser = "Aditya"
const ageOfUser = 20
const massOfUser = 44
const heightOfUser = 166

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

console.log("this is the \n\
string");
     
     // or 

console.log("this is the \n\string");

// if you will hit the tab then that space of the tab will also be taken by the browser to show that message in the console of the browser
