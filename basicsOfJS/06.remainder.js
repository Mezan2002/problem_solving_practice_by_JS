/* ::::::::: REMAINDER / MODULES ::::::::: */
var mangoes = 11;
var person = 2;

// here if we need to know about the number remaining mangoes then what we will do? if we use the division (/) here then do we get the remaining mangoes? no we don't use the division (/) for getting that remaining number but in javascript we have an operator which will do that for us which is the modules operator (%) it looks like percentages sign

var remaining = mangoes % person;
console.log(remaining); // output => 1 which is the remaining value
