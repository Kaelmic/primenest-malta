const heroParallax = document.querySelector(".hero-parallax");

if (heroParallax) {
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    heroParallax.style.transform =
      `translateY(${scrollY * 0.25}px) scale(1.08)`;
  });
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }
  });
}

revealOnScroll();

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const parallaxItems = document.querySelectorAll(".property-image, .main-preview");

window.addEventListener("scroll", () => {
  parallaxItems.forEach((item) => {
    const rect = item.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = rect.top * -0.08;
      item.style.backgroundPosition = `center ${offset}px`;
    }
  });
});
