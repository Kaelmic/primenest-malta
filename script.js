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

const filters = {
  status: document.getElementById("filterStatus"),
  location: document.getElementById("filterLocation"),
  type: document.getElementById("filterType"),
  bedrooms: document.getElementById("filterBedrooms"),
};

const propertyCards = document.querySelectorAll(".property-card");
const resetBtn = document.getElementById("resetFilters");

function filterProperties() {
  propertyCards.forEach(card => {
    const statusMatch =
      filters.status.value === "all" ||
      card.dataset.status === filters.status.value;

    const locationMatch =
      filters.location.value === "all" ||
      card.dataset.location === filters.location.value;

    const typeMatch =
      filters.type.value === "all" ||
      card.dataset.type === filters.type.value;

    const bedroomsMatch =
      filters.bedrooms.value === "all" ||
      Number(card.dataset.bedrooms) >= Number(filters.bedrooms.value);

    if (statusMatch && locationMatch && typeMatch && bedroomsMatch) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

Object.values(filters).forEach(filter => {
  filter.addEventListener("change", filterProperties);
});

resetBtn.addEventListener("click", () => {
  Object.values(filters).forEach(filter => {
    filter.value = "all";
  });

  filterProperties();
});