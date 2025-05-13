// Function to change theme (light/dark mode)
function changeTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");  // Toggle the dark-mode class

    // Toggle the button state (slider)
    var slider = document.querySelector('.slider');
    slider.classList.toggle('active'); // Toggle the active class on the slider
}

// Function to toggle the slider button state when clicked
function toggleSlider() {
    var checkbox = document.getElementById("checkbox");
    checkbox.checked = !checkbox.checked;  // Toggle the checkbox state
    changeTheme();  // Change the theme based on the checkbox state
}

// Event listener for the slider click to toggle the theme
document.querySelector('.slider').addEventListener('click', toggleSlider);
