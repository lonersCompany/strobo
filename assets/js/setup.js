window.onload = function() {
  const toggleFullScreen = sliderEl => {
    const zoomMode = sliderEl.classList.toggle("swiper-zoom-in");
    console.log(zoomMode);

    switch (zoomMode) {
      case "false":
        sliderEl.classList.add("swiper-zoom-in");
        sliderEl.scrollIntoView("alignToTop");
        break;

      default:
        sliderEl.classList.remove("swiper-zoom-in");
        sliderEl.setAttribute("zoom", "false");
        window.scrollTo(0, 0);
    }
  };

  const initFullScreen = sliderEl => {
    // const slidesArr = Array.from(sliderEl.querySelectorAll("img"));

    sliderEl.addEventListener("click", () => toggleFullScreen(sliderEl));
  };

  const sliderEl = document.querySelector(".swiper-controler");
  if (sliderEl) initFullScreen(sliderEl);

  //initialize swiper when document ready
  var swiperDetail = new Swiper(".swiper-controler", {
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets"
    },
    effect: "slide",
    loop: true
  });
};
