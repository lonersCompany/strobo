const init = () => {
  var number = 0; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(number); // use variable declared in the parent function
  }
  displayName();
}
init();
