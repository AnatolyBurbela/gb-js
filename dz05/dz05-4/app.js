'use strict';

let product = document.querySelector('product');
let buttons = document.querySelectorAll('button');
let img = document.querySelector('.product-img');
let txt = document.createElement('p');

txt.innerText = 'Hello world';

product.appendChild(txt);

// function desc(txt) {
//     product.appendChild(txt);
//     img.style.display = 'none';
// }


