//type conversion or type coercion
console.log('Welcome Gauhar');

let myVar;
myVar =  String(34);
console.log(myVar , (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar ,(typeof booleanVar));

let date = new Date();
console.log(date , (typeof date));

//using toString() to convert in string easily

let i = 8;
console.log(i.toString());
console.log(i , (typeof i));

let str1 = Number('3434');
str1 = Number('34d34');
console.log(str1 , (typeof str1));

// parsInt or parsFloat function

let number = parseInt(34325);
console.log(number , (typeof number))

//toFixed function it convert into string but it shows decimal ahead when we initialise .toFixed(4); the output is 23.0000;

let numberI = parseFloat(23453);
console.log(numberI.toFixed(4) , (typeof numberI));


//Type Coercion
let mystr = Number(324);
let mynum = 3432;

console.log(mystr + mynum);

