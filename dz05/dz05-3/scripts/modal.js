'use strict';

let openBtn = document.querySelector('.open-modal');
let modal = document.querySelector('.modal');
let closeBtn = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

function toggleWindow() {
    modal.classList.toggle('modal-active')
    overlay.classList.toggle('overlay-active')
}

openBtn.addEventListener('click', toggleWindow);
closeBtn.addEventListener('click', toggleWindow);