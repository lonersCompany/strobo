
const numberWrappers = document.getElementsByClassName('render-number');
const wrappersArray = Array.from(numberWrappers);

const startPoint = 0;

const numberArray = (array, startPoint ) => {
  return wrappersArray.map(x => x.innerHTML = startPoint++);
}

numberArray(wrappersArray, 0);
