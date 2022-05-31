console.log('WELCOME TO JAVA SCRIPT');
// how to create element in html webpage;

let element = document.createElement('li');
//Add a class name to the li element
element.className = 'child1';
element.id = 'createdLi'
//we can create a attribute inside the html tag
element.setAttribute('title' , 'my title');
//add the text
// * if you are adding the innerText you cannot bold the text so you use the innerHtml tag
element.innerHTML = '<strong>NO ONE CAN MAKE YOU FEEL INFERIOR</strong>';
//we grab the ul tag
let ul = document.querySelector('ul.this');
//appendchild is used to attch in dom object
ul.appendChild(element);
console.log(ul)
console.log(element);

// * it is used to add the text
let text = document.createTextNode('i am a moosee');
element.appendChild(text)

let elem2 = document.createElement('h1');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is elem2');
elem2.appendChild(tnode);
// if we want to replace one element to other element we use replace with finction
element.replaceWith(elem2);
// if we want to remove child
// * so we simply use myul.removeChild(document.getElementById('fui'));

// get attribute funcy=tion to get the attribute
let pr = elem2.getAttribute('class');
console.log(elem2, pr)
// hasAttribute return boolean expression

let dr = elem2.hasAttribute('id')
console.log(dr)

// we can remove the attribute using removeAttribute
