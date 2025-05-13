// script.js
// onclick event to change theme to/from dark/light   
function changeTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  
    // toggle the button state
        var slider = document.querySelector('.slider');
        slider.classList.toggle('active');
      }
      // lick event to toggle the button state
      document.querySelector('.slider').addEventListener('click', toggleSlider);