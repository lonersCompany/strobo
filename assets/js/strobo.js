---
---

const stroboGallery = (mainElement) => {

  const childrens = mainElement.children;
  const mainArray = Array.from(childrens)
  const fromZero = 0; // TODO: nefined like first element
  let returner = 0;


  const activeArray = mainArray.map((slot) => {
    slot.addEventListener('mouseout', function () {
      slot.classList.remove('stop')
      //print(slot);
    }, false)

    slot.addEventListener('mouseover', function () {
      slot.classList.add('stop')
      //print(slot);
    }, false)
  })

  // order choose element
  const orderChoose = (array) => {


    let newNumber = 0;
    const maximum = array.length;

    return () => {

      let oldNumber = newNumber++;

      // array[oldNumber].classList.remove('active');
      // array[newNumber].classList.add('active');
      console.log(oldNumber);

      return newNumber
    }

  }

  // random choose element
  const randomChoose = (array) => {

    let newNumber = 0;
    const maximum = array.length;

    return () => {

      // switch off old element
      let oldNumber = newNumber;
      array[oldNumber].classList.remove('active');

      // make new and switch on new element
      newNumber = randomNumber(maximum);
      array[newNumber].classList.add('active')

      return newNumber
    }

  }

  const orderChooseMain = randomChoose(mainArray);
  const subArrays =  mainArray.map((array) => Array.from(array.children));
  const orderChooseSub = subArrays.map((array) => randomChoose(array));

  const choseSlotElement = function () {
    let slotNumber = orderChooseMain();
    let elementNumber = orderChooseSub[slotNumber]();
  }

  return choseSlotElement;
}

const windowEl = document.querySelector('.strobo-gallery'); // TODO: not get all

const buku = stroboGallery(windowEl);

const cadence = 200;

var loop = (cadence) => {
  return setInterval(function() {
    buku();
  }, cadence);
};


// only homepage
if(isHomepage()) {
  loop(cadence);
}

const addMouseWheelEventListener = function (scrollHandler) {
  if (window.addEventListener) {
    // IE9+, Chrome, Safari, Opera
    window.addEventListener("mousewheel", function() {
      buku();
    }, false);
    // Firefox
    window.addEventListener("DOMMouseScroll", function() {
      buku();
    }, false);
  } else {
    // // IE 6/7/8
    window.attachEvent("onmousewheel", function() {
      buku();
    }, false);
  }
}

addMouseWheelEventListener();
