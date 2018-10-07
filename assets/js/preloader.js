---
---
// PRELOADER
console.log('hi')
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.body.classList.add('load');
  }, 1000);
});
