import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";

export const projects_web_development = [
	{
		title: "Web Developer Portfolio",
		img: {
			src: "img/web-development/projects/dev-portfolio-react-bootstrap-screen-vadim-gierko.png",
			alt: "",
		},
		link: "/web-developer-portfolio",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/frontend-developer-portfolio",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/frontend-developer-portfolio",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "bootstrap"],
		features: ["rwd", "dark mode"],
		description:
			"Developer portfolio designed & developed by myself using React Bootstrap components for styling.",
	},
	{
		title: "Linky Notes",
		img: {
			src: "img/web-development/projects/linky-notes-app-vadim-gierko.png",
			alt: "",
		},
		link: "/linky-notes",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/linky-notes",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/linky-notes",
				description: "Strona www projektu",
			},
		],
		skills: [
			"react",
			"react_router",
			"firebase",
			"redux",
			"bootstrap",
			"markdown",
		],
		features: [
			"crud",
			"database",
			"routing",
			"users authentication",
			"rwd",
			"dark mode",
		],
		description:
			"Organize & filter your notes with tags & create your own knowledge base!",
		content:
			"This full-stack integrated with Firebase single page app allows you to create tagged notes with an indication of the bibliographic source. Thanks to that your notes are linked with each other & grouped by tags. You don't need to put your notes into folders or do any index or table of content anymore! You can easily find your note by filtering notes by one or more tags thanks to search engine (of which I'm proud ;-) You're saving a tone of time to organize & efficiently use your notes! At the moment this SPA is available for my personal use only. I couldn't manage hunderds of my notes, so I've decided to build this app and I'm happy, that finally I've solved one of my biggest problems thanks to my own app. You can see some of my notes, but cannot sign up at the moment or modify my database. App is still is still being developed, growing & tested by me, so when right time comes, I'll enable creating accounts for users like you ;-)",
	},
	{
		title: "Blogging Platform with Markdown Text Editor",
		img: {
			src: "img/web-development/projects/blogging-platform-vadim-gierko-screen.png",
			alt: "",
		},
		link: "/blogging-platform",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/blogging-platform",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/blogging-platform/",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "react_router", "markdown", "firebase", "bootstrap"],
		features: [
			"crud",
			"database",
			"routing",
			"users authentication",
			"rwd",
			"markdown editor",
		],
		description:
			"Run your blog for free & edit your articles via Markdown Editor!",
		content:
			"This full-stack SPA allows you to create & run your blog (or many blogs) for free after creating a free user account, write & edit your articles with simple & intuitive markdown text editor (which was also created by myself) & read published blogs without authentication. There is a small blog called 'My Programming Journey', where I published a few articles. This app & linky_notes app (see above) are my newest, most complex & advanced responsive full-stack single-page real-world applications, that support all kinds of CRUD features, in which I have used all of my previous knowledge and skills in the field of front-end development (React, React Router, Bootstrap) and realtime database & authentication integration (Firebase).",
	},
	{
		title: "React Redux Firebase CRUD App template styled with MUI",
		img: {
			src: "img/web-development/projects/react-redux-firebase-mui-crud-app-screen-vadim-gierko.png",
			alt: "",
		},
		link: "/react-redux-router-firebase-auth-rtdb-crud-mui-app",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/react-redux-router-firebase-auth-rtdb-crud-mui-app",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/react-redux-router-firebase-auth-rtdb-crud-mui-app/",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "react_router", "redux", "firebase", "mui"],
		features: [
			"crud",
			"database",
			"routing",
			"users authentication",
			"rwd",
			"dark mode",
		],
		description:
			"The template starter for quickly start a new fullstack app with Redux Toolkit & MUI!",
	},
	{
		title: "GitHub API Users Search App",
		img: {
			src: "img/web-development/projects/github-user-search-app-screen-vadim-gierko.png",
			alt: "",
		},
		link: "/github-api-users-search-app",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/github-api-users-search-app",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/github-api-users-search-app/#/vadimgierko",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "bootstrap", "react_router", "github"],
		features: ["api", "routing", "rwd"],
		description: "Find any user on GitHub & see his/her public repositories!",
		content:
			"This responsive SPA allows you to find & view any user's basic profile info & public repositories published on GitHub! Input the correct GitHub User usertitle in search field or... add usertitle after slash to app's url & you will see: 1). user's bio, profile image & open source projects with contents (if exist) linked to the github repositories or github pages (if exist).",
	},
	{
		title: "Mind Maps App",
		img: {
			src: "img/web-development/projects/mind-maps-app-screen-vadim-gierko.png",
			alt: "",
		},
		link: "/mind-map-app",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/MIND-MAP-APP",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/MIND-MAP-APP/",
				description: "Strona www projektu",
			},
		],
		skills: [
			"javascript",
			//"p5.js",
			"jquery",
			"bootstrap",
			"firebase",
		],
		features: ["crud", "database", "users authentication", "rwd"],
		description: "Create, save & edit your mind maps online with this app!",
		content:
			"Mind Maps App is a very simple, intuitive and easy to use application for online mindmapping. With this app you can create & edit a mind map with keywords in any place around the core keyword/s (you can build really impressive multi-level structure of nested keywords) You sign up & create the account, so you will be able to save a mind map as a project (for future edition) in your user's database (Firebase) and/or download your mind map as a PNG file with one click!",
	},
	{
		title: "Old School 2D Racing Game",
		img: {
			src: "img/web-development/projects/old-school-racing-game-p5-js-vadim-gierko-2.png",
			alt: "",
		},
		link: "/old-school-2d-racing-game",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/old-school-2d-racing-game",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/old-school-2d-racing-game/",
				description: "Strona www projektu",
			},
		],
		skills: [
			"javascript",
			//"p5.js",
			"bootstrap",
			"html",
		],
		features: ["animation", "rwd"],
		description: "Play the old school 2D racing game!",
		content:
			"Old-school 2D racing game created in JavaScript using p5.js library. I've started to develop this game at the beggining of my programming journey, but... had not enough knowledge to finish it then. So now, after 10 months brake I've figured all bugs & problems out, so the game is finally completed! I love working with p5.js, which alows you to create animations like this in that game, and thanks to this library I've made my first steps in programming learning with Khan Academy online courses, so it was a pleasure to come back to old habbits after 10 months of working mainly with React & other technologies ;-) Car's design was inspired by drawing of my son! Enjoy!",
	},
	{
		title: "Let It Snow! Falling Snow Animation",
		img: {
			src: "img/web-development/projects/let-it-snow-p5-javascript-animation-vadim-gierko.png",
			alt: "",
		},
		link: "/let-it-snow",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/let-it-snow",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/let-it-snow/",
				description: "Strona www projektu",
			},
		],
		skills: [
			"javascript",
			//"p5.js"
		],
		features: ["animation", "rwd"],
		description:
			"Listen to the beautiful Let it snow song while watching animated falling snow!",
		content:
			"This Christmas Online Animated Musical Card was made using Javascript & p5.js library. To make the animation seem more realistic, I created a pseudo 3D illusion thanks to basic knowledge of perspective: 1). there are 3 layers of snow, 2). more distant snowflakes are smaller, while closer are larger, 3). more distant snowflakes fall slower, and closer ones fall faster. In addition, I've implemented noise effect (noise() in p5.js) to falling snow, so now it seems to fall more naturally, and mountains. And finally, there are 4-sized trees: randomly positioned after each page reload, more distant trees are smaller & darker, closer trees are lighter & bigger. Let it snow!",
	},
	{
		title: "Live Markdown Text Editor",
		img: {
			src: "img/web-development/projects/markdown-text-editor-by-vadim-gierko.png",
			alt: "",
		},
		link: "/markdown-text-editor",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/markdown-text-editor",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/markdown-text-editor/",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "react_router", "markdown", "bootstrap"],
		features: ["routing", "markdown editor", "local storage", "rwd"],
		description: "Check how your Markdown text will look like when rendered!",
		content:
			"Live Markdown Text Editor lets you write text using markdown language & render it as an HTML. The feature can be (and will be) used as a text editor in my Blogging Platform App (my most advanced fullstack application which comes very soon) & many others apps.",
	},
	{
		title: "Pixel Draw App",
		img: {
			src: "img/web-development/projects/pixel-draw-app-screen-vadim-gierko.png",
			alt: "",
		},
		link: "pixel-draw-app",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/PixelDrawApp",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/PixelDrawApp/",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "bootstrap", "bootstrap-icons"],
		features: ["crud", "local storage", "rwd"],
		description: "Create, save and edit your first pixel art!",
		content:
			"Pixel Drawing App allows you to create pictures by filling pixels with color. All you need is to pick the color from color picker and then click on any pixel on the board to fill it with the chosen color! You can save a pixel picture as a project in local storage (your browser), so you can work on that later and it will be possible to download the image soon (when I rewrite it with p5.js). Also the app will be integrated with Firebase, like MindMapsApp, so there will be the possibility to sign up and save/ edit your pixel drawings in database.",
	},
	{
		title: "Snake Game Clone",
		img: {
			src: "img/web-development/projects/snake-game-clone-screen-vadim-gierko.png",
			alt: "",
		},
		link: "snake-game-clone",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/snake-game-react",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://vadimgierko.github.io/PixelDrawApp/",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "javascript", "css"],
		features: ["game-loop", "rwd"],
		description:
			"Old School 2D Snake Game for desktop & mobile written in React. Enjoy!",
		content: "",
	},
	{
		title: "Sudoku Solver",
		img: "img/web-development/projects/sudoku-solver-app-screen-vadim-gierko.png",
		link: "sudoku-solver",
		externalLinks: [
			{
				//Icon: AiOutlineGithub,
				link: "https://github.com/vadimgierko/sudoku-solver",
				description: "Zobacz kod na GitHub",
			},
			{
				//Icon: AiOutlineGlobal,
				link: "https://codesandbox.io/s/sudoku-solver-ip90ku",
				description: "Strona www projektu",
			},
		],
		skills: ["react", "javascript"],
		features: ["sudoku-solver-algorithm"],
		description:
			"Input easy sudoku into the board & let the algorithm solve it!",
		content: "",
	},
];
