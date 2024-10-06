document.querySelectorAll('.accordion-toggle').forEach(function (toggle) {
  toggle.addEventListener('click', function () {
    const content = this.closest('.accordion-item').querySelector('.accordion-content');
    const clicks = this.closest('.accordion-item').querySelector('.accordion-toggle');
    content.classList.toggle('show'); // Toggle visibility
    clicks.classList.toggle('clicked');
  });
});