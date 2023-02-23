const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksCont = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

navToggle.addEventListener('click', () => {
  const containerHeight = linksCont.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksCont.style.height = `${linksHeight}px`;
  } else {
    linksCont.style.height = 0;
  }
});

window.addEventListener('scroll', () => {
  const scroll = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scroll > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

date.innerHTML = new Date().getFullYear();
