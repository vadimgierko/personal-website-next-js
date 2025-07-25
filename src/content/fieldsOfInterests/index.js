import { articles_proces_twórczy } from "../articles/proces-twórczy";
import { articles_myślenie_wizualne } from "../articles/myślenie-wizualne";
import { articles_web_development } from "../articles/web-development";

import { projects_proces_twórczy } from "../projects/proces-twórczy";
import { projects_web_development } from "../projects/web-development";
import { projects_myślenie_wizualne } from "../projects/myślenie-wizualne";

import { videos_myślenie_wizualne } from "../videos/myślenie-wizualne";
import { audios_music } from "../audios/music";

import { importAllImagesFromFolder } from "../../lib/importAllImagesFromFolder";
// import { FieldOfInterest } from "@/types";

// import fs from "fs";
// import path from "path";

const visual_thinking_gallery = Object.keys(
	importAllImagesFromFolder(
		require.context(
			"../../../public/visual-notes-gallery",
			false,
			/\.(png|jpe?g)$/
		)
	)
);

// 👇

// export function getVisualThinkingGallery(): string[] {
//   const dirPath = path.join(process.cwd(), "public", "visual-notes-gallery");
//   const files = fs.readdirSync(dirPath);

//   // Filter out image files only
//   const imageFiles = files.filter((file) =>
//     /\.(png|jpe?g)$/i.test(file)
//   );

//   // Return URLs relative to /public
//   return imageFiles.map((filename) => `/visual-notes-gallery/${filename}`);
// }

// const visual_thinking_gallery = getVisualThinkingGallery();

export const fieldsOfInterests = [
	{
		ogTitle: "Vadim Gierko | Web Developer",
		ogDescription: "Programowanie stron i aplikacji internetowych | Portfolio",
		ogImage: "https://www.vadimgierko.com/img/web-development/projects/vadim-gierko-web-developer-skills-screenshot.png",
		title: "Programowanie stron i aplikacji internetowych",
		link: "/web-development",
		icon: "laptop",
		description: `
Jestem web developerem z 4-letnim doświadczeniem programistycznym, który potrafi stworzyć **statyczne (SSG) i dynamiczne (SSR) strony internetowe**, **aplikacje webowe** oraz **podstawowe sklepy internetowe** za pomocą takich technologii, jak m. in.: *React, Next.js, JavaScript, TypeScript, Bootstrap, Firebase i Stripe*.

**Jestem otwarty na oferty pracy na stanowiska Front-end/ Full-stack React/ JavaScript/ TypeScript/ Next.js Developer stacjonarnie w Lublinie lub zdalnie w Polsce**.
    `,
		content: ``,

		projects: projects_web_development,
		articles: articles_web_development,
		skills: [
			"typescript",
			"javascript",
			"next_js",
			"react",
			"react_router",
			// "svelte",
			// "astro",
			"firebase",
			"bootstrap",
			"stripe",
			"css",
			"html",
			"markdown",
			"github",
			"vercel",
		],
		img: {
			src: "",
			alt: ""
		}
	},
	{
		title: "Zarządzanie Procesem Twórczym (ZPT)",
		link: "/creative-process-management",
		icon: "bulb",
		description: `
Od 2015 roku badam prawidłowości zachodzące w procesie twórczym, opierając się na własnych doświadczeniach oraz na podstawie literatury przedmiotu.

Wnioskami, do których doszedłem, oraz autorską koncepcją i systemem Zarządzania Procesem Twórczym podzieliłem się na swoim blogu, profilach na Facebooku i Instagramie, w ebooku oraz podczas warsztatów.
		
Uważam, że każdy/a jest kreatywny/a, talent i kreatywność można odkrywać i rozwijać, twórczością może być każdy rodzaj działalności, a twórczością i Procesem Twórczym można zarządzać.
    `,
		content: ``,
		projects: projects_proces_twórczy,
		articles: articles_proces_twórczy,
		ogTitle: "Zarządzanie Procesem Twórczym (ZPT)",
		ogDescription: `
Od 2015 roku badam prawidłowości zachodzące w procesie twórczym, opierając się na własnych doświadczeniach oraz na podstawie literatury przedmiotu.

Wnioskami, do których doszedłem, oraz autorską koncepcją i systemem Zarządzania Procesem Twórczym podzieliłem się na swoim blogu, profilach na Facebooku i Instagramie, w ebooku oraz podczas warsztatów.
		
Uważam, że każdy/a jest kreatywny/a, talent i kreatywność można odkrywać i rozwijać, twórczością może być każdy rodzaj działalności, a twórczością i Procesem Twórczym można zarządzać.
    `,
		ogImage: "",
		skills: [],
		img: {
			src: "",
			alt: ""
		}
	},
	{
		title: "Myślenie wizualne (notatki wizualne i mapy myśli)",
		link: "/visual-thinking",
		icon: "draw",
		description: `
Cokolwiek czytam, cokolwiek planuję, cokolwiek rozwijam, czegokolwiek się uczę – robię notatki wizualne i mapy myśli.

Swoimi notatkami (ok. 100 postów) dzielę się Facebooku (>2500 obserwujących) oraz na Instagramie (>2300 obserwujących), gdzie zostały zapisane przez użytkowników kilka tysięcy razy! Można je zobaczyć także w galerii na niniejszej stronie.
		
Prowadziłem też warsztaty, zarówno online, jak i stacjonarne, z notowania wizualnego oraz tworzenia map myśli.
    `,
		projects: projects_myślenie_wizualne,
		articles: articles_myślenie_wizualne,
		videos: videos_myślenie_wizualne,
		images: visual_thinking_gallery,
		ogTitle: "Myślenie wizualne (notatki wizualne i mapy myśli)",
		ogDescription: `
Cokolwiek czytam, cokolwiek planuję, cokolwiek rozwijam, czegokolwiek się uczę – robię notatki wizualne i mapy myśli.

Swoimi notatkami (ok. 100 postów) dzielę się Facebooku (>2500 obserwujących) oraz na Instagramie (>2300 obserwujących), gdzie zostały zapisane przez użytkowników kilka tysięcy razy! Można je zobaczyć także w galerii na niniejszej stronie.
		
Prowadziłem też warsztaty, zarówno online, jak i stacjonarne, z notowania wizualnego oraz tworzenia map myśli.
    `,
		ogImage: "",
		content: "",
		skills: [],
		img: {
			src: "",
			alt: ""
		}
	},
	{
		title: "Muzyka",
		link: "/music",
		icon: "musicalNotes",
		description: `
Muzyka towarzyszy mi od najmłodszych lat. Jako nastolatek samodzielnie nauczyłem się grać na gitarze klasycznej, potem ukończyłem szkołę muzyczną I i II stopnia.

Bardzo szybko zacząłem też komponować muzykę instrumentalną (ok. 100 utworów) m. in. za pomocą programu Guitar Pro oraz piosenki (ponad 100). Stworzyłem także muzykę do kilku animowanych filmów studenckich oraz do spotu reklamowego festiwalu.
		
Uczyłem także gry na gitarze w ogniskach muzycznych opierając się o autorski program nauki.
    `,
		audios: audios_music,
		ogTitle: "",
		ogDescription: "",
		ogImage: "",
		content: "",
		projects: [],
		articles: [],
		skills: [],
		img: {
			src: "",
			alt: ""
		}
	},
];
