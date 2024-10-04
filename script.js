function toggleText() {
  accordionToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      console.log('Button clicked!');  // Check if the click is registered
      var content = this.nextElementSibling;  // The content right after the button
      content.classList.toggle('show');  // Toggle 'show' class
      console.log(content);  // Check if the correct content is selected
    });
  });
}
