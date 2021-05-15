const mainTitle = document.querySelector("#main-title");
const subTitle = document.querySelector('.sub-title');

console.log(mainTitle);
const li = document.querySelectorAll('ul > li');
li.forEach(node => node.style.color = 'purple');

const h1 = document.querySelector('h1');
h1.innerHTML = 'AAAAA <span style="color: blue;">BBBBB</span>';
