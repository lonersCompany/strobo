"use strict";

const config = {
  breakPoints: {
    mobile: 640,
  },
}

// ADDCLASS
let addClass = function(element, addClassName){
  if (element.classList) {
    element.classList.add(addClassName);
  }
  else {
    element.className += ' ' + addClassName;
  }
};

// REMOVECLASS
let removeClass = function(element, activeClass) {
  if (element.classList) {
    element.classList.remove(activeClass);
  }
  else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

// TOGGLECLASS
let toggleClass = function(element, className) {
    if (element.classList) {
    element.classList.toggle(className);
    } else {
    let classes = element.className.split(' ');
    let existingIndex = classes.indexOf(className);

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push(className);

    element.className = classes.join(' ');
  }
};

// RANDOM NUMBER
const randomNumber = (maxNumber) => Math.floor((Math.random() * maxNumber) + 0);

// PRINT
const print = (x) => console.log(x);

// Create Toggle button
let toggleButton = function(element, eventType, activeClass) {
  element.addEventListener(eventType, function() {
    toggleClass(this, activeClass);
  }, false)
};

const hoverEvent = function(elements, activeClass) {
  elements.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
      removeClass(this, activeClass);
    }, false);
    element.addEventListener('mouseleave', function() {
      addClass(this, activeClass);
    }, false)
  });
};
