//DOM : 
console.log('Welcome to website');
let website = document;
website= document.all;
//document.forms[1];
//console.log(website);
// hm array from ke madad se array me badal sakte hai
Array.from(website).forEach(function(element){
    console.log(element);

});
website = document.links;