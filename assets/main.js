// Small interactions: mobile nav, scrollspy, year
const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav-toggle");
const navLinks = Array.from(document.querySelectorAll(".nav a[href^='#']"));
const sections = navLinks
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

document.getElementById("year").textContent = new Date().getFullYear();

if (toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close menu after click (mobile)
  navLinks.forEach(a => {
    a.addEventListener("click", () => {
      if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// Scrollspy (滚动高亮 scrollspy)
const setActive = () => {
  const y = window.scrollY + 120;
  let activeId = null;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const bottom = top + sec.offsetHeight;
    if (y >= top && y < bottom) {
      activeId = `#${sec.id}`;
      break;
    }
  }

  navLinks.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === activeId);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
setActive();
