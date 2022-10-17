import { project1 } from "./project1";

export const projects_proces_twórczy = [
	{
		title: 'Ebook "Zarządzanie Procesem Twórczym"',
		link: "/ebook-zarzadzanie-procesem-tworczym",
		img: {
			src: "/img/okładka-ebook-zarządzanie-procesem-twórczym-Vadim-Gierko-tablet-2048x1536.jpg",
			alt: "zdjęcie ebooka zarządzanie procesem twórczym na tablecie",
		},
		description:
			"Jedyny w swoim rodzaju praktyczny poradnik i system Zarządzania Procesem Twórczym krok po kroku oparty o autorską koncepcję.",
		content: project1,
	},
	{
		title: "Warsztaty Zarządzania Procesem Twórczym",
		link: "/warsztaty-zarzadzania-procesem-tworczym",
		img: {
			src: "/img/zarzadzanie-procesem-tworczym-wykres-warsztaty-szkolenie-vadim-gierko-uczestnicy.jpg",
			alt: "zdjęcie z warsztatów zarządzania procesem twórczym",
		},
		description:
			"Warsztaty ZPT dla studentów zorganizowane na Uniwersytecie Marii Curie-Skłodowskiej w Lublinie w 2019 r.",
	},
	{
		title: 'Blog nt. Zarządzania Procesem Twórczym "Łowca Pomysłów"',
		link: "/blog-lowca-pomyslow",
		img: {
			src: "/img/blog-łowca-pomysłów-vadim-gierko-proces-twórczy.jpg",
			alt: 'screen nieistniejącego już bloga "Łowca Pomsyłów"',
		},
		description:
			'W latach 2018-2020 prowadziłem bloga nt. kreatywności, generowania pomysłów oraz organizacji i rozwoju projektów twórczych. Na "Łowcy Pomysłów" opublikowałem kilkanaście obszernych artykułów, które później wykorzystałem w wydanym ebooku "ZPT"',
	},
	{
		title:
			'Profil "Łowca Pomysłów" na Facebooku i imienny profil na Instagramie',
		link: "/profil-lowca-pomyslow-na-facebooku-i-instagramie",
		img: {
			src: "/img/screen-instagram-vadim-gierko.png",
			alt: 'screen profilu "Kreatywnych Notatek" na Instagramie',
		},
		externalLinks: [
			{
				icon: "instagram",
				link: "https://www.instagram.com/vadim.gierko/",
				description: "Odwiedź profil na Instagramie",
			},
			{
				icon: "facebook",
				link: "https://www.facebook.com/lowcapomyslow/",
				description: "Odwiedź profil na Facebooku",
			},
		],
		description:
			"Od 2018 r. prowadzę profil na Instagramie i Facebooku, na którym dzielę się swoją wiedzą nt. Zarządzania Procesem Twórczym, generowania pomysłów i realizacji twórczych projektów (prawie 200 opublikowanych postów). Od grudnia 2020 roku moja aktywność na profilach została zamrożona w związku ze skupieniem się na nauce programowania.",
	},
	// {
	// 	title: 'Ebook "Łowca Pomysłów"',
	// 	link: "/ebook-lowca-pomyslow",
	// 	img: "img/zarzadzanie-procesem-tworczym-wykres-warsztaty-szkolenie-vadim-gierko.jpg",
	// 	description:
	// 		"W 2016 roku opublikowałem swojego pierwszego ebooka nt. generowania pomysłów, w którym opisałem swoją koncepcję przestrzeni informacyjno-energetycznej. Był to impuls do założenia jednoimiennego bloga w 2018 r.",
	// },
];
