console.log('welcome');
//Single element dom (document object model) selector
 let element = document.getElementById('myfirst');
// element = element.childNodes;
 //element = element.className;
// element = element.parentNode;
// if i coloured this element
element.style.color = 'red' ;
//element.style.backgroundColor = 'grey';
//element.textContent = 'bold';
element.innerText = 'My name is gauhar';
 //console.log(element);

 //QuerySelector:
 let sel = document.querySelector('#myfirst');
 sel.style = 'green';
 console.log(sel);


 // multi element selector help to select on or more elements in DOM

 let elems = document.getElementsByClassName('child');
 elems = document.getElementsByClassName('container');
 elems = document.getElementsByTagName('div');
 console.log(elems);
 Array.from(elems).forEach(element => {
     console.log(elems);
     element.style.color = 'blue';
     element.style.backgroundColor = 'grey';
 });
 //console.log(elems[0].getElementsByClassName('child'));
