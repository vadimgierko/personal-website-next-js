import { fieldsOfInterests } from "@/content/fieldsOfInterests";
import {
	DevProject,
	FieldName,
	FieldOfInterest,
	Item,
	ItemsType,
	ItemType,
	Metadata,
} from "@/types";
import slugify from "slugify";

import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function writeJsonToLocalFile(
	filename: string,
	data: unknown
): Promise<void> {
	const filePath = join(__dirname, filename);
	const json = JSON.stringify(data, null, 2);

	await writeFile(filePath, json, "utf-8");
	console.log(`✅ JSON written to ${filePath}`);
}

async function writeObjectAsTsFile(
	filename: string,
	variableName: string,
	variableType: string,
	data: unknown
): Promise<void> {
	const filePath = join(__dirname, filename);
	const objectString = JSON.stringify(data, null, 2);

	const tsContent = `export const ${variableName}: ${variableType} = ${objectString} as const;\n`;

	try {
		await writeFile(filePath, tsContent, "utf-8");
		console.log(`✅ TypeScript file written to ${filePath}`);
	} catch (err) {
		console.error("❌ Failed to write TS file:", err);
		throw err;
	}
}

type BaseItem<K extends ItemType, P> = {
	fieldName: FieldName;
	itemType: K;
	metadata: Metadata;
	props: P;
};

type NewArticle = BaseItem<"article", { content: string }>;
type NewAudio = BaseItem<"audio", { src: string }>;
type NewImage = BaseItem<"image", { slug: string }>;
type NewProject = BaseItem<
	"project" | "devProject",
	| {
			externalLinks?: {
				icon: string;
				link: string;
				description: string;
			}[];
			content?: string;
	  }
	| {
			externalLinks?: {
				icon: string;
				link: string;
				description: string;
			}[];
			content?: string;
			public: boolean;
			repoName: string;
			skills: string[];
			features: string[];
	  }
>;
type NewVideo = BaseItem<
	"video",
	{ id: string; width: string; height: string }
>;

// type NewItem = {
// 	fieldName: FieldName;
// 	itemType: ItemType;
// 	metadata: Metadata;
// 	props: Omit<Item, keyof Metadata>;
// };

type NewItem = NewArticle | NewAudio | NewImage | NewProject | NewVideo;

type NewField = {
	fieldName: FieldName;
	metadata: Metadata;
	props: Pick<FieldOfInterest, "icon" | "skills">;
	items: {
		[key in ItemsType]: Item["link"][];
	};
};

export type NewContent = {
	items: {
		// [key in ItemsType]: {
		// 	[key: string]: NewItem;
		// };
		articles: {
			[key: string]: NewArticle;
		};
		audios: {
			[key: string]: NewAudio;
		};
		images: {
			[key: string]: NewImage;
		};
		projects: {
			[key: string]: NewProject;
		};
		videos: {
			[key: string]: NewVideo;
		};
	};
	fields: {
		[key in FieldName]: NewField;
	};
};

async function migrateContent() {
	// ❗❗❗ remember the link starts with "/", so use .slice(1) ❗❗❗
	const newContent: NewContent = {
		items: {
			articles: {},
			projects: {},
			videos: {},
			audios: {},
			images: {},
		},
		fields: {
			"web-development": {
				fieldName: "creative-process-management",
				metadata: {
					title: "",
					description: "",
					link: "",
					img: {
						src: "",
						alt: "",
					},
					ogTitle: "",
					ogDescription: "",
					ogImage: "",
				},
				props: {
					skills: [],
					icon: "",
				},
				items: {
					articles: [],
					projects: [],
					videos: [],
					audios: [],
					images: [],
				},
			},
			"creative-process-management": {
				fieldName: "creative-process-management",
				metadata: {
					title: "",
					description: "",
					link: "",
					img: {
						src: "",
						alt: "",
					},
					ogTitle: "",
					ogDescription: "",
					ogImage: "",
				},
				props: {
					skills: [],
					icon: "",
				},
				items: {
					articles: [],
					projects: [],
					videos: [],
					audios: [],
					images: [],
				},
			},
			music: {
				fieldName: "creative-process-management",
				metadata: {
					title: "",
					description: "",
					link: "",
					img: {
						src: "",
						alt: "",
					},
					ogTitle: "",
					ogDescription: "",
					ogImage: "",
				},
				props: {
					skills: [],
					icon: "",
				},
				items: {
					articles: [],
					projects: [],
					videos: [],
					audios: [],
					images: [],
				},
			},
			"visual-thinking": {
				fieldName: "creative-process-management",
				metadata: {
					title: "",
					description: "",
					link: "",
					img: {
						src: "",
						alt: "",
					},
					ogTitle: "",
					ogDescription: "",
					ogImage: "",
				},
				props: {
					skills: [],
					icon: "",
				},
				items: {
					articles: [],
					projects: [],
					videos: [],
					audios: [],
					images: [],
				},
			},
		},
	};

	// migrating...
	for (const field of fieldsOfInterests) {
		// fill fields:
		newContent.fields[field.link.slice(1) as FieldName] = {
			fieldName: field.link.slice(1) as FieldName,
			metadata: {
				title: field.title,
				description: field.description,
				link: field.link,
				img: field.img,
				ogTitle: field.ogTitle,
				ogDescription: field.ogDescription,
				ogImage: field.ogImage,
			},
			props: {
				skills: field.skills,
				icon: field.icon,
			},
			items: {
				articles: field.articles.map((i) => i.link.slice(1)),
				projects: field.projects.map((i) => i.link.slice(1)),
				videos: field.videos.map((i) => slugify(i.title, { lower: true })),
				audios: field.audios.map((i) => slugify(i.title, { lower: true })),
				images: field.images,
			},
		};

		// fill articles:
		for (const article of field.articles) {
			newContent.items.articles[article.link.slice(1)] = {
				fieldName: field.link.slice(1) as FieldName,
				itemType: "article",
				metadata: {
					title: article.title,
					description: article.description,
					link: article.link,
					img: article.img,
					ogTitle: article.ogTitle,
					ogDescription: article.ogDescription,
					ogImage: article.ogImage,
				},
				props: {
					content: article.content,
				},
			};
		}

		// fill projects:
		for (const project of field.projects) {
			newContent.items.projects[project.link.slice(1)] = {
				fieldName: field.link.slice(1) as FieldName,
				itemType: field.link === "/web-development" ? "devProject" : "project",
				metadata: {
					title: project.title,
					description: project.description,
					link: project.link,
					img: project.img,
					ogTitle: project.ogTitle,
					ogDescription: project.ogDescription,
					ogImage: project.ogImage,
				},
				props: {
					externalLinks: project.externalLinks,
					content: project.content,
					...(field.link === "/web-development"
						? {
								public: (project as DevProject).public,
								repoName: (project as DevProject).repoName,
								skills: (project as DevProject).skills,
								features: (project as DevProject).features,
						  }
						: {}),
				},
			};
		}

		// fill audios:
		for (const audio of field.audios) {
			newContent.items.audios[slugify(audio.title, { lower: true })] = {
				fieldName: field.link.slice(1) as FieldName,
				itemType: "audio",
				metadata: {
					title: audio.title,
					description: audio.description,
					link: audio.link,
					img: audio.img,
					ogTitle: audio.ogTitle,
					ogDescription: audio.ogDescription,
					ogImage: audio.ogImage,
				},
				props: {
					src: audio.src,
				},
			};
		}

		// fill videos:
		for (const video of field.videos) {
			newContent.items.videos[slugify(video.title, { lower: true })] = {
				fieldName: field.link.slice(1) as FieldName,
				itemType: "video",
				metadata: {
					title: video.title,
					description: video.description,
					link: video.link,
					img: video.img,
					ogTitle: video.ogTitle,
					ogDescription: video.ogDescription,
					ogImage: video.ogImage,
				},
				props: {
					id: video.id,
					width: video.width,
					height: video.height,
				},
			};
		}

		// fill images:
		for (const imageSrc of field.images) {
			newContent.items.images[imageSrc] = {
				fieldName: field.link.slice(1) as FieldName,
				itemType: "image",
				metadata: {
					title: "",
					description: "",
					link: "",
					img: {
						src: "",
						alt: "",
					},
					ogTitle: "",
					ogDescription: "",
					ogImage: "",
				},
				props: {
					slug: imageSrc,
				},
			};
		}
	}

	await writeJsonToLocalFile("new-content.json", newContent);
	await writeObjectAsTsFile(
		"new-content.ts",
		"newContent",
		"NewContent",
		newContent
	);
}

migrateContent();
