import './styles/reset.css';
import './styles/header.css';
import './styles/main.css';
import './styles/footer.css';
import './styles.css';

// On Scroll Animations

const mainObserver = new IntersectionObserver(
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

const items = document.querySelectorAll('.project-card');
items.forEach((item) => mainObserver.observe(item));

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setDelay(document.querySelectorAll('.contact > *'));
      }
    });
  },
  {
    threshold: 0.15,
  },
);

const contact = document.querySelector('.contact');
contactObserver.observe(contact);

function setDelay(elements) {
  let delay = 0.15;

  elements.forEach((element) => {
    delay += 0.1;
    element.setAttribute(
      'style',
      `animation: enter-left 1s ease ${delay}s both`,
    );
  });
}
