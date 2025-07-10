const translations = {
  en: {
indexMeetTheArtist: "Meet The Artist",
indexImTiana: "I'm Tania",
indexQuote: "<br>A huge warm welcome to you!</br>I draw endless inspiration from traveling on a yacht and translate my love for the coast with impressionistic seascapes, images of boats, yachts and beach life. Art is my life and passion.",
indexLearnMoreButton: "Learn More",
	  
    aboutMeTitle: "ABOUT ME",
    aboutParagraph1: `<br>My name is Tiana Breeze and I am a Belarusian-Polish artist, born in 1982 in Vitebsk, Belarus. My mother is Belarusian, and my father is Polish. We often went to Poland to visit my father's relatives. In 2017, my family and I moved to Poland for permanent residence, where I live and create to this day. 
			<br></br>I have been drawing since childhood and initially became famous in my country as a caricaturist. Since the age of 13, my drawings have already been published in magazines and newspapers, such as "Vecherniy Vitebsk", Vitebsk Worker, Vitbichi, Picnic, Vozhyk, Shapoklyak and others.`,
    aboutParagraph2: `I have held five solo exhibitions. I am a winner of the regional cartoon competition. I love satire and caricatures, but later my real passion became oil painting.
			<br><br></br>I graduated from the Faculty of Fine Arts and Graphics at the State University in Vitebsk. I completed my diploma artwork in the oil painting studio under the guidance of prof. Anatoly Chmil and defended it with honors. I found oil painting to be the best technique to channel my creative passion. 
		</br>
        
        <br>Because of some rational reasons I changed my decision and became a manager  after two years at the Vitebsk State Technological University with a degree in manager-economist. Although my career was going well, I later realized that it was not what I really wanted.
			Moving to Poland, my father's homeland, allowed me to continue painting. Now I am a professional full-time artist and I am happy to be able to do what I love.
		</br><br>I am a member of the Union of Polish Artists, Painters and Graphic Artists. My artworks are featured in private collections in the USA, UK, Germany, Belarus, Poland and others.`,
    
    aboutArtTitle: "ABOUT MY ART",
    aboutParagraph2: "Art is my life and passion...",
    quote: `"Look at my pictures and just breath..."`,
    tianaName: "Tiana Breeze",
    footerText: "© Copyright Tiana Breeze Art",
    shipping: "SHIPPING & RETURNS",
    followMe: "Want to see behind the scenes? Follow me!",
  },
  pl: {

	indexMeetTheArtist: "Poznaj Artystkę",
	indexImTiana: "Nazywam się Tania",
	indexQuote: `<br>Serdecznie Cię witam!</br>Czerpię nieskończoną inspirację z podróży jachtem i przekładam moją miłość do wybrzeża na impresjonistyczne pejzaże morskie, obrazy łodzi, jachtów i życia na plaży. Sztuka to moje życie i pasja.`,
	indexLearnMoreButton: "Czytać więcej",
	  
    aboutMeTitle: "O MNIE",
    aboutParagraph1: `<br>Nazywam się Tiana Breeze i jestem białorusko-polską artystką, urodzoną w 1982 roku w Witebsku na Białorusi. Moja mama jest Białorusinką, a tata Polakiem. Często jeździliśmy do Polski odwiedzać krewnych taty. W 2017 roku moja rodzina i ja przeprowadziliśmy się na stałe do Polski, gdzie mieszkam i tworzę do dziś.<br></br>Rysuję od dziecka, początkowo zdobywając sławę w moim kraju jako karykaturzystka. Już od 13. roku życia moje rysunki były publikowane w czasopismach i gazetach, takich jak „Wieczorny Witebsk”, „Witebski Robotnik”, „Witbiczi”, „Piknik”, „Wozhyk”, „Szapoklak” i inne.`,
    aboutParagraph2: `Miałam pięć wystaw indywidualnych. Jestem laureatką regionalnego konkursu karykatur. Kocham satyrę i karykaturę, ale później moją prawdziwą pasją stał się obraz olejny.<br><br></br>Ukończyłam Wydział Sztuk Pięknych i Grafiki na Uniwersytecie Państwowym w Witebsku. Dyplom wykonałam w pracowni malarstwa olejnego pod kierunkiem prof. Anatolija Chmila i obroniłam go z wyróżnieniem. Malowanie olejne okazało się najlepszą techniką do wyrażania mojej pasji twórczej.<br>Z przyczyn racjonalnych zmieniłam decyzję i zostałam menedżerem po dwóch latach studiów na Witebskim Państwowym Uniwersytecie Technologicznym na kierunku menedżer-ekonomista. Mimo że kariera dobrze się rozwijała, później zrozumiałam, że to nie było to, czego naprawdę chciałam. Przeprowadzka do Polski, ojczyzny mojego ojca, pozwoliła mi kontynuować malarstwo. Teraz jestem zawodową artystką na pełen etat i cieszę się, że mogę robić to, co kocham.<br><br>Jestem członkinią Związku Polskich Artystów Plastyków. Moje prace znajdują się w prywatnych kolekcjach w USA, Wielkiej Brytanii, Niemczech, na Białorusi, w Polsce i innych krajach.`,

    aboutArtTitle: "O MOJEJ SZTUCE",
    aboutParagraph2: "Sztuka to moje życie i pasja...",
    quote: `"Spójrz na moje obrazy i po prostu oddychaj..."`,
    tianaName: "Tiana Breeze",

    footerText: "© Prawa autorskie Tiana Breeze Art",
    shipping: "WYSYŁKA I ZWROTY",
    followMe: "Chcesz zobaczyć kulisy mojej pracy? Obserwuj mnie!",
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
