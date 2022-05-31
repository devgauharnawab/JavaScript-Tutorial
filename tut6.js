console.log('Welcome');
//String 
const name = 'Gauhar';
const greeting = 'Good Evening';
console.log(greeting + ' ' + name);
//concat() method is used to existing string uske aage jitne bhi string dete hai aage lga deta hai:
let html;
html = "<h1> this is heading </h1>" + "<p> this is my paragraph</p>";
html = html.concat(' this ', ' str2 ');
console.log(html);
//whenever we print length of string:
console.log(html.length);
//if we want to convert the string into lower case then we will be use the .toLowerCase(); and when we used toUpperCase()function;
console.log(html.toUpperCase())
//if we want to check string indexing
console.log(html[1]);
//if we want to see where word indexed is hold then we use .indexOf() function.
console.log(html.indexOf('this'));
//if we last index occurence we use lastIndexOf() function
console.log(html.lastIndexOf('<'));
console.log(html.charAt(2));
//kya meri html string str2 pr end hoti hai or agar hoti hai boolean return karega
console.log(html.endsWith(''));
let nawab;
nawab = 'this is a gauhar ' +   2 ;
console.log(nawab);
//if we want to saw the words is inside the string or not we use includes
console.log(nawab.includes('gauhar'));
console.log(nawab.includes('no'));
//if we want substring
console.log(nawab.substring(0,6));
//slice function
console.log(nawab.slice(-4));
//if i break into sub arrays or words we will use split funtion
console.log(nawab.split(' '))
//if we want to replace 'it' intp 'this' we will use replace() function;
console.log(nawab.replace('gauhar' , 'nawab'));
console.log(nawab.replace('a' , 'nawab'));


//  Tempelate Literals

let fruit1 = 'Orange';
let fruit2 = 'Mango';
let myHtml = `Hello ${name}

                <h1> This is My Site </h1>
                <p> you like ${fruit1} and ${fruit2} </p>

                    `;
                    document.body.innerHTML = myHtml;
                    
                    