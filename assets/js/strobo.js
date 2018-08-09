//
// Strobo effect for homepage
//
// ------------------------------------

  const windowEl = document.querySelector('.windows'); // TODO: not get all
  const collumsEl = windowEl.childNodes;
  const ElementArray = Array.from(collumsEl);
  const cadence = 700;


  const strobo = (elements) => {

    const activeClass = (x) => x.classList.contains('active');
    const activeElements = ElementArray.filter(activeClass);
    const ColN = randomNumber(activeElements.length);
    const childs = Array.from(activeElements[ColN].childNodes);
    const activeChild = childs.filter(activeClass).forEach(function(element) {element.classList.toggle('active')});
    const ProjectN = randomNumber(childs.length);
    const ProjectEl = childs[ProjectN].classList.toggle('active');
  }

  //strobo(collumsEl);

  const intervalEventListener = function(cadence) {
    let animation = setInterval(function(){
      strobo(ElementArray);
    }, cadence);
  }

  const scrollEventListener = function(element) {
    element.addEventListener("mousewheel", function() {
      strobo(ElementArray);
    }, false);
  }

  hoverEvent(ElementArray, 'active');
  intervalEventListener(cadence);
  scrollEventListener(windowEl);
