// Define accordionToggles by selecting all elements with class 'accordion-toggle'
var accordionToggles = document.querySelectorAll('.accordion-toggle');

function toggleText() {
  accordionToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      var content = this.nextElementSibling;
      
      // Toggle the 'show' class to reveal or hide content
      content.classList.toggle('show');
    });
  });
}

// Call the function to activate the toggling behavior
toggleText();
