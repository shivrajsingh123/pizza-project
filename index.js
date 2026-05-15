const revealTargets = document.querySelectorAll(
  ".about_us, .menu, .carousel_section, .gallery_section, .find_us, .dish_card, .img_grid > div, .address, footer"
);

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
});

const revealOnScroll = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealOnScroll.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -60px 0px",
  }
);

revealTargets.forEach((element) => revealOnScroll.observe(element));

window.addEventListener("load", () => {
  document.body.classList.add("page-ready");
});
