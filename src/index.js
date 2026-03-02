import './styles.css';

const items = document.querySelectorAll('.project-card');

export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  {
    threshold: 0.2,
  },
);

items.forEach((item) => observer.observe(item));

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setDelay();
      }
    });
  },
  {
    threshold: 0.15,
  },
);

const contact = document.querySelector('.contact');

contactObserver.observe(contact);

function setDelay() {
  const contactElements = document.querySelectorAll('.contact > *');

  let delay = 0.15;

  contactElements.forEach((element) => {
    delay += 0.1;
    element.setAttribute(
      'style',
      `animation: enter-left 1s ease ${delay}s both`,
    );
  });
}
