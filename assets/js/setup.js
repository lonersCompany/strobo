---
---
window.onload = function () {
  //initialize swiper when document ready
  var swiperDetail = new Swiper ('.swiper-controler', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    effect: "fade",
    loop: true
  })
};
