import { IconType } from "react-icons";

//================================= OLD TYPES ====================================//

export type PageType = "article" | "project" | "devProject" | "field";
export type ItemType =
	| "article"
	| "audio"
	| "devProject"
	| "image"
	| "project"
	| "video";
export type FieldName =
	| "web-development"
	| "creative-process-management"
	| "music"
	| "visual-thinking";
export const allowedFieldNames: FieldName[] = [
	"creative-process-management",
	"music",
	"visual-thinking",
	"web-development",
];
export type ItemsType =
	| "articles"
	| "projects"
	| "videos"
	| "audios"
	| "images";
export const allowedItemsTypes: ItemsType[] = [
	"articles",
	"audios",
	"images",
	"projects",
	"videos",
];
export type Theme = "light" | "dark";

export interface Metadata {
	title: string;
	description: string;
	link: string;
	img: {
		src: string;
		alt: string;
	};
	// og
	ogTitle: string;
	ogDescription: string;
	ogImage: string;
}

export interface Skill {
	Icon: IconType;
	title: string;
}

export interface Icon {
	Icon: IconType;
}

//================= items =======================//
export type Item = Article | Video | Project | DevProject | Audio;

export interface Video extends Metadata {
	id: string;
	width: string;
	height: string;
}

export interface Project extends Metadata {
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

export interface Audio extends Metadata {
	src: string;
}

export interface Article extends Metadata {
	content: string;
}

export interface FieldOfInterest extends Metadata {
	icon: string;
	skills: string[];
	// items:
	projects: (DevProject | Project)[];
	articles: Article[];
	videos: Video[];
	images: string[];
	audios: Audio[];
}

export interface Page {
	pageType: PageType;
	pageContent: Article | Project | DevProject | FieldOfInterest;
}

//================================= NEW TYPES ====================================//

// const CONTENT_TYPES = {
// 	FIELD: "field",
// 	ITEM: "item",
// } as const;

// type ContentType = (typeof CONTENT_TYPES)[keyof typeof CONTENT_TYPES];

// type BaseContentItem = {
// 	metadata: Metadata
// }

// type Article = BaseContentItem & {
// 	itemType: "article"
// }
