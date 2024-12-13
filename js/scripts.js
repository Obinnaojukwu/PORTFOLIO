
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
      if (link.href === window.location.href) {
        link.style.textDecoration = 'underline';
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const loadImg = (img) => {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.removeAttribute('data-src');
    };
  
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadImg(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
  
    images.forEach(img => {
      imgObserver.observe(img);
    });
  });
  