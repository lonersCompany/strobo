//
// Strobo effect for homepage
//
// ------------------------------------

  const windowEl = document.querySelector('.windows'); // TODO: not get all
  const ElementArray = Array.from(windowEl.childNodes);
  const cadence = 700;
  const mobile = function() {
    return document.body.clientWidth < config.breakPoints.mobile;
  };

  var numberChanger = undefined; // TODO: nefined like first element





function runStrobo() {
  numberChanger = (function (oldElement, array) {
    //var newElement = makeNewNumber(array);
    const ColNumber =  randomNumber(array.length);
    const ColElement =  Array.from(array[ColNumber].childNodes);
    const newElement = ColElement[randomNumber(ColElement.length)];

    // DOTO: four
    if (oldElement) {
      if(mobile()) {
        toggleClass(oldElement, 'active');
      } else {
        ColElement.forEach(function(element) {
          element.classList.remove('active');
        });
      }
    }

    toggleClass(newElement, 'active')

    return newElement;

  }(numberChanger, ElementArray));
}

// windowEl.addEventListener("mousewheel", function() {
//   runStrobo();
// }, false);

// var loop = function (flag) {
//
//     var rand = Math.floor((Math.random() * 200) + 100);
//
//     print(flag);
//     if(flag) {
//       interval = setTimeout(function() {
//         runStrobo();
//         loop(true);
//       }, rand);
//     }
// }

var loop = function () {
  // private
  return begin = setInterval(function() {
    runStrobo();
  }, 700);
}; loop()

if(mobile()) {
print('mbile')

  windowEl.addEventListener("touchstart", function() {
    print('down')
    clearInterval(begin);
  }, false);

  windowEl.addEventListener("touchend", function() {
    print('up')
    loop();
  }, false);

} else {

  windowEl.addEventListener("mousedown", function() {


    clearInterval(begin);
  }, false);

  windowEl.addEventListener("mouseup", function() {

    loop();
  }, false);

}







    // windowEl.addEventListener("touchend", function() {
    //   loop();
    // }, false);

  // const runStrobo = (elements) => {
  //
  //   const activeClass = (x) => x.classList.contains('active');
  //   const activeElements = ElementArray.filter(activeClass);
  //   const ColN = randomNumber(activeElements.length);
  //   const childs = Array.from(activeElements[ColN].childNodes);
  //   const activeChild = childs.filter(activeClass).forEach(function(element) {element.classList.toggle('active')});
  //   const ProjectN = randomNumber(childs.length);
  //   const ProjectEl = childs[ProjectN].classList.toggle('active');
  //
  // }
