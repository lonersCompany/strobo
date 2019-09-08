"use strict";

var config = {
  breakPoints: {
    mobile: 640
  }
};

// mobile return if true if
var isMobile = function isMobile() {
  return document.body.clientWidth < config.breakPoints.mobile;
};

// ADDCLASS
var addClass = function addClass(element, addClassName) {
  if (element.classList) {
    element.classList.add(addClassName);
  } else {
    element.className += ' ' + addClassName;
  }
};

// REMOVECLASS
var removeClass = function removeClass(element, activeClass) {
  if (element.classList) {
    element.classList.remove(activeClass);
  } else {
    element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

// Is HOMEPAGE
var isHomepage = function isHomepage() {
  return document.body.classList.contains('homepage');
};

// TOGGLECLASS
var toggleClass = function toggleClass(element, className) {
  if (element.classList) {
    element.classList.toggle(className);
  } else {
    var classes = element.className.split(' ');
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);

    element.className = classes.join(' ');
  }
};

// RANDOM NUMBER
var randomNumber = function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber + 0);
};

// PRINT
var print = function print(x) {
  return console.log(x);
};

// Create Toggle button
var toggleButton = function toggleButton(agetElement, activElement, eventType, activeClass) {

  if (!activElement) {
    var _activElement = this;
  }

  agetElement.addEventListener(eventType, function () {
    toggleClass(activElement, activeClass);
  }, false);
};

// Hover
var hoverButton = function hoverButton(agetElement, activElement, activeClass) {

  if (!activElement) {
    var _activElement2 = this;
  }

  agetElement.addEventListener('mouseenter', function () {
    addClass(activElement, activeClass);
  }, false);
  agetElement.addEventListener('mouseleave', function () {
    removeClass(activElement, activeClass);
  }, false);
};

var hoverEvent = function hoverEvent(elements, activeClass) {
  elements.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      removeClass(this, activeClass);
    }, false);
    element.addEventListener('mouseleave', function () {
      addClass(this, activeClass);
    }, false);
  });
};

// order choose element
var orderChoose = function orderChoose(array) {

  var newIndex = 0;
  var maximum = array.length - 1;

  return function () {

    var oldIndex = newIndex;

    if (oldIndex == maximum) {
      newIndex = 0;
    } else {
      newIndex++;
    }

    return {
      oldIndex: oldIndex,
      newIndex: newIndex
    };
  };
};

// random choose element
var randomChoose = function randomChoose() {
  var newNumber = 0;

  return function (array) {
    var maximum = array.length;
    // switch off old element
    var oldNumber = newNumber;
    array[oldNumber].classList.remove('active');

    // make new and switch on new element
    newNumber = randomNumber(maximum);
    array[newNumber].classList.add('active');

    return newNumber;
  };
};