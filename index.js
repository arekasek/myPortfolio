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
          entry.target.classList.add("animate__bounceInUp");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  const Sections = document.querySelectorAll(".animate-section");

  Sections.forEach((section) => {
    observer.observe(section);
  });
});

const projects = document.querySelectorAll(".project");

projects.forEach((project) => {
  const projectText = project.querySelector(".text-container span");
  const title = project.querySelector(".text-container > h2");

  project.addEventListener("mouseover", () => {
    title.style.visibility = "hidden";
    title.style.transition = "visibility 1ms ease-out";
    projectText.style.visibility = "visible";
  });

  project.addEventListener("mouseout", () => {
    projectText.style.visibility = "hidden";
    title.style.visibility = "visible";
  });
});
