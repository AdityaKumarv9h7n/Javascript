// Javascript Fundamental Part 2
'use strict'

//Activating Strict Mode
// in the earlier version of the javascript if you want to get know about any error like in which line of the code you did something wrong then you had to write the code in the strict mode which can be turn on just by writing 'use strict' in the first line of the begining of you js code 


let nameOf = "Name";
let lastName = "Kumar";
console.log(nameOf + lastName);

// but now after using the 'use strict' which is the strict mode you can now get a message into the console about in which line of the code you made a mistake 


nameOf = "Name";
lastName = "Kumar";
console.log(nameOf + lastName);





// strict mode actually helps you not to assign the variable which will be a feature in the upcoming versions of the JS like the variable interface


//let interface = "name";
//console.log(interface);

// after adding the interface as a variable and using the strict mode which is on the top of all these codes actually help us not to assign some variable name which may be will be a feature in the upcoming js update those are called the reserved keywords

// we have to move forward so i am going to comment out the above code of the let interface variable 

// similarly we can not assign the variable name as private

// Function
// Function is a piece of code which we can use again and again in our entire project
// Function contains one or more complete line of codes 
// Variable holds a value 

function name (){
    console.log("My name is ADXWD")
};

name();
name();


// in the above example we assigned the function with the name of 'name' and after that we put the parentheses (small brackets) and then we put the curly brackets which is the body of the function in the body part of the function we can put any code that we want to get when we call the function by its name in anywhere in the whole code space of this project 

// we call the function just by using name of the function and then puting the parentheses after the name and at the end as we use the semicolon that will call the function 

// invoking the function or running the function or calling the function all are the same term 
// function can not only run the code but also can receive and return the data back 

// function can take the input and can return the output
//Parameteres are like variable which are only specific to this function they will get defined when we call the function

//Parameters represent the input data when we call the function

// Here the parameters are the apples and the oranges and the value of these parameters when we call the function is 5 and 3 for apples and the oranges respectively 


// function fruitProcesor (apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// fruitProcesor(5, 3);


// in the above example the console.log(apples, oranges); defined because we called the function with the parameters of 5 and 3 so the console.log(apples, oranges); will print

// in the above example as you saw that we called the function once so now the function contains the value of the const juice because we lastly returned the const juice in the above line of the code with the function 

// now we have to contain the value of the output of the function in the another variable 

// let resultJuice = fruitProcesor(5, 3);
// console.log(resultJuice);

// what happened in the above codes
// first we put the value of the parameters 
// then in the above function it fills the values 
// and then it logged to the console ( we actually did this because we want to see the result of the fruitProcessor function when we only put the paramerets in the fruitProcessor functions )
// and then it was captured in the juice variable
// and then it got return
// and then it was captured in the resultJuice variable
// and then it was logged to the console as console.log(resultJuice) ( we did this to see the result into the console )

// we can actually directly logged the value of the function to the console

// console.log(fruitProcesor(5, 3));

//if we use the above way to execute the value into the console it will aslo give the value of the function fruitProcessor 

// everytime we will call the function we will get the output into the console as the result we will get here three times the result 5,3 because the first time when it will log the value of the function into the console when we write the parameter value and then the another time will we then when this value will be execuated and then

function fruitProcessor(apples, oranges){
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}
// const appleJuice = fruitProcessor(5, 4);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 4));

// const appleOrangeJuice = fruitProcessor(7, 5);
// console.log(appleOrangeJuice);

const ju = fruitProcessor(9, 8);
console.log(ju);

//we can return the value of the function through the above given way
