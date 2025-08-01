import { Project } from "@/types";
import { project3 } from "./project3";

export const projects_myślenie_wizualne: Project[] = [
	{
		title: 'Profil "Kreatywne Notatki" na Instagramie i Facebooku',
		link: "/profil-kreatywne-notatki-na-instagramie-i-facebooku",
		img: {
			src: "/img/screen-instagrama-Kreatywne-Notatki-2.jpg",
			alt: 'screen profilu "Kreatywnych Notatek" na Instagramie',
		},
		externalLinks: [
			{
				icon: "instagram",
				link: "https://www.instagram.com/kreatywnenotatki/",
				description: "Odwiedź profil na Instagramie",
			},
			{
				icon: "facebook",
				link: "https://www.facebook.com/kreatywnenotatkipl/",
				description: "Odwiedź profil na Facebooku",
			},
		],
		description: "Od 2018 r. prowadzę profil na Instagramie i Facebooku, na którym dzielę się swoimi notatkami wizualnymi oraz mapami myśli (ponad 100 opublikowanych postów). Profil obserwuje ponad 2300 osób!",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	{
		title: 'Blog "Kreatywne Notatki"',
		link: "/blog-kreatywne-notatki",
		img: {
			src: "/img/screen-blog-kreatywne-notatki.png",
			alt: 'screen nieistniejącego już bloga "Kreatywne Notatki"',
		},
		description: 'w latach 2018-2020 prowadziłem bloga nt. notowania wizualnego "Kreatywne Notatki"',
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	{
		title: "Warsztaty Notowania Wizualnego oraz Tworzenia Map Myśli",
		link: "/warsztaty-myslenia-wizualnego-notatki-wizualne-mapy-mysli",
		img: {
			src: "/img/zarzadzanie-procesem-tworczym-wykres-warsztaty-szkolenie-vadim-gierko-uczestnicy.jpg",
			alt: "zdjęcie z warsztatów notowania wizualnego oraz tworzenia map myśli na umcs",
		},
		description: `
Pod koniec 2019 r. zorganizowałem warsztaty notowania wizualnego według autorskiego programu.
Warsztaty odbyły się w ramach festiwalu “Ukraina w centrum Lublina”.
    `,
		content: project3,
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
];
