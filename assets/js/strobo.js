---
---

const stroboGallery = (mainEl) => {

  const mainArray = Array.from(mainEl.children);

  if(isMobile()) {
    // one col
    const chooseWithAll = randomChoose();

    var loop = (cadence) => {
      return setInterval(function() {
        chooseWithAll(mainArray)
      }, cadence);
    };
    loop(1000)

    window.addEventListener("scroll", function() {
      chooseWithAll(mainArray)
    }, false);

  } else {
    // two console// closures
    const bythree = (array) => {


      let allArray = [[], [], []];

      let i = 0;
      array.forEach((object) => {

          if(i === 0) {
            allArray[0].push(object)
          }

          if(i === 1) {
            allArray[1].push(object)
          }

          if(i === 2) {
            allArray[2].push(object)
          }

          i++

          if( i === 3) {
            i = 0;
          }
      });

      return allArray
    }

    const devidedArray = bythree(mainArray);

    const zero = devidedArray[0].map((object) => {
      object.classList.add('zero');
    });

    const first = devidedArray[1].map((object) => {
      object.classList.add('first');
    });

    const second = devidedArray[2].map((object) => {
      object.classList.add('second');
    });
    
    const orderChooseSub = devidedArray.map((array) => randomChoose());
    const runStrobo = () => {
      let slotNumber = randomNumber(devidedArray.length);
      let activeSubArray = orderChooseSub[slotNumber](devidedArray[slotNumber]);
    };

    var loop = (cadence) => {
      return setInterval(function() {
        runStrobo()
      }, cadence);
    };

    loop(1000);

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



}

const windowEl = document.querySelector('.strobo-gallery'); // TODO: not get all
if(windowEl){stroboGallery(windowEl)}
