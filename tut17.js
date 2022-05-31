console.log("WELCOME TO EVENT , EVENTS OBJECT TOTORIAL");
/*document.getElementById('heading').addEventListener('click' ,function(e){
    console.log('you have clicked it');
    console.log(e)
   // location.href = '//google.com';
});

//e.target gave an element
*/

let btn = document.getElementById('btn');
btn.addEventListener('click' , func1);

function func1 (e) {
    console.log("Thanks" , e);
}
//e.preventDefault detail mujhe btata hai ke submitt nahi hoga
