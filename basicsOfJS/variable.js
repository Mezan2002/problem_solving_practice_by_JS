/*
 *  all programming languages has that variable
 * variables are used for save a value for another use and it could be changed
 * vary + able = variable which means that thing which can be changed at any time like your age
 * there are 3 keywords to declare a variable in JS but we will know only the var in that time
 * different programming languages has different style to write the variables in that case we are learing
 * JavaScript so in javascript the variable written style is down below:
 1. declare the variable keyword which is var
 2. give a name of the variable
 3. give an qual sign
 4. then assign the value of the variable,
 5. use the semi colon (;) sign to end the variable 
 */

// example down below:

var age = 21; // ✅

/* ::::::::: BEST PRACTICES OF CREATING VARIABLE ::::::::: */
// 1. a variable name should be understandable and unique
// 2. variable names aren't starts with any type of number if you need a number then add the number at the end of the name
// 3. variable name wouldn't take any space or blank places
// 4. if the variable name contains more than one word then you can use the underscore (is_single) or the camel casing (isSingle)

// task : create 5 variables for practicing the variable declaration

var tempareture = 40;
var price = 500;
var rollNumber = 5;
var number_of_cars = 0;
var number_of_mobiles = 4;

/* ::::::::: VARIABLE TYPES ::::::::: */
// There are three types of variables:
// 1. number / numeric type variable
// 2. string type variable
// 3. boolean type variable

// 1. number / numeric type variable - (that will be a number which can be float or integer)
var myAge = 21; // ✅

// 2. string type variable - (strign will be in a quoation format if I use the single quotes or double quotes it will be ok but if I start with a double quote and end with a single quote then it will give an error)
var myName = "Mezanur Rahman"; // ✅

// 3. boolean type variable - (boolean will contains a boolean value which will be either a true or false and the word true and false will be in lowercase)
var amIsingle = true; // ✅

/*  ::::::::: WHAT SHOULD NOT TO DO CREATING VARIABLE ::::::::: */

// 1. resurved word or the keyword couldn't be a variable name, example:
// var return = false; ❌
// var false = 50; ❌

// 2. variable name wouldn't take any space or blank places, example:
// var my home address = "Rangpur"; ❌

// 3. variable name can't contain any quotations, example:
// var "my home address" = "Rangpur"; ❌

// 4. variable names aren't starts with any type of number if you need a number then add the number at the end of the name, example:
// var 2002Year = "my birth year"; ❌
// var year2002 = "my birth year"; ✅

// 5. how to write a big variable name, example:
// var mycurrenthomeaddress = "my currenthome address"; ❌
// var my-current-home-address = "my currenthome address"; ❌
// var my_current_home_address = "my currenthome address"; -> snake casing (Best Practice For Python) ✅
// var myCurrentHomeAddress = "my currenthome address"; -> camel casing (Best Practice For JavaScript) ✅
// var MyCurrentHomeAddress = "my currenthome address"; -> pascal casing

/* ::::::::: SOME NOTED POINTS FROM THAT LESSON ::::::::: */
/*
1. variables are case sensitive like
var age = 22;
var Age = 50;
those variables are not same
2. keywords or reserved words are case sensitive they always starts with the lowercase
3. we will use the camel case for the naming convention
*/
