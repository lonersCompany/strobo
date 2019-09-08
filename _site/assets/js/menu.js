'use strict';

var buttonEl = document.querySelector('.info-btn');
var infoEl = document.querySelector('.info');

//hoverButton(buttonEl, document.body, 'info-is-active');
//toggleButton(buttonEl, document.body, 'click', 'info-is-activated');

if (buttonEl) {
  buttonEl.addEventListener('click', function () {
    document.body.classList.add('info-is-activated');
    document.body.classList.add('animated-menu');
  }, false);

  infoEl.addEventListener('click', function () {
    document.body.classList.remove('info-is-activated');
    document.body.classList.remove('animated-menu');
  }, false);
}