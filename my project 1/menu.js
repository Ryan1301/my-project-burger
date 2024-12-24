// Get all elements with class "lol"
const menuLinks = document.querySelectorAll('.lol');

// Add event listener to each element
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Scroll to the element with class "food"
    document.querySelector('.food').scrollIntoView({ behavior: 'smooth' });
  });
});

// Get the element with id "lool"
const exploreMenuLink = document.getElementById('lool');

// Add event listener to the element
exploreMenuLink.addEventListener('click', () => {
  // Scroll to the element with class "food"
  document.querySelector('.food').scrollIntoView({ block:"center",   behavior: 'smooth' });
});