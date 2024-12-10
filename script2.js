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


// in the above example we assigned the function with the name of 'name' and after that we put the small brackets and then we put the curly brackets which is the body of the function in the body part of the function we can put any code that we want to get when we call the function by its name in anywhere in the whole code space of this project 

// we call the function just by using name of the function and the small brackets of the function and then at the end of that we use the semicolon as we use  

// invoking the function or running the function or calling the function all are the same term 
