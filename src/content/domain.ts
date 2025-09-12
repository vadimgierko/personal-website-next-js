import { Domain } from "@/types";
import { websiteConfig } from "../../website.config";

export const domain: Domain = {
	gaId: "G-SDYR1XY35B",
	layout: {
		footer: {
			beforeCopyText: "development, content & images",
			initYear: 2022,
			links: {
				internal: [],
				external: [
					{
						href: "https://github.com/vadimgierko",
						value: "Vadim Gierko",
					},
				],
			},
		},
		navbar: {
			links: {
				about: {
					href: "/o-mnie",
					value: "o mnie",
				},
				categories: {
					"web-development": "programowanie",
					"creative-process-management": "proces twórczy",
					"visual-thinking": "myślenie wizualne",
					music: "muzyka",
				},
				items: {
					articles: "artykuły",
					audios: "nagrania",
					images: "galeria",
					projects: "projekty",
					videos: "wideo",
				},
				social: {
					github: "https://github.com/vadimgierko",
					linkedin: "https://pl.linkedin.com/in/vadimgierko",
					instagram: "https://www.instagram.com/vadim.gierko/",
				},
			},
			brand: {
				image: {
					src: "/vadim-gierko-avatar.jpg",
					alt: "vadim gierko profile picture",
				},
				value: "Vadim Gierko",
			},
		},
	},
	localStorageThemeKey: `${websiteConfig.domainName}-theme`,
	metadata: {
		title: "Vadim Gierko",
		description: "Strona internetowa Vadima Gierko",
		authorName: "Vadim Gierko",
		favicon: "https://vadimgierko.com/vadim-gierko-avatar.jpg",
		openGraph: {
			title: "Vadim Gierko",
			description: "Vadim Gierko's personal website",
			image:
				"https://www.vadimgierko.com/img/web-development/projects/vadimgierko-com-personal-website-next-js-screen-vadim-gierko.png",
			url: "https://" + websiteConfig.domainName,
			type: "website",
		},
	},
};
