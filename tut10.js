console.log('Welcome to Function Tutorial :- ');
//FUNCTION :- function is a block of code which is designed to repeat a particular task without writint too many line of codes.
function birthdayWishes(name , thanks) {
    console.log(`They say ${name} you lose your memory as you grow older. I say forget about the past and live life to the fullest today. Start with cake. Happy birthday ${thanks}`)
}
birthdayWishes('Ahmar' , 'thanks a lot');
// * we add a default value
// * pass multiple parameter
// function none(name , class, greeting , branch);

/* function greet (name , thanks = 'Thankyou')
{
    console.log(`They say ${name} you lose your memory as you grow older. I say forget about the past and live life to the fullest today. Start with cake. Happy birthday ${thanks}`)
    
    // we want to return anything
    return 0;

    let val = birthdayWishes(name);
    console.log(val);
} 
 */

// * ek variable ko hm function me bhi dal sakte hai jaise |
//    const mygreet = function(name , thankyou )
// where const is my data type where i study previously

// ek object ke andar bhi function ko bna sakte hai

const obj1 = {
    name: 'SkillF',
    game: function(){
        return 'GTA';
    }
}
console.log(obj1.game());//here is a demonstration


arr = ['fruit' , 'vegetable' , 'furniture'];
arr.forEach(function(element , index , array) {
    console.log(element ,  index)//generally hm array iteration me print karte hai
});

// SCOPE:-



