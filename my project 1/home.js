// Select both Home anchor tags
const homeAnchorTags = document.querySelectorAll('a[href="#home"]');

// Add event listener to each anchor tag
homeAnchorTags.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
});