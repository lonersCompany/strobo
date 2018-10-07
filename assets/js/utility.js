---
---

"use strict";

const config = {
  breakPoints: {
    mobile: 640,
  },
}

// mobile return if true if
const isMobile = () => document.body.clientWidth < config.breakPoints.mobile

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
const toggleButton = function(agetElement, activElement, eventType, activeClass) {

  if (!activElement) {
    let activElement = this;
  }

  agetElement.addEventListener(eventType, function() {
    toggleClass(activElement, activeClass);
  }, false)
};

// Hover
const hoverButton = function(agetElement, activElement, activeClass) {

  if (!activElement) {
    let activElement = this;
  }

  agetElement.addEventListener('mouseenter', function() {
    addClass(activElement, activeClass);
  }, false)
  agetElement.addEventListener('mouseleave', function() {
    removeClass(activElement, activeClass);
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
