document.querySelectorAll('.gal').forEach(element => {
    element.addEventListener('click', function() {
      document.getElementById('gal1').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });