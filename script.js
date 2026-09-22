const header = document.querySelector('.header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.navmenu a');
const sections = document.querySelectorAll('main section[id]');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('header-show');
  });
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (header) {
      header.classList.remove('header-show');
    }
  });
});

const activateLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateLink(entry.target.id);
      }
    });
  },
  {
    threshold: 0.45,
  }
);

sections.forEach((section) => observer.observe(section));

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = contactForm.querySelector('button');
    if (button) {
      button.textContent = 'Message Sent';
      button.disabled = true;
    }
  });
}
