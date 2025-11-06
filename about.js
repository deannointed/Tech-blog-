// about.js
document.addEventListener("DOMContentLoaded", () => {
  // ===== Typing effect for the About Page Title =====
  const title = document.querySelector(".intro h2");
  const titleText = title.textContent;
  title.textContent = "";
  let index = 0;

  function typeEffect() {
    if (index < titleText.length) {
      title.textContent += titleText.charAt(index);
      index++;
      setTimeout(typeEffect, 80); // speed of typing
    }
  }
  typeEffect();

  // ===== Reveal sections on scroll =====
  const sections = document.querySelectorAll(".about-page section");

  const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < triggerPoint) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  // ===== Glow effect for button hover =====
  const btn = document.querySelector(".btn");
  if (btn) {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.background = `radial-gradient(circle at ${x}px ${y}px, #00e6ff, #007bff)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.background = "linear-gradient(90deg, #00f5ff, #007bff)";
    });
  }
});
