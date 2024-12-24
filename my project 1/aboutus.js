// Select all About anchor tags
const aboutAnchorTags = document.querySelectorAll('a[href="#about"]');

// Add event listener to each anchor tag
aboutAnchorTags.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const aboutUsSection = document.getElementById('aboutus');
    aboutUsSection.scrollIntoView({ block:"center", behavior: 'smooth' });
  });
});