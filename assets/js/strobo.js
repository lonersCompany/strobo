---
---

const stroboGallery = (galleryElement) => {

  const allSlots = Array.from(galleryElement.getElementsByClassName('window'));
  const cadence = 200;
  const numberChanger = 0; // TODO: nefined like first element


  allSlots.forEach((slot) => {
    slot.addEventListener('mouseover', function () {
      slot.classList.remove('stop')
    }, false)

    slot.addEventListener('mouseout', function () {
      slot.classList.add('stop')
    }, false)
  })

  const runStrobo = (array) => {

    //const activeSlots = array.filter(object => console.l); //object.classList.contains('.active')
    const activeSlots = array.filter((element) => element.classList.contains('stop'));
    const slotNumber = randomNumber(activeSlots.length);
    const slotElement = activeSlots[slotNumber];
    const childsElement =  Array.from(slotElement.childNodes);
    const childsNumber = randomNumber(childsElement.length);
    const childElement = childsElement[childsNumber];

    const offslots = activeSlots.forEach((element) => {
      element.classList.remove('active');
    });
    const offchilds = childsElement.forEach((element) => {
      element.classList.remove('active');
    });
    const activeSlot = slotElement.classList.add('active');
    const activeChild = childElement.classList.add('active');
  }

  var loop = (cadence) => {
    return setInterval(function() {
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
