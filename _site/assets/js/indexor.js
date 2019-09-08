const indexor = wrapperEl => {
  // Settings
  const atributes = wrapperEl.getAttribute("data-images");
  const subArray = atributes.split("||").filter(word => word);
  const imgEl = wrapperEl.querySelector("img");

  const cadence = 700;
  let runner = 0;

  // Closure
  const orderArray = orderChoose(subArray);

  const changeMaker = () => {
    const now = orderArray();
    imgEl.src = subArray[now.newIndex];
  };

  // Listeners
  wrapperEl.addEventListener("mouseenter", () => {
    return (runner = setInterval(changeMaker, cadence));
  });

  wrapperEl.addEventListener("mouseleave", () => {
    return clearInterval(runner);
  });
};

const mainEl = document.getElementsByClassName("img--container"); // TODO: not get all
const mainArray = Array.from(mainEl);
const createIndexor = mainArray.forEach(el => indexor(el));
