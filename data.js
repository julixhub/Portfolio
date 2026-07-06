// ============================================================
// Gemeinsame Projektdaten + Übersetzungen für Start- und Detailseite
// ============================================================

// ---- Statische UI-Texte (DE/EN) ----
const translations = {
  de: {
    hero: {
      eyebrow: "Portfolio",
      lead: "Ich gestalte digitale Produkte, die sich einfach anfühlen und gerne genutzt werden.",
      study: "Studentin an der HFU Furtwangen im Schwarzwald, 3. Semester",
      interests: "Besonders interessieren mich Interaction Design, Prototyping und nutzerzentrierte Gestaltung.",
      cta: "Los geht's"
    },
    about: {
      eyebrow: "Was ich mache",
      title: "Ich gestalte intuitive digitale Erlebnisse.",
      lead: "Von der ersten Problemanalyse über Personas und Konzeption bis hin zu High-Fidelity-Prototypen und Usability-Tests – ich begleite Produkte durch den gesamten Designprozess.",
      tags: ["UX Design", "UI Design", "Prototyping", "User Research", "Usability Testing"]
    },
    contact: {
      eyebrow: "Kontakt",
      address: "78244 Gottmadingen, Deutschland"
    },
    projects: {
      eyebrow: "Ausgewählte Arbeiten",
      title: "Meine Projekte",
      cta: "Projekt ansehen ↗"
    },
    footer: {
      rights: "Julia Zacharzowski — Alle Rechte vorbehalten."
    },
    scrollTop: "Scrollen",
    detail: {
      back: "Zur Startseite",
      process: "Der Prozess",
      stepByStep: "Schritt für Schritt",
      stepLabelTemplate: "{n}. Schritt",
      moreProjects: "Weitere Projekte",
      notFoundTitle: "Projekt nicht gefunden",
      notFoundBack: "Zurück zur Startseite",
      videoEyebrow: "Finaler Entwurf",
      videoTitle: "Das Ergebnis",
      videoDescription: "Ein kurzer Einblick in den finalen Prototyp.",
      videoFallback: "Dein Browser unterstützt das Video-Tag leider nicht.",
      videoPlaceholder: "Video wird in Kürze ergänzt"
    }
  },
  en: {
    hero: {
      eyebrow: "Portfolio",
      lead: "I design digital products that feel simple and genuinely enjoyable to use.",
      study: "Student at HFU Furtwangen in the Black Forest, 3rd semester",
      interests: "I'm especially interested in interaction design, prototyping, and user-centered design.",
      cta: "Let's go"
    },
    about: {
      eyebrow: "What I do",
      title: "I design intuitive digital experiences.",
      lead: "From the first problem analysis through personas and concepts to high-fidelity prototypes and usability testing – I guide products through the entire design process.",
      tags: ["UX Design", "UI Design", "Prototyping", "User Research", "Usability Testing"]
    },
    contact: {
      eyebrow: "Contact",
      address: "78244 Gottmadingen, Germany"
    },
    projects: {
      eyebrow: "Selected Work",
      title: "My Projects",
      cta: "View project ↗"
    },
    footer: {
      rights: "Julia Zacharzowski — All rights reserved."
    },
    scrollTop: "Scroll up",
    detail: {
      back: "Back to homepage",
      process: "The Process",
      stepByStep: "Step by Step",
      stepLabelTemplate: "Step {n}",
      moreProjects: "More Projects",
      notFoundTitle: "Project not found",
      notFoundBack: "Back to homepage",
      videoEyebrow: "Final Draft",
      videoTitle: "The Result",
      videoDescription: "A short look at the final prototype.",
      videoFallback: "Your browser does not support the video tag.",
      videoPlaceholder: "Video coming soon"
    }
  }
};

// ---- Projektdaten, sprachneutrale Felder + de/en Textblöcke ----
const projectsData = [
  {
    id: "fitness-app",
    year: "2025",
    image: "assets/joliessa.png",
    video: "assets/videos/app.mp4",
    videoFormat: "portrait",
    resultPosition: "top",
    de: {
      title: "Digitaler Kleiderschrank Joliessa",
      category: "UX / UI Design",
      summary: "Eine mobile App für das intuitive Organisieren, Stylen und Teilen der eigenen Garderobe.",
      description: "Von der ersten Problemanalyse bis zum getesteten Prototyp – ein umfassender UX-Prozess für eine intuitive App zum digitalen Organisieren und Stylen der eigenen Garderobe.",
      steps: [
        { number: 1, title: "Problem", description: "Viele Menschen stehen täglich vor demselben Problem: Obwohl der Schrank voll ist, fehlt die Inspiration für das passende Outfit.", image: "assets/problem.png" },
        { number: 2, title: "Persona", description: "Es entstand eine Persona, die unterschiedliche Bedürfnisse hatte.", image: "assets/app2.png" },
        { number: 3, title: "Konzeption", description: "Durchdachte Userflows und Wireframes schaffen eine klare Informationsarchitektur, die das tägliche Outfit-Styling einfach, schnell und stressfrei macht.", image: "assets/app3.png" },
        { number: 4, title: "High-Fidelity Prototyp", description: "Der finale Prototyp macht den digitalen Kleiderschrank greifbar: Ein durchgängiges Designsystem und interaktive Screens visualisieren die virtuelle Garderobe, die Avatar-Ansicht und den Social-Feed.", image: "assets/app4.png" },
        { number: 5, title: "Usability Testing", description: "Die Ergebnisse zeigen eine hohe Begeisterung für das Avatar-Matching, gaben uns aber gleichzeitig klare Hausaufgaben für das Feintuning der mobilen Filterkategorien und Menüstrukturen.", image: "assets/app5.png" }
      ]
    },
    en: {
      title: "Digital Wardrobe Joliessa",
      category: "UX / UI Design",
      summary: "A mobile app for intuitively organizing, styling, and sharing your personal wardrobe.",
      description: "From the initial problem analysis to the tested prototype – a comprehensive UX process for an intuitive app designed to digitally organize and style your wardrobe.",
      steps: [
        { number: 1, title: "Problem", description: "Many people face the same daily struggle: despite having a full closet, they lack inspiration for the right outfit.", image: "assets/problem.png" },
        { number: 2, title: "Persona", description: "A persona was developed to address the specific needs and challenges of the target user.", image: "assets/app2.png" },
        { number: 3, title: "Concept", description: "Well-thought-out user flows and wireframes create a clear information architecture, making daily outfit styling simple, fast, and stress-free.", image: "assets/app3.png" },
        { number: 4, title: "High-Fidelity Prototype", description: "The final prototype brings the digital closet to life: a consistent design system and interactive screens visualize the virtual wardrobe, the avatar view, and the social feed.", image: "assets/app4.png" },
        { number: 5, title: "Usability Testing", description: "The results showed great enthusiasm for the avatar matching feature, while providing clear action items for fine-tuning the mobile filter categories and menu structures.", image: "assets/app5.png" }
      ]
    }
  },
  {
    id: "banking-redesign",
    year: "2024",
    image: "assets/auto1.png",
    video: "assets/videos/auto.mp4",
    videoFormat: "landscape-small",
    resultPosition: "top",
    de: {
      title: "Auto Infotainment System",
      category: "UX / UI Design",
      summary: "Ein durchdachter Design-Prozess, der die Benutzeroberfläche eines Infotainment-Systems optimiert und die Interaktion während der Fahrt intuitiver gestaltet.",
      description: "Von der ersten Problemanalyse bis zum getesteten Prototyp – ein durchdachter UX-Prozess für ein Infotainment-System, das die Bedienung während der Fahrt sicherer und intuitiver macht.",
      steps: [
        { number: 1, title: "Problem", description: "Die bestehende App war überladen und verwirrend. Kund:innen fanden zentrale Funktionen nicht.", image: "assets/auto6.png" },
        { number: 2, title: "Persona", description: "Definition der Hauptnutzergruppen (wie dem Studenten Tom Reich) und Analyse ihrer Bedürfnisse, Gewohnheiten und Anforderungen im täglichen Straßenverkehr.", image: "assets/auto2.png" },
        { number: 3, title: "Konzeption", description: "Strukturierung der Benutzeroberfläche durch erste Wireframes und Skizzen, um eine ablenkungsfreie Anordnung von Tacho, Karte und Schnellzugriffen zu gewährleisten.", image: "assets/auto3.png" },
        { number: 4, title: "High-Fidelity Prototyp", description: "Ausarbeitung des finalen, kontrastreichen UI-Designs mit optimierten Touch-Elementen für eine sichere und intuitive Bedienung im Cockpit.", image: "assets/auto4.png" },
        { number: 5, title: "Usability Testing", description: "Evaluierung des Prototyps im Fahrsimulator, um die kognitive Belastung, die Intuition der Routenführung und die Effizienz des Sprachassistenten zu prüfen.", image: "assets/auto5.png" }
      ]
    },
    en: {
      title: "Car Infotainment System",
      category: "UX / UI Design",
      summary: "A thoughtful design process optimizing an infotainment system's interface to make interaction during driving more intuitive.",
      description: "From the initial problem analysis to the tested prototype – a comprehensive UX process for an infotainment system that makes operation safer and more intuitive while driving.",
      steps: [
        { number: 1, title: "Problem", description: "The existing application was overloaded and confusing. Users struggled to locate core functions.", image: "assets/auto6.png" },
        { number: 2, title: "Persona", description: "Definition of core user groups (such as the student Tom Reich) and analysis of their needs, habits, and requirements in daily traffic.", image: "assets/auto2.png" },
        { number: 3, title: "Concept", description: "Structuring the user interface through initial wireframes and sketches to ensure a distraction-free layout for the speedometer, map, and quick-access elements.", image: "assets/auto3.png" },
        { number: 4, title: "High-Fidelity Prototype", description: "Development of the final, high-contrast UI design with optimized touch elements for safe and intuitive operation in the cockpit.", image: "assets/auto4.png" },
        { number: 5, title: "Usability Testing", description: "Evaluation of the prototype in a driving simulator to test cognitive load, the intuition of route guidance, and the efficiency of the voice assistant.", image: "assets/auto5.png" }
      ]
    }
  },
  {
    id: "website-relaunch",
    year: "2024",
    image: "assets/save.png",
    video: null,
    resultImage: "assets/save6.png",
    resultPosition: "top",
    de: {
      title: "Save Space Webseite",
      category: "Web Design",
      summary: "Interaktive Pixel-Art-Plattform gegen Weltraummüll: Spielerisches Erkunden von Objekten im Orbit macht komplexe Daten emotional erlebbar.",
      description: "Von der ersten Problemanalyse bis zum getesteten Prototyp – eine interaktive Pixel-Art-Plattform, die das Thema Weltraummüll spielerisch und emotional erlebbar macht.",
      steps: [
        { number: 1, title: "Problem", description: "Besucher:innen sprangen frühzeitig ab, wodurch wichtige Interaktionen ausblieben. Lange Ladezeiten bremsten zusätzlich die Interaktion.", image: "assets/save1.png", imageFit: "contain" },
        { number: 2, title: "Persona", description: "Die datengestützte Persona „Tobias Wagner“ half dabei, Inhalte und Ansprache passgenau auszurichten. Seine Affinität zu Tech und Gaming bildete das Fundament für das interaktive Konzept.", image: "assets/save2.png" },
        { number: 3, title: "Konzeption", description: "Entwicklung einer klaren Seitenstruktur und Content-Hierarchie. Ein conversion-orientiertes Layout leitet den Nutzer logisch von der Problemwahrnehmung zur Interaktion.", image: "assets/save3.png" },
        { number: 4, title: "High-Fidelity Prototyp", description: "Erstellung eines modernen Visual Designs im immersiven Dark Mode. Eine starke Bildsprache und klare Call-to-Actions (CTAs) maximieren die Conversion-Rate.", image: "assets/save4.png" },
        { number: 5, title: "Usability Testing", description: "Durchführung von Tests und Nutzerbefragungen. Durch das Feedback wurden die wichtigsten Interaktionspunkte optimiert, um Reibungsverluste zu minimieren.", image: "assets/save5.png" }
      ]
    },
    en: {
      title: "Save Space Website",
      category: "Web Design",
      summary: "Interactive pixel-art platform against space debris: playful exploration of objects in orbit makes complex data emotionally engaging.",
      description: "From the initial problem analysis to the tested prototype – an interactive pixel-art platform that makes the topic of space debris playful and emotionally engaging.",
      steps: [
        { number: 1, title: "Problem", description: "Visitors left the site early, causing key interactions to be missed. Long loading times further hindered engagement.", image: "assets/save1.png", imageFit: "contain" },
        { number: 2, title: "Persona", description: "The data-driven persona 'Tobias Wagner' helped precisely align content and tone. His affinity for tech and gaming formed the foundation for the interactive concept.", image: "assets/save2.png" },
        { number: 3, title: "Concept", description: "Development of a clear page structure and content hierarchy. A conversion-oriented layout logically guides users from problem awareness to interaction.", image: "assets/save3.png" },
        { number: 4, title: "High-Fidelity Prototype", description: "Creation of a modern visual design in an immersive dark mode. Strong imagery and clear calls-to-action (CTAs) maximize the conversion rate.", image: "assets/save4.png" },
        { number: 5, title: "Usability Testing", description: "Conducting tests and user surveys. Feedback was used to optimize key interaction points to minimize friction.", image: "assets/save5.png" }
      ]
    }
  }
];

// ============================================================
// Sprach-Hilfsfunktionen (werden von script.js und project.js genutzt)
// ============================================================

const LANG_STORAGE_KEY = "site-lang";
const SUPPORTED_LANGS = ["de", "en"];

function getLang() {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  return SUPPORTED_LANGS.includes(stored) ? stored : "de";
}

function setLang(lang) {
  if (SUPPORTED_LANGS.includes(lang)) {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }
}

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

// Setzt alle statischen Texte mit [data-i18n] Attribut
function applyStaticI18n(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getByPath(dict, key);
    if (value !== undefined) el.textContent = value;
  });
}

// Liefert alle Projekte, lokalisiert für die gegebene Sprache
function getLocalizedProjects(lang) {
  return projectsData.map((p) => ({
    id: p.id,
    year: p.year,
    image: p.image,
    video: p.video,
    ...p[lang]
  }));
}

// Liefert ein einzelnes Projekt, lokalisiert für die gegebene Sprache
function getLocalizedProject(id, lang) {
  const p = projectsData.find((item) => item.id === id);
  if (!p) return null;
  return {
    id: p.id,
    year: p.year,
    image: p.image,
    video: p.video,
    videoFormat: p.videoFormat,
    resultImage: p.resultImage,
    resultPosition: p.resultPosition,
    ...p[lang]
  };
}

// Erstellt (einmalig) eine Lightbox-Overlay und macht alle Bilder mit der
// Klasse "zoomable" per Klick vergrößerbar. Nutzt Event-Delegation, damit es
// auch für dynamisch nachgerenderte Bilder (Sprachwechsel) funktioniert.
function setupLightbox() {
  if (document.getElementById("lightbox-overlay")) return;

  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.className = "lightbox-overlay";
  overlay.innerHTML = `
    <button type="button" class="lightbox-close" aria-label="Schließen">&times;</button>
    <img src="" alt="" />`;
  document.body.appendChild(overlay);

  const imgEl = overlay.querySelector("img");
  const closeBtn = overlay.querySelector(".lightbox-close");

  function closeLightbox() {
    overlay.classList.remove("is-open");
    document.body.classList.remove("lightbox-active");
  }

  function openLightbox(src, alt) {
    imgEl.src = src;
    imgEl.alt = alt || "";
    overlay.classList.add("is-open");
    document.body.classList.add("lightbox-active");
  }

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  document.addEventListener("click", (e) => {
    const target = e.target.closest("img.zoomable");
    if (target) {
      e.preventDefault();
      e.stopPropagation();
      openLightbox(target.currentSrc || target.src, target.alt);
    }
  });
}

// Verbindet die DE/EN Toggle-Buttons im Markup mit einem Callback,
// der bei Sprachwechsel die Seite neu rendert.
function setupLangToggle(onChange) {
  const buttons = document.querySelectorAll(".lang-toggle__btn");
  const current = getLang();

  buttons.forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === current);
    btn.setAttribute("aria-pressed", btn.dataset.lang === current ? "true" : "false");

    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === getLang()) return;
      setLang(lang);
      buttons.forEach((b) => {
        b.classList.toggle("is-active", b.dataset.lang === lang);
        b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false");
      });
      onChange(lang);
    });
  });

  document.documentElement.lang = current;
}