// Get all elements with class "link123"
const contactLinks = document.querySelectorAll('.link123');

// Add event listener to each element
contactLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Scroll to the element with class "contact-form" and center it
    document.querySelector('.contact-form').scrollIntoView({ block: 'center', behavior: 'smooth' });
  });
});