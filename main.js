const proofButton = document.getElementById("proofButton");
const revealSections = document.querySelectorAll(".reveal");

proofButton.addEventListener("click", () => {
  const firstSection = document.querySelector(".saffron");
  firstSection.scrollIntoView({ behavior: "smooth" });
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.2
  }
);

revealSections.forEach(section => {
  observer.observe(section);
});

document.addEventListener("mousemove", event => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  document.documentElement.style.setProperty("--mouse-x", x);
  document.documentElement.style.setProperty("--mouse-y", y);

  const ornaments = document.querySelectorAll(".ornament");

  ornaments.forEach((ornament, index) => {
    const strength = index === 0 ? 18 : -18;
    ornament.style.transform = `
      translate(${x * strength}px, ${y * strength}px)
      rotate(${x * 12}deg)
    `;
  });
});