console.log('Welcoe to tut9');
//Today we are starting to LOOP:-loop is a instruction and it repeated until the one condtion is proof wrong

//General loops:For loop , while loop , do while loop --
console.log('print all the nunbers 1 to 100')
/*for (let i = 0; i < 100 ; i++){
    
    console.log(i);
}*/
let j  = 0;
while(j < 100){
    console.log(j);
    j+=1;
}
let k = 0; 
do {
    console.log(k + 1);
    if(k===5){
        break;
      ///  continue; loop ke agli iteration me chale jao
    }
    k += 1;
} while (k < 10 );
console.log('done');
// we have two existing elements in loop that is break and continue
// loop which use in array or objects
let arr1 = [2 , 4, 5 , 3 ,2, 1];
arr1.forEach(function(element){
    console.log(element);
});

 //loop for iterate the object
 let obj1 = {
     name: 'Gauhar Nawab',
     os: 'Ubuntu',
     type: 'Danger',
     university: 'Integral University Lucknow'
 }
 for(let key in obj1){
     console.log(`The ${key} of objects is ${obj1[key]}`)
 }