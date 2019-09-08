const stroboGallery = mainEl => {
  const mobilespeed = 500;
  const desktopspeed = 0;

  const mainArray = Array.from(mainEl.children);

  // Separate MAIN ARRAY INTO THREE ARRAYS
  const byThree = array => {
    let allArray = [[], [], []];

    let i = 0;
    array.forEach(object => {
      if (i === 0) {
        allArray[0].push(object);
      }

      if (i === 1) {
        allArray[1].push(object);
      }

      if (i === 2) {
        allArray[2].push(object);
      }

      i++;

      if (i === 3) {
        i = 0;
      }
    });

    return allArray;
  };

  if (isMobile()) {
    // one col
    const chooseWithAll = randomChoose();

    // automatic strobo loop
    var loop = cadence => {
      return setInterval(function() {
        chooseWithAll(mainArray);
      }, cadence);
    };
    loop(mobilespeed);

    // Event listener strobo loop
    window.addEventListener(
      "scroll",
      function() {
        chooseWithAll(mainArray);
      },
      false
    );
  }

  // DESKTOP
  if (!isMobile()) {
    // Scroll speed optimaziton
    let trasferIndex = 0;
    const scrollSpeedTrasfer = gear => {
      if (trasferIndex < gear) {
        trasferIndex++;
      } else {
        trasferIndex = 0;
        runStrobo();
      }
    };

    const devidedArray = byThree(mainArray);

    const zero = devidedArray[0].map(object => {
      object.classList.add("zero");
    });

    const first = devidedArray[1].map(object => {
      object.classList.add("first");
    });

    const second = devidedArray[2].map(object => {
      object.classList.add("second");
    });

    const orderChooseSub = devidedArray.map(array => randomChoose());

    // DESKTOP STROBO CHANGER
    const runStrobo = () => {
      let slotNumber = randomNumber(devidedArray.length);
      let activeSubArray = orderChooseSub[slotNumber](devidedArray[slotNumber]);
    };

    if (desktopspeed > 0) {
      (function(cadence) {
        return setInterval(function() {
          runStrobo();
        }, cadence);
      })(desktopspeed);
    }

    if (window.addEventListener) {
      window.addEventListener(
        "scroll",
        function() {
          //runStrobo();
        },
        false
      );

      window.addEventListener(
        "mousewheel",
        function() {
          scrollSpeedTrasfer(5);
        },
        false
      );
      // Firefox
      window.addEventListener(
        "DOMMouseScroll",
        function() {
          scrollSpeedTrasfer(5);
        },
        false
      );
    } else {
      // // IE 6/7/8
      window.attachEvent(
        "onmousewheel",
        function() {
          //runStrobo();
        },
        false
      );
    }
  }
};

const windowEl = document.querySelector(".strobo-gallery"); // TODO: not get all
if (windowEl) {
  stroboGallery(windowEl);
}
