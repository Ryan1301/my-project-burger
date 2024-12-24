document.querySelectorAll('.l12').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      document.getElementById('l123').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });