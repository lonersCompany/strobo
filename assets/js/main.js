window.addEventListener("DOMContentLoaded", function() {
  "use strict";
  // PRINT
  let print = (x) => console.log(x);

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
  let radnomNumber = function(maxNumber) {
    return Math.floor((Math.random() * maxNumber) + 0);
  }

  // MENU BUTTON
  let menuButton = function() {
    const menuEl = document.getElementById('info');
    menuEl.addEventListener('click', function() {
      toggleClass(this, 'active');
    }, false)
  };

  // HOME PAGE GALLERY
  let scrollGallery = function() {
    const bodyEl = document.body;
    const windowEL = document.getElementsByClassName('window');
    let stroboCadence = 500;//ms
    let storoboInterval = 10000;//ms
    let storoboDelay = 10000;//ms
    //let allImageEl = bodyEl.getElementsByClassName('project-image');

    let activeClass = 'active';
    let layoutBreakpoint = 640;
    let all = 0;
    let i = 0;

    let num = 0;
    let ScrollSpeedTransfer = function(transfer) {
      num++;
      if(num % transfer == 0) {
        return true
      }
      return false
    }

    let changeNumber = function(number){
      if (number > 1) {
        number = number - 1;
      } else {
        number = number + 1;
      }
      return number;
    }

    let runGallery = function(windowEL) {
      //let speedTrasnsfer = ScrollSpeedTransfer(2);
      //if(speedTrasnsfer == false) return;
      // GET RANDOM COLUM

      let randomColNum1 = radnomNumber(windowEL.length);
      let randomColNum2 = radnomNumber(windowEL.length);
      if (randomColNum1 === randomColNum2){
        randomColNum2 = changeNumber(randomColNum2)
      }

      let ImgEl1 = windowEL[randomColNum1].getElementsByClassName('project');
      let ImgEl2 = windowEL[randomColNum2].getElementsByClassName('project');
      //GET RANDOM IMAGE IN COLUM
      let randomImgNum1 = radnomNumber(ImgEl1.length);
      let randomImgNum2 = radnomNumber(ImgEl2.length);
      //remove active class in COLUM
      for (let i = 0; i < ImgEl1.length; i++) {
        removeClass(ImgEl1[i], activeClass);
      }

      for (let i = 0; i < ImgEl2.length; i++) {
        removeClass(ImgEl2[i], activeClass);
      }
      ///ADD ACTIVE CLASS TO RUNDOM IMAGE IN COLUM
      addClass(ImgEl1[randomImgNum1], activeClass);
      addClass(ImgEl2[randomImgNum2], activeClass);
    };

    let makeStroboEffect = function(cadence, interval, fn) {
      let animation = setInterval(function(){
        runGallery(windowEL);
      }, cadence);

      let stopAnimation = setTimeout(function() {
        clearInterval(animation);
      }, interval);
    }

    // ADD EVENT LISTENER TO RUN GALLERY //

    if (bodyEl.addEventListener) {
     // IE9, Chrome, Safari, Opera
      bodyEl.addEventListener("mousewheel", function() {
        runGallery(windowEL);
      }, false);
       // Firefox
      bodyEl.addEventListener("DOMMouseScroll", function() {
        runGallery(windowEL);
      }, false);
    }
    // IE 6/7/8
    else bodyEl.attachEvent("onmousewheel", function() {
      runGallery(windowEL);
    });
    //run strobo on page load
    // and in intervals storoboDelay
    makeStroboEffect(stroboCadence, storoboInterval);
    // setInterval(function(){
    //   makeStroboEffect(stroboCadence, storoboInterval);
    // }, storoboDelay);
  };

  let runSwiper = function (element) {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    })
  };

  // APPLICATIONS
  let setUp = function () {
    menuButton();
    const swiperEL = document.getElementsByClassName('swiper-container');
    if(swiperEL.length !== 0) {
      runSwiper(swiperEL);
    }

    const windowEL = document.getElementsByClassName('window');
    if(windowEL.length !== 0) {
      scrollGallery();
    }
  };
  setUp();
}, false);
