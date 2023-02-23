const date = document.getElementById('date');
const navToggle = document.querySelector('.nav-toggle');
const linksCont = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  const containerHeight = linksCont.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksCont.style.height = `${linksHeight}px`;
  } else {
    linksCont.style.height = 0;
  }
});

date.innerHTML = new Date().getFullYear();
