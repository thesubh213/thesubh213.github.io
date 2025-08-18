window.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById('box');
  var loadingBarContainer = document.getElementById('loading-bar-container');
  var loadingBar = document.getElementById('loading-bar');
  var redirectBtn = document.getElementById('redirect-btn');
  var redirectMessage = document.getElementById('redirect-message');

  setTimeout(function() {
    box.style.transition = 'opacity 1s';
    box.style.opacity = 0;
    setTimeout(function() {
      box.style.display = 'none';
      loadingBarContainer.style.display = 'flex';
      loadingBar.style.width = '0'; 
      void loadingBar.offsetWidth;
      setTimeout(function() {
        loadingBar.style.width = '100%';
      }, 10);
      setTimeout(function() {
        loadingBarContainer.style.display = 'none';
        redirectMessage.style.display = 'flex';
        window.location.href = "https://subh.engineer";
      }, 1050);
    }, 1000); 
  }, 2000);
});
