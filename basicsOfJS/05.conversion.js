/* ::::::::: CONVERSION ::::::::: */
var num1 = 2;
var num2 = 2;
var total = num1 + num2;
// console.log(total); // output => 4 (which is a number)
// in that case we are doing the addition math operation on two numbers but in any case that could be happened that we will get one string and one number then what will happen or we are getting two numbers but the numbers is in the quoation then it will behave like an string then what will happen?

var num1 = "2";
var num2 = "2";
var total = num1 + num2;
// console.log(total); // output => 22 (which is a string)

// now why that is happening? there is a thing which is if we add two strings together then we will get back a string where they will make those strings together like if I add hello + world then we will get another string which will be helloworld so that is the string addinional method but if we have numbers but it is given us in a quoatation and we need to play any mathematical operations then we can do that :

var num1 = "2";
var num2 = "2";
var num1ToNumber = parseInt(num1);
var num2ToNumber = parseInt(num2);
// we need to use that parseInt method to get the number as a number remember that will only work on the numbers if I give any string like hello then it won't work, and that is for only the integer number which numbers didn't contains any decimal (.)
var total = num1ToNumber + num2ToNumber;
// console.log(total); // output => 4

// there could be another situation where we will get any float number like that :
var gpa = "4.55";
var gpaIntoNumber = parseInt(gpa); // there could be an problem if we log that then it will give a number which will be an integer number like the output will be 4 but we need the output 4.55 as a number so in that case we need to use the parseFloat method instead of parseInt

var gpaIntoNumber = parseFloat(gpa);
// console.log(gpaIntoNumber); // output => 4.55

var decimalNum1 = 0.1;
var decimalNum2 = 0.2;
var sum = decimalNum1 + decimalNum2;
// console.log(sum); // output => 0.30000000000000004
// now there is we have founded a long number of decimal but we don't need that much long number so how can we fix that? In the JavaScript we have a thing like parseInt and parseFloat to fix that which is toFixed and after writing this method we need to give a number which is how much digit of decimal we want to see here so in that case I will give here 1 cause we need to see 1 digit after the decimal
var sumToFixed = sum.toFixed(1);
// console.log(sumToFixed); // output => 0.3 but that would be in string so we have learned that how can we convert a string into a number and we will use here the parseFloat cause we have the decimal number here
var sumToNumber = parseFloat(sumToFixed);
console.log(sumToNumber); // output => 0.3 which is converted into a number
