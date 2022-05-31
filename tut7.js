//Array and Objects
console.log('WELCOME');

/*let birds1 = 'sparrow';
let birds2 = 'crow';
let sentence = `hello ${myName}
                    <h2> This is  ${birds1}sparrowr </h2>



                             `;
                             document.body.innerHTML = sentence;
                             console.clear()*/

const fruits = ['Mango' , 'Orange' , 'Apple'];
const  marks = [10 , 34 , 53, 56, 98,];

const arr = new Array(10, 32, 56 , 'Gauhar');
console.log(fruits);
console.log(fruits[1]);
console.log(marks);
console.log(fruits.length);
marks[0] = 'Gauhar';
//when we check index value
let value = marks.indexOf(98);
//console.log(value);
//Mutating or Modifying the array
marks.push(2342);
console.log(marks);
// if i want to assign the value of first positin we use unShift() method
marks.unshift(12342);
console.log(marks);
//if i want to remove the element in last index where i stored
marks.pop();
console.log(marks);
// and shift() method is used to remove first element
marks.shift();
console.log(marks);
//how much element remove in this array we use splice() to remove more elements 
marks.splice(0 , 3);
console.log(marks);
//reverse() is used to opposite the array;
marks.reverse()
console.log(marks);
//concat() is used to join two or more arrays
/************************************************* */
let myObj = {
    name: 'Gauahr Nawab',
    branch: 'b.tech',
    isActive: true,
    marks: [23,43,56,67]
}
console.log(myObj);
console.log(myObj.branch);





