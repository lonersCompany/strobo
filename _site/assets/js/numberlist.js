
const numberWrappers = document.getElementsByClassName('render-number');
const wrappersArray = Array.from(numberWrappers);

const startPoint = 0;

const numberArray = (array, startPoint ) => {
  return array.map(slot => {
    const newNumber = startPoint++;
    let prepend = (newNumber < 10) ? `0` : ``;
    slot.innerHTML = `${prepend}${newNumber}`;
  });
}

numberArray(wrappersArray, 0);
