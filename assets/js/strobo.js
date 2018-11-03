---
---

// order choose element
const orderChoose = (array) => {

  let newNumber = 0;
  const maximum = array.length;

  return () => {

    let oldNumber = newNumber++;
    return newNumber
  }
}

// random choose element
const randomChoose = () => {
  let newNumber = 0;

  return (array) => {
    const maximum = array.length;
    // switch off old element
    let oldNumber = newNumber;
    array[oldNumber].classList.remove('active');

    // make new and switch on new element
    newNumber = randomNumber(maximum);
    array[newNumber].classList.add('active')

    return newNumber
  }
}

const stroboGallery = (mainEl) => {
  const childrens = mainEl.children;
  const mainArray = Array.from(childrens);
  const subArrays =  mainArray.map((array) => Array.from(array.children));


  // closures
  const randomChooseMain = randomChoose();
  const orderChooseSub = subArrays.map((array) => randomChoose());

  const runStrobo = () => {
    let slotNumber = randomChooseMain(mainArray);
    let activeSubArray = orderChooseSub[slotNumber](subArrays[slotNumber]);
  };

  const cadenceMobile = 1000;
  const cadenceDesktop = 200;

  var loop = (cadence) => {
    return setInterval(function() {
      runStrobo();
    }, cadence);
  };

  if(isMobile) {
    loop(cadenceMobile)
  } else {
    loop(cadenceDesktop)
  }

  if (window.addEventListener) {
    window.addEventListener("scroll", function() {
      runStrobo();
    }, false);

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
if(windowEl){stroboGallery(windowEl)}
