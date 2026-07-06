// Projekt-Detailseite: Projekt anhand der ID aus der URL anzeigen
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("project-root");
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  function renderNotFound(lang) {
    const dict = translations[lang];
    root.innerHTML = `
      <div style="min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:24px;">
        <h1 style="font-size:2rem;">${dict.detail.notFoundTitle}</h1>
        <a href="index.html" style="color:var(--primary);">${dict.detail.notFoundBack}</a>
      </div>`;
    document.title = dict.detail.notFoundTitle;
  }

  function renderProject(lang) {
    const dict = translations[lang];
    const project = getLocalizedProject(id, lang);

    if (!project) {
      renderNotFound(lang);
      return;
    }

    document.title = project.title + " — Julia Zacharzowski";

    // Schritte mit Pfeilen
    const stepsHtml = project.steps
      .map((step, index) => {
        const reverse = index % 2 === 1 ? " step--reverse" : "";
        const isLast = index === project.steps.length - 1;
        const arrow = isLast ? "" : `<div class="step-arrow">&#8595;</div>`;
        const stepLabel = dict.detail.stepLabelTemplate.replace("{n}", step.number);
        const imageBlock = step.image
          ? `<div class="step__img${step.imageFit ? ` step__img--${step.imageFit}` : ""}">
                <img class="zoomable" src="${step.image}" alt="${step.title} – ${project.title}" loading="lazy" width="1200" height="900" />
              </div>`
          : "";
        return `
          <div class="reveal">
            <article class="step${reverse}${step.image ? "" : " step--text-only"}">
              <div class="step__text">
                <div class="step__badge-row">
                  <span class="step__num">${step.number}</span>
                  <span class="step__label">${stepLabel}</span>
                </div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
              </div>
              ${imageBlock}
            </article>
            ${arrow}
          </div>`;
      })
      .join("");

    // Ergebnisvideo bzw. Ergebnisbild direkt nach dem letzten Schritt (Step 5: Usability Testing)
    // Eigene Play- und Vollbild-Buttons statt nativer Steuerleiste, damit
    // kein Lautstärke-/Unmute-Regler existiert – das Video bleibt immer stumm.
    // Bilder (z. B. bei Save Space) sind über die Lightbox per Lupe vergrößerbar.
    const videoMediaHtml = project.resultImage
      ? `<div class="result-video__image">
           <img class="zoomable" src="${project.resultImage}" alt="${project.title} – ${dict.detail.videoEyebrow}" loading="lazy" />
         </div>`
      : project.video
      ? `<div class="result-video__player">
           <video class="result-video__el" muted playsinline preload="metadata" poster="${project.image}">
             <source src="${project.video}" type="video/mp4" />
             ${dict.detail.videoFallback}
           </video>
           <button type="button" class="video-control video-control--play" aria-label="Video abspielen/pausieren">&#9658;</button>
           <button type="button" class="video-control video-control--fullscreen" aria-label="Video vergrößern">&#10530;</button>
         </div>`
      : `<div class="result-video__placeholder">
           <span>${dict.detail.videoPlaceholder}</span>
         </div>`;

    // Ergebnis-Block nur anzeigen, wenn es tatsächlich ein Video oder Ergebnisbild gibt
    // videoFormat steuert die Darstellungsgröße/-form (z.B. Handy-Hochformat vs. kompaktes Querformat)
    const mediaFormatClass = project.videoFormat
      ? ` result-video__media--${project.videoFormat}`
      : "";

    const videoHtml = (project.video || project.resultImage)
      ? `
      <div class="result-video reveal">
        <p class="eyebrow">${dict.detail.videoEyebrow}</p>
        <h3>${dict.detail.videoTitle}</h3>
        <p class="result-video__desc">${dict.detail.videoDescription}</p>
        <div class="result-video__media${mediaFormatClass}">
          ${videoMediaHtml}
        </div>
      </div>`
      : "";

    // Weitere Projekte
    const moreHtml = getLocalizedProjects(lang)
      .filter((p) => p.id !== project.id)
      .map((p) => `<a href="project.html?id=${encodeURIComponent(p.id)}">${p.title}</a>`)
      .join("");

    root.innerHTML = `
      <section class="detail-header">
        <div class="container" style="padding-bottom:48px;">
          <a href="index.html" class="back-link">&#8592; ${dict.detail.back}</a>
          <div class="detail-meta">
            <span>${project.category}</span>
            <span class="dot"></span>
            <span>${project.year}</span>
          </div>
          <h1 class="detail-title">${project.title}</h1>
          <p class="lead" style="max-width:60ch;">${project.description}</p>
          <div class="detail-hero-img">
            <img src="${project.image}" alt="${project.title}" width="1200" height="900" />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          ${project.resultPosition === "top" ? videoHtml : ""}

          <p class="eyebrow">${dict.detail.process}</p>
          <h2 class="section__title">${dict.detail.stepByStep}</h2>
          <div class="steps">${stepsHtml}</div>

          ${project.resultPosition === "top" ? "" : videoHtml}

          <div class="more-projects">
            <p class="eyebrow">${dict.detail.moreProjects}</p>
            <div class="links">${moreHtml}</div>
          </div>
        </div>
      </section>`;

    initReveal();
    setupVideoPlayers();
  }

  // Eigene Steuerung für die Ergebnisvideos: Play/Pause-Button, Vollbild-Button
  // und ein Zwangs-Mute, das auch bei einem eventuellen Browser-Unmute sofort
  // wieder greift – der Ton bleibt so komplett deaktiviert.
  function setupVideoPlayers() {
    document.querySelectorAll(".result-video__player").forEach((wrapper) => {
      const video = wrapper.querySelector("video");
      const playBtn = wrapper.querySelector(".video-control--play");
      const fsBtn = wrapper.querySelector(".video-control--fullscreen");
      if (!video) return;

      // Ton dauerhaft deaktiviert halten
      video.muted = true;
      video.volume = 0;
      video.addEventListener("volumechange", () => {
        if (!video.muted || video.volume > 0) {
          video.muted = true;
          video.volume = 0;
        }
      });

      function togglePlay() {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      }

      playBtn?.addEventListener("click", togglePlay);
      video.addEventListener("click", togglePlay);

      video.addEventListener("play", () => {
        wrapper.classList.add("is-playing");
        if (playBtn) playBtn.innerHTML = "&#10074;&#10074;";
      });
      video.addEventListener("pause", () => {
        wrapper.classList.remove("is-playing");
        if (playBtn) playBtn.innerHTML = "&#9658;";
      });
      video.addEventListener("ended", () => {
        wrapper.classList.remove("is-playing");
        if (playBtn) playBtn.innerHTML = "&#9658;";
      });

      fsBtn?.addEventListener("click", (e) => {
        e.stopPropagation();
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          // iOS Safari
          video.webkitEnterFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
      });
    });
  }

  // Lightbox einmalig initialisieren (funktioniert dank Event-Delegation
  // auch für Bilder, die bei einem Sprachwechsel neu gerendert werden)
  setupLightbox();

  // Initiales Rendering in der gespeicherten/erkannten Sprache
  applyStaticI18n(getLang());
  renderProject(getLang());

  // Toggle verbinden: bei Klick alles neu rendern
  setupLangToggle((lang) => {
    applyStaticI18n(lang);
    renderProject(lang);
  });
});

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