---
---
const buttonEl = document.querySelector('.info-btn');

//hoverButton(buttonEl, document.body, 'info-is-active');
//toggleButton(buttonEl, document.body, 'click', 'info-is-activated');

if(buttonEl) {
  buttonEl.addEventListener('click', function(){
    document.body.classList.add('info-is-activated');
  }, false)
}
