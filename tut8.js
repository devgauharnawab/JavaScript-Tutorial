console.log('WELCOME CODES');

// Statement Operator
const age = 35;
const vari= 34;
if (age == 35) {
    console.log('age is 35');
}
else if (age == 65){
    console.log('age is 65');

}
else{
    console.log('age is not 35');
}
if (typeof vari != 'undefined') {
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
/*New programme of Boolean */
const doesDrive = true;
if(doesDrive && age > 18){
    console.log('i can drive');
}
else{
    console.log('i cannot drive');
}
//turnary opearator

console.log(age == 45? 'Age is 45' : 'Age is not 45');
//Switch case statements
switch (age) {
    case 35:
        console.log('You are 35');
        
        break;
    case 28:
    console.log('Age is 28');
    break;    

    default:
        console.log('You are unknown');
        break;
}