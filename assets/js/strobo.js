//
// Strobo effect for homepage
//
// ------------------------------------

  const windowEl = document.querySelector('.windows'); // TODO: not get all
  const collumsEl = windowEl.childNodes;
  const ElementArray = Array.from(collumsEl);
  const cadence = 700;

  var makeNewNumber = (array) => {
    const Col =  Array.from(array[randomNumber(array.length)].childNodes);
    const newElement = Col[randomNumber(Col.length)];
    return newElement
  }


  var numberChanger = undefined; // TODO: nefined like first element

  windowEl.addEventListener("mousewheel", function() {

    numberChanger = (function (oldElement, array) {

      var newElement = makeNewNumber(array);

      print()

      if (oldElement) toggleClass(oldElement, 'active');
      toggleClass(newElement, 'active')

      return newElement;

    }(numberChanger, ElementArray));

  }, false);


  hoverEvent(ElementArray, 'active');
