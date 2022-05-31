console.log('welcome');
// how to manipulate and traverse
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
console.log(cont.childNodes);
console.log(cont.children)

let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);

//children se hame sirf elements milenge 

let container = document.querySelector('div.container');
console.log(container.children[1]);
//count of child element.
console.log(container.childElementCount)
//when we see sibling
console.log(container.firstElementChild.nextSibling)