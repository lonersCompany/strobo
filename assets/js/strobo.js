//
// Strobo effect for homepage
//
// ------------------------------------

const stroboGallery = function(galleryElement) {
  const ElementArray = Array.from(galleryElement.childNodes);
  const cadence = 1000;

  // mobile return if true if
  const isMobile = () => document.body.clientWidth < config.breakPoints.mobile

  var numberChanger = undefined; // TODO: nefined like first element

  function runStrobo() {

    numberChanger = (function (oldElement, array) {
      //var newElement = makeNewNumber(array);
      const ColNumber =  randomNumber(array.length);
      const ColElement =  array[ColNumber];
      const childElements =  Array.from(ColElement.childNodes);
      const newElement = childElements[randomNumber(childElements.length)];

      // DOTO: four
      if (oldElement) {

        if(isMobile()) {
          toggleClass(oldElement, 'active');
        } else {
          childElements.forEach(function(element) {
            element.classList.remove('active');
          });
        }
      }

      toggleClass(newElement, 'active');

      return newElement;

    }(numberChanger, ElementArray));
  }

  var loop = function () {

    return begin = setInterval(function() {
      runStrobo();
    }, cadence);

  };
  //loop();


  //var addMouseWheelEventListener = function (scrollHandler) {
  if (window.addEventListener) {
    // IE9+, Chrome, Safari, Opera
    window.addEventListener("mousewheel", function() {
      runStrobo();
    }, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", function() {
      runStrobo();
    }, false);
  } else {
    // // IE 6/7/8
    window.attachEvent("onmousewheel", function() {
      runStrobo();
    }, false);
  }
}

const windowEl = document.querySelector('.strobo-gallery'); // TODO: not get all

if(windowEl) stroboGallery(windowEl);
