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
	category: string;
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

export type Category = {
	name: string;
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
type PageType = "category" | "item";

type BasePage<K extends PageType, S extends string> = {
	pageType: K;
	slug: S;
};

type CategoryPage = BasePage<"category", string>;
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
	/**
	 * prev: fields
	 */
	categories: {
		/**
		 * category slug; prev: FieldName
		 */
		[key: string]: Category;
	};
	pages: {
		[key: string]: CategoryPage | ItemPage;
	};
};

//=============================== WEBSITE ==============================//

type Domain = {
	metadata: Metadata // ❗❗❗ WEBSITE METADATA IS MUCH BROADER ❗❗❗
	fieldsNames: string[];
	itemsTypes: ItemsType[];
	content: Content
}

type CMS = {
	domains: string[];
}
