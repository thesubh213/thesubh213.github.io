// Welcome screen fade out, then loading bar, then redirect
window.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById('box');
  var loadingBarContainer = document.getElementById('loading-bar-container');
  var loadingBar = document.getElementById('loading-bar');
  var redirectBtn = document.getElementById('redirect-btn');
  var redirectMessage = document.getElementById('redirect-message');

  // Show welcome for 2s, then fade out
  setTimeout(function() {
    box.style.transition = 'opacity 1s';
    box.style.opacity = 0;
    setTimeout(function() {
      box.style.display = 'none';
      // Show loading bar and button
      loadingBarContainer.style.display = 'flex';
      loadingBar.style.width = '0'; // reset in case of reload
      // Force reflow to ensure transition triggers
      void loadingBar.offsetWidth;
      setTimeout(function() {
        loadingBar.style.width = '100%';
      }, 10);
      // After 1s, hide loading bar, show redirect message, and redirect
      setTimeout(function() {
        loadingBarContainer.style.display = 'none';
        redirectMessage.style.display = 'flex';
        window.location.href = "https://subh.site";
      }, 1050);
    }, 1000); // fade out duration
  }, 2000); // welcome duration
});
