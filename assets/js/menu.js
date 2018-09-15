

  //const menuEl = document.getElementById('info');
  //const addEvent = menuEl ? toggleButton(menuEl, 'click', 'active') : console.error('missing menuEl');
  const buttonEl = document.getElementById('info-btn');

  hoverButton(buttonEl, document.body, 'info-is-active');
  toggleButton(buttonEl, document.body, 'click', 'info-is-activated');
