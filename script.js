const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const modal = document.querySelector("#product-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalPrice = document.querySelector("#modal-price");
const modalCopy = document.querySelector("#modal-copy");
const modalTriggers = document.querySelectorAll(".open-modal");
const closeTriggers = document.querySelectorAll("[data-close-modal]");

if (menuToggle && siteNav) {
  const closeMenu = () => {
    menuToggle.classList.remove("is-open");
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.classList.toggle("is-open");
    siteNav.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) {
      closeMenu();
    }
  });
}

if (modal && modalImage && modalTitle && modalPrice && modalCopy) {
  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
  };

  modalTriggers.forEach((button) => {
    button.addEventListener("click", () => {
      modalTitle.textContent = button.dataset.title || "Saree Preview";
      modalPrice.textContent = button.dataset.price || "";
      modalCopy.textContent = button.dataset.copy || "";
      modalImage.style.backgroundImage = `linear-gradient(180deg, rgba(31, 11, 18, 0.08), rgba(31, 11, 18, 0.24)), url("${button.dataset.image}")`;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    });
  });

  closeTriggers.forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}
