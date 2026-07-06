// Startseite: Projekte rendern, Jahr setzen, Sprache anwenden, Reveal-Animation
document.addEventListener("DOMContentLoaded", () => {
  // Jahr im Footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = "© " + new Date().getFullYear();

  const grid = document.getElementById("projects-grid");

  function renderProjects(lang) {
    if (!grid) return;
    const dict = translations[lang];
    const localizedProjects = getLocalizedProjects(lang);

    grid.innerHTML = "";
    localizedProjects.forEach((p) => {
      const card = document.createElement("a");
      card.className = "project-card reveal";
      card.href = "project.html?id=" + encodeURIComponent(p.id);
      card.innerHTML = `
        <div class="project-card__img">
          <img src="${p.image}" alt="${p.title}" loading="lazy" width="1200" height="900" />
        </div>
        <div class="project-card__body">
          <div class="project-card__meta">
            <span>${p.category}</span>
            <span>${p.year}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.summary}</p>
          <span class="project-card__cta">${dict.projects.cta}</span>
        </div>`;
      grid.appendChild(card);
    });

    initReveal();
  }

  function renderAll(lang) {
    applyStaticI18n(lang);
    renderProjects(lang);
  }

  // Initiales Rendering in der gespeicherten/erkannten Sprache
  renderAll(getLang());

  // Toggle verbinden: bei Klick alles neu rendern
  setupLangToggle(renderAll);
});

// Reveal beim Scrollen
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => observer.observe(item));
}