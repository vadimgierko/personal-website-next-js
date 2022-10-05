import { articles_proces_twórczy } from "../articles/proces-twórczy";
import { articles_myślenie_wizualne } from "../articles/myślenie-wizualne";
import { projects_proces_twórczy } from "../projects/proces-twórczy";
import { projects_web_development } from "../projects/web-development";
import { projects_myślenie_wizualne } from "../projects/myślenie-wizualne";

export const fieldsOfInterests = [
	{
		title: "Programowanie stron i aplikacji internetowych",
		link: "/web-development",
		icon: "laptop",
		description: `
Jestem programistą-samoukiem z ponad 1,5-rocznym doświadczeniem niekomercyjnym.
Uwielbiam tworzyć i rozwijać aplikacje webowe, dzięki którym ludzie będą mogli rozwinąć skrzydła swojej kreatywności
oraz odciążą swój umysł od zadań, których wykonanie można optymalizować za pomocą oprogramowania. 
    `,
		content: `
Od 17 grudnia 2020 r. zacząłem samodzielnie uczyć się programowania stron i aplikacji internetowych.
W chwili obecnej potrafię stworzyć responsywne strony www (statyczne i dynamiczne) oraz aplikacje webowe typu Single Page App:
- zintegrowane z bazą danych (Firebase)
- z opcją rejestracji i logowania użytkowników (Firebase)
- z możliwością przesyłania/ pobierania/ edycji danych i plików (CRUD)
- pobieraniem danych z API
- z dynamicznym routingiem (React Router)
- reużywalnymi komponentami UI wykonanymi za pomocą bibliotek i frameworków React-Bootstrap, Bootstrap lub MUI.

Stworzyłem też kilka prostych gier, wizualizacji, symulacji i animacji oraz aplikacji m. in. z wykorzystaniem biblioteki p5.js
		`,
		projects: projects_web_development,
		skills: [
			"react",
			"javascript",
			"redux",
			"react_router",
			"firebase",
			"bootstrap",
			"mui",
			"css",
			"styled_components",
			"html",
			"markdown",
			"github",
			"vsc",
		],
	},
	{
		title: "Zarządzanie Procesem Twórczym (ZPT)",
		link: "/creative-process-management",
		icon: "bulb",
		description: `
Od jesieni 2015 roku zacząłem badać prawidłowości zachodzące w procesie twórczym,
początkowo opierając się na własnych doświadczeniach twórczych, a potem uzupełniając wiedzę
i testując swoje teorie za pomocą literatury przedmiotu.

Wnioskami, do których doszedłem, oraz autorską koncepcją i systemem Zarządzania Procesem Twórczym
podzieliłem się na swoim blogu, profilach na Facebooku i Instagramie, w ebooku oraz podczas warsztatów.

Uważam, że każdy/a jest kreatywny/a,
talent i kreatywność można odkrywać i rozwijać,
twórczością może być każdy rodzaj działalności,
a twórczością i Procesem Twórczym można zarządzać.
    `,
		content: `
Jestem autorem bloga „Łowca Pomysłów”,
na którym opublikowałem kilkanaście obszernych artykułów
oraz ponad 200 postów na profilu Łowcy Pomysłów na Instagramie i Facebooku,
gdzie na chwilę obecną (kwiecień 2020 r.)
łącznie obserwuje mnie prawie 1000 osób.

Prowadziłem kilkukrotnie warsztaty i wykłady
nt. Zarządzania Procesem Twórczym dla nauczycieli i studentów na UMCS w Lublinie.

Jestem autorem dwóch ebooków:
- „Łowca pomysłów” (na daną chwilę wycofanego ze sprzedaży ze względu na zbliżającą się publikację drugiego ebooka) oraz
- “Zarządzanie Procesem Twórczym” (który ukaże się na początku maja 2020 r.).

W tej kategorii znajdziesz artykuły nt. Zarządzania Procesem Twórczym,
kreatywności, twórczości i tworzenia, rozwoju twórczego i mnóstwo
inspiracji, wskazówek i narzędzi, by dać z siebie w aspekcie twórczym
100%.
		`,
		projects: projects_proces_twórczy,
		articles: articles_proces_twórczy,
	},
	{
		title: "Myślenie wizualne (notatki wizualne i mapy myśli)",
		link: "/visual-thinking",
		icon: "draw",
		description: `
Kolejną moją pasją jest notowanie wizualne.
Cokolwiek czytam, cokolwiek planuję, cokolwiek rozwijam,
czegokolwiek się uczę – robię notatki wizualne i mapy myśli.
    `,
		content: `
W tej kategorii znajdziesz artykuły nt. notowania wizualnego, map myśli,
notowania metodą Cornella, ale także wykorzystaniu w praktyce (w pracy,
w nauce i własnych projektach) mocy narzędzi myślenia wizualnego oraz
mnóstwo inspiracji, wskazówek i narzędzi, by zacząć notować wizualnie i
robić to coraz lepiej.

Stworzyłem ponad 150 ręcznie rysowanych notatek wizualnych i infografik,
znaczną część których można obejrzeć na profilu Kreatywnych Notatek na Instagramie i Facebooku.
Notatki powstają regularnie, zostały zapisane przez użytkowników ok. 2000 razy
i przyciągają codziennie nowych obserwujących
(ponad 1700 obserwujących na Instagramie i ponad 1100 na Facebooku (stanem na kwiecień 2020 r.).

Także pod koniec 2019 r. zorganizowałem warsztaty notowania wizualnego według autorskiego programu.
Warsztaty odbyły się w ramach festiwalu “Ukraina w centrum Lublina”.
    `,
		projects: projects_myślenie_wizualne,
		articles: articles_myślenie_wizualne,
	},
	{
		title: "Muzyka",
		link: "/music",
		icon: "musicalNotes",
		description: `
Muzyka towarzyszy mi od najmłodszych lat.
Jako nastolatek samodzielnie nauczyłem się grać na gitarze klasycznej,
potem ukończyłem szkołę muzyczną I i II stopnia.
Bardzo szybko zacząłem też komponować muzykę instrumentalną i piosenki.
    `,
		content: `
Jednym z moich hobby (obecnie odsuniętym na dalszy plan) jest muzyka.
Ukończyłem Szkołę Muzyczną I i II st. im. W. Lutosławskiego w Lublinie.
Pracowałem niegdyś jako instruktor nauki gry na gitarze klasycznej w ogniskach muzycznych,
prowadząc zajęcia w oparciu o autorski program nauczania gry na gitarze
(który, mam nadzieję, także zostanie opublikowany).

Ponadto skomponowałem ponad 100 piosenek (melodia + teksty w 4 językach) oraz
ponad 70 utworów instrumentalnych (zarówno dla gitary klasycznej solo,
jak i utwory na kilka instrumentów i zespół),
z czego kilka z nich zostały wykorzystane w studenckich filmach animacyjnych,
a także w spocie reklamowym Festiwalu oraz były wykonywane i nagradzane na konkursach i festiwalach.
Komponuję w dalszym ciągu i mam dalekosiężne plany w tym zakresie, m. in. napisanie książki o komponowaniu muzyki.
		`,
	},
];
