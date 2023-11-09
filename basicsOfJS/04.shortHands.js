/* ::::::::: SHORTHAND ::::::::: */
// In that cause shorthand means the short way to play a operation
var onionPrice = 20;
// we have told that the variables could be changed so thats why now we will change the variable

/* we can change the value of a variable in two ways */
// to change the value of a variable we need to do the same step which we have do at the time of declaration of the variable but there have a change here that is we won't use the var keyword when we will change the variable value
// 1. we can change the value of a variable with a new value like that
onionPrice = 25; // now the value of onionPrice is 25

// 2. we also can change the value of a variable in another way which is we will add something new with the previous value of the variable
onionPrice = onionPrice + 5; // now the value of onionPrice is 25 + 5 = 30
// that means the previous value of the variable will be stable and then we are adding + 5 with the previous value

/* now we can talk about the shorthand of that operation */
// we have change the value like that :
onionPrice = onionPrice + 5; // but there has another way to change the value with the shorthand which is
onionPrice += 5; // that means the previos value of onionPrice + 5 those two lines are same
// onionPrice = onionPrice + 5; === onionPrice += 5; (+= is the shorthand of variable = variable + 5)

// that was for the addition operation in that same way we can do other operations also like :
// (-= is the shorthand of variable = variable - 5)
// (*= is the shorthand of variable = variable * 5)
// (/= is the shorthand of variable = variable / 5)

// In that same way if you want change the value which is value + 1 then you can also do that
onionPrice++; // it will increase the value of the variable + 1
onionPrice--; // it will increase the value of the variable - 1
