/**
 * Scroll smooth to anchor targets and compensate for a fixed header if present.
 * Applies to nav links (href="#...") and clicks on .menu-hover that contain such links.
 */
function scrollToId(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const header = document.querySelector("header");
  const headerPos = header ? getComputedStyle(header).position : "static";
  const offset = header && headerPos !== "static" ? header.offsetHeight : 0;
  const top =
    target.getBoundingClientRect().top + window.pageYOffset - offset - 8;
  window.scrollTo({ top, behavior: "smooth" });
}

/* Nav anchors (recommended) */
document.querySelectorAll('nav a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const id = a.getAttribute("href").slice(1);
    scrollToId(id);
  });
});

/* Allow clicking the whole .menu-hover to trigger the same scroll */
document.querySelectorAll(".menu-hover").forEach((el) => {
  el.addEventListener("click", (e) => {
    const a = el.querySelector('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    scrollToId(id);
  });
});
