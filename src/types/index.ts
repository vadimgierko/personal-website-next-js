import { IconType } from "react-icons";

export type PageType = "article" | "project" | "devProject" | "field";
export type ItemType = "article" | "project";
export type ItemsType =
	| "articles"
	| "projects"
	| "videos"
	| "audios"
	| "images";
export type Theme = "light" | "dark";

interface Metadata {
	title: string;
	description: string;
	link: string;
	// og
	ogTitle: string;
	ogDescription: string;
	ogImage: string;

	// to make it work for now...
	// icon: string;
}

export interface Video extends Metadata {
	img: {
		src: string;
		alt: string;
	};
	id: string;
	width: string;
	height: string;
}

export interface Skill {
	Icon: IconType;
	title: string;
}

export interface Project extends Metadata {
	img: {
		src: string;
		alt: string;
	};
	externalLinks?: {
		icon: string;
		link: string;
		description: string;
	}[];
	content?: string;
}

export interface DevProject extends Project {
	public: boolean;
	repoName: string;
	skills: string[];
	features: string[];
}

export interface Icon {
	Icon: IconType;
}

export interface Audio extends Metadata {
	src: string;
	img: {
		src: string;
		alt: string;
	};
}

export interface Article extends Metadata {
	img: {
		src: string;
		alt: string;
	};
	content: string;
}

export interface FieldOfInterest extends Metadata {
	icon: string;
	content: string;
	projects: (DevProject | Project)[];
	articles: Article[];
	skills: string[];
	videos?: Video[];
	images?: string[];
	audios?: Audio[];
	img: {
		src: string;
		alt: string;
	};
}

export interface Page {
	pageType: PageType;
	pageContent: Article | Project | DevProject | FieldOfInterest;
}
