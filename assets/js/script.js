/* ================================
   🎬 Scroll Animation (Fade In Up)
   ================================ */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeInUp");
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((sec) => {
  sec.classList.add(
    "opacity-0",
    "translate-y-10",
    "transition-all",
    "duration-700"
  );
  observer.observe(sec);
});
