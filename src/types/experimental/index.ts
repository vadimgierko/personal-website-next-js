import { IconType } from "react-icons";

export type PageType = "item" | "field";
export type ItemType = "article" | "audio" | "devProject" | "project" | "video";
export type ItemsType =
	| "articles"
	| "projects"
	| "videos"
	| "audios"
	| "images";
export const allowedItemTypes: ItemsType[] = [
	"articles",
	"audios",
	"images",
	"projects",
	"videos",
];
export type Theme = "light" | "dark";

interface Metadata {
	title: string;
	description: string;
	slug: string;
	img: {
		src: string;
		alt: string;
	};
	// og
	ogTitle: string;
	ogDescription: string;
	ogImage: string;
}

export type FieldName =
	| "web-development"
	| "creative-process-management"
	| "music"
	| "visual-thinking";

interface ItemMetadata extends Metadata {
	itemType: ItemType;
	field: FieldName;
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

export interface Video extends ItemMetadata {
	itemType: "video";
	id: string;
	width: string;
	height: string;
}

interface ProjectProps {
	externalLinks?: {
		icon: string;
		link: string;
		description: string;
	}[];
	content?: string;
}

export interface Project extends ItemMetadata, ProjectProps {
	itemType: "project";
}

export interface DevProject extends ItemMetadata, ProjectProps {
	itemType: "devProject";
	public: boolean;
	repoName: string;
	skills: string[];
	features: string[];
}

export interface Audio extends ItemMetadata {
	itemType: "audio";
	src: string;
}

export interface Article extends ItemMetadata {
	itemType: "article";
	content: string;
}

export interface FieldOfInterest extends Metadata {
	fieldName: FieldName;
	icon: string;
	skills: string[];
	// items:
	projects: ItemMetadata[]; // DO NOT STORE CONTENT TO PREVENT DOUBLED DATA
	articles: ItemMetadata[]; // DO NOT STORE CONTENT TO PREVENT DOUBLED DATA
	videos: Video[];
	images: string[];
	audios: Audio[];
}

interface PageConstructor {
	pageType: PageType;
	pageContent: Item | FieldOfInterest;
}

export interface ItemPage extends PageConstructor {
	pageType: "item";
	pageContent: Item;
}

export interface FieldPage extends PageConstructor {
	pageType: "field";
	pageContent: FieldOfInterest;
}

export type Page = ItemPage | FieldPage;

//================================================

//=============== 🚀 TODO 🚀 ===============//

/**
 * 🚀 TODO 🚀
 *
 * - `FieldOfInterest` = `Category`
 *   - items (as for now) are only in field
 * - [slug] = `Category` | `Item`
 * - ~~`Page`~~ => add `pageType` prop to `Item`
 * - `Item`
 *   ```ts
 *   {
 *     type: ItemType
 *     metadata: Metadata,
 *     props: Item
 *     field: ...
 *   }
 *   ```
 * - ~~`DevProject`~~ => `Project`
 *   ```ts
 *   {
 *     type: "default" | "dev"
 *     props: Project | DevProject
 *   }
 *   ```
 */

//============== OTHER... ==================//

// export type Theme = "light" | "dark";

// export interface Skill {
// 	Icon: IconType;
// 	title: string;
// }

// export interface Icon {
// 	Icon: IconType;
// }

// //============= PAGES RELATED ==============//

// export type PageType = "article" | "project" | "devProject" | "field";

// /**
//  * 🚀 TODO:
//  * - EXPAND METADATA
//  * - EXPAND OPEN GRAPH, ESPECIALLY TYPES (https://ogp.me/#types)
//  */
// interface Metadata {
// 	title: string;
// 	description: string;
// 	/**
// 	 * ❗❗❗ NOT LINK (with "/") AS PREV ❗❗❗
// 	 */
// 	slug: string;
// 	/**
// 	 * Cover image used to be displayed on the website.
// 	 * (also default for og:image)
// 	 */
// 	img: {
// 		src: string;
// 		alt: string;
// 	};
// 	openGraph: {
// 		title: string;
// 		description: string;
// 		images: string | string[];
// 	};
// }

// //================= ITEMS =======================//
// export type ItemType =
// 	| "article"
// 	| "project"
// 	| "devProject"
// 	| "video"
// 	| "audio"
// 	| "image";
// export const itemTypes: ItemType[] = [
// 	"article",
// 	"audio",
// 	"devProject",
// 	"image",
// 	"project",
// 	"video",
// ];

// /**
//  * ❗❗❗ SHOULD DEVPROJECTS BE HERE?❗❗❗
//  * BECUASE IT IS USED IN /[ITEMS] ROUTE & NO DEVPROJECTS THERE...
//  */
// export type ItemsType =
// 	| "articles"
// 	| "projects"
// 	| "videos"
// 	| "audios"
// 	| "images";

// export const itemsTypes: ItemsType[] = [
// 	"articles",
// 	"audios",
// 	"images",
// 	"projects",
// 	"videos",
// ];

// // export type Item = Article | Video | Project | DevProject | Audio;
// export interface Item {
// 	type: ItemType;
// 	metadata: Metadata;
// 	props: Article | Video | Project | Audio;
// 	field: "web-development" | "visual-thinking" | "creative-process" | "music";
// }

// export interface VideoProps extends Metadata {
// 	id: string;
// 	width: string;
// 	height: string;
// }

// export interface ProjectProps {
// 	type: "default" | "dev"
// 	externalLinks?: {
// 		icon: string;
// 		link: string;
// 		description: string;
// 	}[];
// 	content?: string;
// }

// export interface DevProject extends Project {
// 	public: boolean;
// 	repoName: string;
// 	skills: string[];
// 	features: string[];
// }

// export interface Audio extends Metadata {
// 	src: string;
// }

// export interface Article extends Metadata {
// 	content: string;
// }

// /**
//  * Kinda Category
//  */
// export interface FieldOfInterest extends Metadata {
// 	icon: string;
// 	skills: string[];
// 	// items:
// 	projects: (DevProject | Project)[];
// 	articles: Article[];
// 	videos: Video[];
// 	images: string[];
// 	audios: Audio[];
// }

// export interface Page {
// 	pageType: PageType;
// 	pageContent: Article | Project | DevProject | FieldOfInterest;
// }
