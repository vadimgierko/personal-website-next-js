import { Article } from "@/types";
import { article1 } from "./article1";
import { article2 } from "./article2";
// import { article3 } from "./article3";
// import { article4 } from "./article4";

export const articles_web_development: Article[] = [
	{
		title: "5 Reasons Why I Started Learning Programming",
		description: "In this article I want to explain, why I made (such a hard in my case) decision and dived into completely unknown area and put this on top of all of my previous long-term projects and creative activities. This post is one of the ways to celebrate my 1-year anniversary of learning programming. Also I hope, that my reasons to start learning web development may inspire you to follow my example ;-)",
		img: {
			src: "",
			alt: "",
		},
		content: article1,
		link: "/5-reasons-why-i-started-learning-programming",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	{
		title: "Summary of my first year of learning web development. Roadmap, projects and tips for newbies",
		description: "Read this article, if you plan to become a front-end web developer in 2022. You can use my advice based on 1-year of non-commercial experience and follow my roadmap, which contains links to free sources.",
		img: {
			src: "",
			alt: "",
		},
		content: article2,
		link: "/summary-of-my-first-year-of-learning-web-development-roadmap-projects-and-tips-for-newbies",
		ogTitle: "",
		ogDescription: "",
		ogImage: ""
	},
	// {
	//   title: "Redux-like state management pattern. How to manage global state in React apps using Context API and useReducer",
	//   description: "In this guide we will build a simple todo app and apply my favorite way of managing React app's state using React Context API & useReducer hook. You will be able to use this state management pattern in your future React apps, so keep reading!",
	//   img: {
	//     src: "",
	//     alt: ""
	//   },
	//   content: "",
	//   link: "/redux-like-state-management-pattern-how-to-manage-global-state-in-react-apps-using-context-api-and-usereducer"
	// },
];
