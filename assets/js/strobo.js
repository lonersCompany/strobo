//
// Strobo effect for homepage
//
// ------------------------------------

const stroboGallery = (galleryElement) => {

  const slotA = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];
  const slotB = ['b1', 'b2', 'b3', 'b4', 'b5'];
  const slotC = ['c1', 'c2', 'c3', 'c4'];
  //const allSlots = [slotA, slotB, slotC];
  const allSlots = Array.from(galleryElement.getElementsByClassName('window'));
  const cadence = 2000;

  var numberChanger = 0; // TODO: nefined like first element

  const runRandomChoose = (array) => {
    numberChanger = (function (oldElement) {

      const offElement = oldElement ? oldElement.classList.remove('active') : undefined;
      const newElement = array[randomNumber(array.length)];
      const activeElement = newElement.classList.add('active');
      return newElement;

    }(numberChanger));

    return numberChanger
  }

  const runOrderChoose = (array) => (numberChanger) => {

    numberChanger = (function (oldNumber) {
      console.log('n: ' + oldNumber);
      const newNumber = oldNumber < (array.length - 1) ? oldNumber + 1 : 0;
      console.log('o: ' + newNumber);
      return newNumber;
    }(numberChanger));

    return numberChanger
  }

  const runStrobo = (array) => {
    const slotNumber = randomNumber(array.length);
    const slotElement = array[slotNumber];
    const childsElement =  Array.from(slotElement.childNodes);
    const childsNumber = randomNumber(childsElement.length);
    const childElement = childsElement[childsNumber];

    const offslots = array.forEach((element) => {
      element.classList.remove('active');
    });
    const offchilds = childsElement.forEach((element) => {
      element.classList.remove('active');
    });
    const activeSlot = slotElement.classList.add('active');
    const activeChild = childElement.classList.add('active');
  }

  // var loop = (cadence) => {
  //   return begin = setInterval(function() {
  //     runStrobo(allSlots);
  //   }, cadence);
  // };
  //
  // loop(cadence);


  var addMouseWheelEventListener = function (scrollHandler) {
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
