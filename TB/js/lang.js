const translations = {
  en: {
    aboutMeTitle: "ABOUT ME",
    aboutParagraph1: "My name is Tiana Breeze and I am a Belarusian-Polish artist...",
    aboutArtTitle: "ABOUT MY ART",
    aboutParagraph2: "Art is my life and passion...",
    quote: `"Look at my pictures and just breath..."`,
    tianaName: "Tiana Breeze",
    footerText: "© Copyright Tiana Breeze Art",
    shipping: "SHIPPING & RETURNS",
    followMe: "Want to see behind the scenes? Follow me!",
  },
  pl: {
    aboutMeTitle: "O MNIE",
    aboutParagraph1: "Nazywam się Tiana Breeze i jestem białorusko-polską artystką...",
    aboutArtTitle: "O MOJEJ SZTUCE",
    aboutParagraph2: "Sztuka to moje życie i pasja...",
    quote: `"Spójrz na moje obrazy i po prostu oddychaj..."`,
    tianaName: "Tiana Breeze",
    footerText: "© Prawa autorskie Tiana Breeze Art",
    shipping: "WYSYŁKA I ZWROTY",
    followMe: "Chcesz zobaczyć kulisy mojej pracy? Obserwuj mnie!",
  },
  fr: {
    aboutMeTitle: "À PROPOS DE MOI",
    aboutParagraph1: "Je m'appelle Tiana Breeze et je suis une artiste biélorusse-polonaise...",
    aboutArtTitle: "À PROPOS DE MON ART",
    aboutParagraph2: "L'art est ma vie et ma passion...",
    quote: `"Regardez mes tableaux et respirez simplement..."`,
    tianaName: "Tiana Breeze",
    footerText: "© Droits d'auteur Tiana Breeze Art",
    shipping: "LIVRAISON ET RETOURS",
    followMe: "Vous voulez voir les coulisses ? Suivez-moi !",
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  updateTexts(lang);
}

function updateTexts(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// Załaduj język po odświeżeniu strony
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  updateTexts(savedLang);
});
