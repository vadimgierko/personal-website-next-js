import { Article } from "@/types";
import { article1 } from "./article1";
import { article2 } from "./article2";
import { article3 } from "./article3";
import { article4 } from "./article4";

export const articles_myślenie_wizualne: Article[] = [
	{
		title: "Jak notować efektywnie? Rób notatki wizualne!",
		description: `
Czy zdarzyło Ci się gubić w swoich notatkach?
Notowałeś/aś wszystko, ale niczego teraz nie pamiętasz?
Zwykłe linearne notatki, które znasz ze szkoły i studiów do niczego się nie nadają...
Chcesz notować efektywnie? Poznaj wizualne notatki!
Dowiesz się, jak je robić krok po kroku. Czytaj dalej!
		`,
		img: {
			src: "/img/notatki-wizualne-artykul-efektywna-nauka-notowanie-vadim-gierko-sketchnoting-887x1024.jpg",
			alt: "notatka wizaulna dlaczego warto notować wizualnie",
		},
		content: article1,
		link: "/jak-notowac-efektywnie-rob-notatki-wizualne",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	{
		title: "Mapy myśli. Jak je tworzyć i jak z nich korzystać?",
		description: `
Zapewne słyszałeś/aś o tym, czym są mapy myśli.
Najprawdopodobniej jednak nigdy takiej mapy nie zrobiłeś/aś!
Musimy to zmienić! Dowiedz się, czym są mapy myśli,
dlaczego są potężnym i praktycznym narzędziem mentalnym,
gdzie je można wykorzystać oraz jak je tworzyć krok po kroku!
		`,
		img: {
			src: "/img/mapa-mapy-mysli-vadim-gierko-notatki-wizualne-poradnik-artykul-nauka-zarzadzanie.jpg",
			alt: "mapa myśli nt. tworzenia map myśli",
		},
		content: article2,
		link: "/mapy-mysli-jak-je-tworzyc-i-jak-z-nich-korzystac",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	{
		title: 'Notatki wizualne "na pokaz" vs. do użytku własnego. Porównanie notatki nt. Patronite i jej szkicu',
		description: 'Zobacz, jaka jest różnica pomiędzy notatkami wizualnymi robionymi "na pokaz" - do mediów społecznościowych, a tymi na użytek własny. Widać to na przykładzie mojej notatki nt. platformy Patronite, na której założyłem profil, a szkicem docelowej notatki. Czytaj dalej, a pozbędziesz się wszelkich oporów przed notowaniem wizualnym!',
		img: {
			src: "/img/patronite-vadim-gierko-kreatywne-wizualne-notatki-819x1024.jpg",
			alt: "notatka wizualna na temat patronite",
		},
		content: article3,
		link: "/notatki-wizualne-na-pokaz-vs-do-uzytku-wlasnego-porownanie-notatki-nt-patronite-i-jej-szkicu",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	{
		title: "Jak zacząłem notować wizualnie? Moja historia",
		description: "Zachęcam Cię do zapoznania się z moją historią! Mam nadzieję, że to Cię zainspiruje do działania i pozbędziesz się wszelkich oporów, by zacząć notować wizualnie.",
		img: {
			src: "/img/vadim-gierko-tablica-korkowa-praca-notatki-wizualne.jpg",
			alt: "zdjęcie autora na tle tablicy korkowej z przypiętymi notatkami wizualnymi",
		},
		content: article4,
		link: "/jak-zaczalem-notowac-wizualnie-moja-historia",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
];
