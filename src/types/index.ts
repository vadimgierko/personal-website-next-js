import { IconType } from "react-icons";

export type Theme = "light" | "dark";

//==================================================//

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

//====================== ITEMS =======================//
type BaseItem<K extends ItemType, P> = {
	fieldName: FieldName;
	itemType: K;
	metadata: Metadata;
	props: P;
};

export type Article = BaseItem<"article", { content: string }>;
export type Audio = BaseItem<"audio", { src: string }>;
export type Image = BaseItem<"image", { slug: string }>;
type ProjectBaseProps = {
	externalLinks?: {
		icon: string;
		link: string;
		description: string;
	}[];
	content?: string;
};
export type DefaultProject = BaseItem<"project", ProjectBaseProps>;
export type DevProject = BaseItem<
	"devProject",
	ProjectBaseProps & {
		public: boolean;
		repoName: string;
		skills: string[];
		features: string[];
	}
>;
export type Project = DefaultProject | DevProject;
export type Video = BaseItem<
	"video",
	{ id: string; width: string; height: string }
>;

// type Item = {
// 	fieldName: FieldName;
// 	itemType: ItemType;
// 	metadata: Metadata;
// 	props: Omit<Item, keyof Metadata>;
// };

export type Item = Article | Audio | Image | Project | Video;

//=============================== FIELD ==================================//

export type Field = {
	fieldName: FieldName;
	metadata: Metadata;
	props: {
		icon: string;
		skills: string[];
	};
	items: {
		[key in ItemsType]: Item["metadata"]["link"][];
	};
};

//=============================== PAGE ===================================//
type PageType = "field" | "item";

type BasePage<K extends PageType, S extends string | FieldName> = {
	pageType: K;
	slug: S;
};

type FieldPage = BasePage<"field", FieldName>;
type ItemPage = BasePage<"item", string> & {
	props: {
		itemType: ItemType;
		itemsType: ItemsType;
	};
};

//=============================== CONTENT ================================//

export type Content = {
	items: {
		// [key in ItemsType]: {
		// 	[key: string]: Item;
		// };
		articles: {
			[key: string]: Article;
		};
		audios: {
			[key: string]: Audio;
		};
		images: {
			[key: string]: Image;
		};
		projects: {
			[key: string]: Project;
		};
		videos: {
			[key: string]: Video;
		};
	};
	fields: {
		[key in FieldName]: Field;
	};
	pages: {
		[key: string]: FieldPage | ItemPage;
	};
};

//=============================== WEBSITE ==============================//

// export type Website = {
// 	metadata: Metadata // ❗❗❗ WEBSITE METADATA IS MUCH BROADER ❗❗❗
// 	fieldsName: FieldName[];
// 	itemsTypes: ItemsType[];
// 	content: Content
// }
