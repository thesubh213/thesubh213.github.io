document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var box = document.getElementById('box');
    box.classList.add('fade-out');
    setTimeout(function() {
      box.style.display = 'none';
      var gearSection = document.getElementById('gear-section');
      gearSection.style.display = 'flex';
      setTimeout(function() {
        gearSection.classList.add('visible');
      }, 10);
    }, 1000); 
  }, 2000); 
});
