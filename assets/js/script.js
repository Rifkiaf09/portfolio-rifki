/* ================================
   🌙☀️ Dark Mode Toggle
   ================================ */
const toggleBtn = document.getElementById("themeToggle");
const body = document.getElementById("body");
let dark = false;

toggleBtn.addEventListener("click", () => {
  dark = !dark;
  if (dark) {
    body.classList.add("dark", "bg-gray-900", "text-gray-100");
    toggleBtn.textContent = "☀️"; // ganti icon
  } else {
    body.classList.remove("dark", "bg-gray-900", "text-gray-100");
    toggleBtn.textContent = "🌙";
  }
});

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
