window.onload = function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    loop: true
  })
};
