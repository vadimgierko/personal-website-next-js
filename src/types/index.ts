import { IconType } from "react-icons";

export type PageType = "article" | "project" | "field" | "devProject" | "field"
export type ItemsType = "articles" | "projects" | "videos" | "audios" | "images"
export type Theme = "light" | "dark";

export interface Video {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    img: {
        src: string;
        alt: string;
    };
    id: string;
    width: string;
    height: string;
    title: string;
    description: string;
}

export interface Skill {
    Icon: IconType;
    title: string;
}

export interface Project {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    title: string;
    link: string;
    img: {
        src: string;
        alt: string;
    };
    externalLinks?: {
        icon: string;
        link: string;
        description: string;
    }[];
    description: string;
    content?: string;
}

export interface DevProject extends Project {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    public: boolean;
    repoName: string;
    skills: string[];
    features: string[];
}

export interface Icon {
    Icon: IconType;
}

export interface Audio {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    title: string;
    src: string;
    link: string;
    img: {
        src: string;
        alt: string;
    };
}

export interface Article {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    title: string;
    description: string;
    img: {
        src: string;
        alt: string;
    };
    content: string;
    link: string;
}

export interface FieldOfInterest {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    title: string;
    link: string;
    icon: string;
    description: string;
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

export type Page = (
    (Article | Project | DevProject | FieldOfInterest) & { pageType: PageType }
)