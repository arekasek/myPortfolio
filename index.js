document.addEventListener("DOMContentLoaded", function () {
  let currentSectionIndex = 0;

  const scrollableElements = document.querySelectorAll("section");

  scrollableElements.forEach(function (element) {
    element.addEventListener("wheel", function (e) {
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;

      const sections = document.querySelectorAll("section");

      if (
        (direction === 1 && currentSectionIndex < sections.length - 1) ||
        (direction === -1 && currentSectionIndex > 0)
      ) {
        currentSectionIndex += direction;
      }

      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
    });
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate__lightSpeedInRight");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  const Sections = document.querySelectorAll(".about-me");

  Sections.forEach((section) => {
    observer.observe(section);
  });
});
