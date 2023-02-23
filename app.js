const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksCont = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
const scrollLinks = document.querySelectorAll('.scroll-link');

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
  const scrollH = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollH > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollH > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    // console.log(id);
    const linkTarget = document.getElementById(id);
    // calculating proper height
    const navH = navbar.getBoundingClientRect().height;
    const contH = linksCont.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');

    let position = linkTarget.offsetTop - navH;

    if (!fixedNav) {
      position = position - navH;
    }
    if (navH > 82) {
      position = position + contH;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksCont.style.height = 0;
  });
});

date.innerHTML = new Date().getFullYear();
