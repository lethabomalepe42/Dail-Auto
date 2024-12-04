// Slide show functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Show the current slide
function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.opacity = index === currentSlide ? '1' : '0';
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

// Start the slider
setInterval(showSlide, 2000);
showSlide();

// WhatsApp button click event logging
const whatsappButton = document.querySelector('#whatsapp-button a');
if (whatsappButton) {
  whatsappButton.addEventListener('click', () => {
    console.log('WhatsApp button clicked!');
  });
}

// Q&A section toggle functionality
document.querySelectorAll('.qa-item h3').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// Toggle active class for Q&A items (for CSS animations)
const qaItems = document.querySelectorAll('.qa-item');
qaItems.forEach(item => {
  const question = item.querySelector('.qa-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active'); // Toggle active class on click
  });
});

// Get the map button and add click event listener
const mapButton = document.querySelector('#openMapButton');
if (mapButton) {
  mapButton.addEventListener('click', function() {
    console.log('Visit Us button clicked!');
  });
}
