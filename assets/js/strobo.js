//
// Strobo effect for homepage
//
// ------------------------------------

const stroboGallery = (galleryElement) => {

  const allSlots = Array.from(galleryElement.getElementsByClassName('window'));
  const cadence = 500;
  const numberChanger = 0; // TODO: nefined like first element


  allSlots.forEach((slot) => {
    slot.addEventListener('mouseover', function () {
      slot.classList.remove('stop')
    }, false)

    slot.addEventListener('mouseout', function () {
      slot.classList.add('stop')
    }, false)
  })



  // NOT IN USE
  // const runRandomChoose = (array) => {
  //
  //   numberChanger = (function (oldElement) {
  //
  //     const offElement = oldElement ? oldElement.classList.remove('active') : undefined;
  //     const newElement = array[randomNumber(array.length)];
  //     const activeElement = newElement.classList.add('active');
  //     return newElement;
  //
  //   }(numberChanger));
  //
  //   return numberChanger
  // }

  // NOT IN USE
  // const runOrderChoose = (array) => (numberChanger) => {
  //
  //   numberChanger = (function (oldNumber) {
  //     const newNumber = oldNumber < (array.length - 1) ? oldNumber + 1 : 0;
  //     return newNumber;
  //   }(numberChanger));
  //
  //   return numberChanger
  // }

  const runStrobo = (array) => {

    //const result = array.filter(object => console.l); //object.classList.contains('.active')
    const result = array.filter((element) => element.classList.contains('stop'));
    const slotNumber = randomNumber(result.length);
    const slotElement = result[slotNumber];
    const childsElement =  Array.from(slotElement.childNodes);
    const childsNumber = randomNumber(childsElement.length);
    const childElement = childsElement[childsNumber];

    const offslots = result.forEach((element) => {
      element.classList.remove('active');
    });
    const offchilds = childsElement.forEach((element) => {
      element.classList.remove('active');
    });
    const activeSlot = slotElement.classList.add('active');
    const activeChild = childElement.classList.add('active');
  }

  var loop = (cadence) => {
    return begin = setInterval(function() {
      runStrobo(allSlots);
    }, cadence);
  };

  loop(cadence);


  const addMouseWheelEventListener = function (scrollHandler) {
    if (window.addEventListener) {
      // IE9+, Chrome, Safari, Opera
      window.addEventListener("mousewheel", function() {
        runStrobo(allSlots);
      }, false);
      // Firefox
      window.addEventListener("DOMMouseScroll", function() {
        runStrobo(allSlots);
      }, false);
    } else {
      // // IE 6/7/8
      window.attachEvent("onmousewheel", function() {
        runStrobo(allSlots);
      }, false);
    }
  }

  addMouseWheelEventListener()
}

const windowEl = document.querySelector('.strobo-gallery'); // TODO: not get all

if(windowEl) stroboGallery(windowEl);
