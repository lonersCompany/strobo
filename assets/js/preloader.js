---
---
// PRELOADER
console.log('hi')
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.documentElement.classList.add('load');
  }, 1000);
});
