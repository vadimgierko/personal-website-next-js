export const projects_web_development = [
	{
		title: "vadimgierko.com",
		public: true,
		repoName: "personal-website-next-js",
		img: {
			src: "/img/web-development/projects/vadimgierko-com-personal-website-next-js-screen-vadim-gierko.png",
			alt: "",
		},
		link: "/personal-website-next-js",
		skills: [
			"next_js",
			"react",
			"bootstrap",
			"markdown",
			"css",
			"vercel",
			"github",
		],
		features: ["rwd", "dark mode"],
		description:
			"My personal static website designed & developed by myself from scratch using React, Next.js, React-Bootstrap, Bootstrap & Markdown.",
	},
	{
		title: "kodujemywbiurze.pl",
		public: true,
		repoName: "kodujemywbiurze.pl",
		img: {
			src: "/img/web-development/projects/kodujemy-w-biurze-pl-strona-internetowa-screenshot.jpg",
			alt: "",
		},
		link: "/kodujemywbiurze.pl",
		skills: ["svelte", "typescript", "markdown", "css", "vercel"],
		features: ["rwd", "dark mode"],
		description:
			"Darmowy kurs programowania webowego dla pracowników biurowych.",
	},
	{
		title: "Linky Notes",
		public: true,
		repoName: "linky-notes",
		img: {
			src: "/img/web-development/projects/linky-notes-app-vadim-gierko.png",
			alt: "",
		},
		link: "/linky-notes",
		skills: [
			"react",
			"next_js",
			"typescript",
			"firebase",
			"bootstrap",
			"markdown",
			"css",
			"vercel",
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
			"Organize & filter your notes with one or more tags, format your notes using Markdown syntax & create your own unstructured knowledge base!",
	},
	{
		title: "Realtime Chat App React",
		public: true,
		repoName: "chat-app-react",
		img: {
			src: "/img/web-development/projects/react-chat-app-vadim-gierko-screenshot.png",
			alt: "",
		},
		link: "/chat-app-react",
		skills: ["react", "react_router", "typescript", "firebase", "bootstrap"],
		features: ["rwd", "dark mode"],
		description:
			"Realtime PWA chat app built with React, TypeScript, Bootstrap, Firebase Authentication & Firestore. Deployed on Vercel.",
	},
	{
		title: "Issue Tracker",
		public: true,
		repoName: "issue-tracker",
		img: {
			src: "/img/web-development/projects/issue-tracker-app-vadim-gierko-screenshot.png",
			alt: "",
		},
		link: "/issue-tracker",
		skills: [
			"react",
			"react_router",
			"firebase",
			"typescript",
			"bootstrap",
			"markdown",
		],
		features: ["rwd", "dark mode"],
		description:
			"Track, manage, filter, sort, rank, nest and mix ordered & unordered issues in your dev projects & have an overview of all issues regardless of the project in 1 table.",
	},
	{
		title: "Live Markdown Text Editor",
		public: true,
		repoName: "markdown-text-editor",
		img: {
			src: "/img/web-development/projects/markdown-text-editor-by-vadim-gierko.png",
			alt: "",
		},
		link: "/markdown-text-editor",
		skills: ["react", "react_router", "markdown", "bootstrap"],
		features: ["routing", "markdown editor", "local storage", "rwd"],
		description: "Check how your Markdown text will look like when rendered!",
	},
	// 	{
	// 		title: "Sklep Ceramika MAKI",
	// 		public: false,
	// 		repoName: "ecommerce-website-next-js-sanity-stripe-firebase",
	// 		img: {
	// 			src: "/img/web-development/projects/ceramika-maki-ecommerce-website-shop-vadim-gierko-next-js-stripe-sanity.png",
	// 			alt: "",
	// 		},
	// 		//=====================THIS REPO IS PRIVATE, SO I ADD THIS BELOW MANUALLY =================
	// 		externalLinks: [
	// 			{
	// 				icon: "github",
	// 				link: "https://github.com/vadimgierko/ecommerce-website-next-js-sanity-stripe-firebase",
	// 				description: "Zobacz kod na GitHub",
	// 			},
	// 			{
	// 				icon: "global",
	// 				link: "https://ecommerce-website-next-js-sanity-stripe-firebase.vercel.app/",
	// 				description: "Strona www projektu",
	// 			},
	// 		],
	// 		content: `
	// This is a fullstack hybrid (SSG + Client-side data fetching) e-commerce website for local shop producing handcrafted ceramic products.

	// - written from scratch with Next.js/ React (the website is almost fully static (SSG), except products available amount, which is Client-side data fetching to get the most current data),
	// - integrated with headless CMS/ database (Sanity)
	// 	- where the owner/editor can store & edit products & website content,
	// 	- where products are reserved during checkout & unreserved after checkout cancel or session expiration
	// - integrated with Stripe payments
	// 	- built-in Stripe checkout,
	// 	- blik, przelewy24 & card payments available,
	// 	- integrated with Stripe webhook to notify if checkout session is expired & trigger unreserving products in database (Sanity)
	// - Bootswatch theme "lux" used
	// - deployed on Vercel (the website is serverless, so no need to have hosting set up & it's free)

	// ## Notable Features

	// - blik, przelewy24 & card payments available
	// - custom inventory management with products reservation & dealing with abandoned carts
	// - CMS (separate app) for the owner/editor to edit page info & manage products data

	// ## Tech Stack

	// - Next.js 13
	// - React 18
	// - Stripe 11
	// - Sanity
	// - React Bootstrap 2.6
	// - React Icons
	// - Bootstrap 5.2
	// - Bootswatch 5.2

	// ## WARNING

	// The **e-commerce website is currently in test mode**, what means, that it's fully functional
	// (there are real products, you can add them to the cart & even order them),
	// but you can order products only in test mode:

	// - [here is an information, how to make a test payment using **card**](https://stripe.com/docs/testing#testing-interactively)
	// - [here is an information, how to make a test payment using **przelewy24**](https://stripe.com/docs/payments/p24/accept-a-payment?platform=web&ui=checkout#test-integration)
	// - [here is an information, how to make a test payment using **blik**](https://stripe.com/docs/payments/blik/accept-a-payment?platform=web&ui=checkout#test-integration)
	// 		`,
	// 		//=======================================================================================//
	// 		link: "/sklep-ceramika-maki",
	// 		skills: ["next_js", "react", "stripe", "bootstrap", "css", "vercel"],
	// 		features: ["rwd", "dark mode"],
	// 		description:
	// 			"Fullstack hybrid (SSG + Client-side data fetching) e-commerce website for local shop producing handcrafted ceramic products with Stripe payments & Sanity headless CMS integrated.",
	// 	},
	// {
	// 	title: "Blogging Platform with Markdown Text Editor",
	// 	public: true,
	// 	repoName: "blogging-platform",
	// 	img: {
	// 		src: "/img/web-development/projects/blogging-platform-vadim-gierko-screen.png",
	// 		alt: "",
	// 	},
	// 	link: "/blogging-platform",
	// 	skills: ["react", "react_router", "bootstrap", "markdown", "firebase"],
	// 	features: [
	// 		"crud",
	// 		"database",
	// 		"routing",
	// 		"users authentication",
	// 		"rwd",
	// 		"markdown editor",
	// 	],
	// 	description:
	// 		"Run your blog for free & edit your articles via Markdown Text Editor!",
	// },
	// {
	// 	title: "React Firebase MUI Todo App",
	// 	public: true,
	// 	repoName: "todo-app",
	// 	img: {
	// 		src: "/img/web-development/projects/react-redux-firebase-mui-crud-app-screen-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/todo-app",
	// 	skills: ["react", "react_router", "redux", "firebase", "mui"],
	// 	features: [
	// 		"crud",
	// 		"database",
	// 		"routing",
	// 		"users authentication",
	// 		"rwd",
	// 		"dark mode",
	// 	],
	// 	description:
	// 		"Manage your tasks & todo lists using this Installable Todo App built with React, Redux, React Router, MUI, Firebase & deployed with GitHub Pages.",
	// },
	// {
	// 	title: "GitHub API Users Search App",
	// 	public: true,
	// 	repoName: "github-api-users-search-app",
	// 	img: {
	// 		src: "/img/web-development/projects/github-user-search-app-screen-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/github-api-users-search-app",
	// 	skills: ["react", "bootstrap", "react_router", "github"],
	// 	features: ["api", "routing", "rwd"],
	// 	description: "Find any user on GitHub & see his/her public repositories!",
	// },
	// {
	// 	title: "Mind Maps App",
	// 	public: true,
	// 	repoName: "MIND-MAP-APP",
	// 	img: {
	// 		src: "/img/web-development/projects/mind-maps-app-screen-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/mind-map-app",
	// 	skills: [
	// 		"javascript",
	// 		//"p5.js",
	// 		"jquery",
	// 		"bootstrap",
	// 		"firebase",
	// 	],
	// 	features: ["crud", "database", "users authentication", "rwd"],
	// 	description: "Create, save & edit your mind maps online with this app!",
	// },
	// {
	// 	title: "Old School 2D Racing Game",
	// 	public: true,
	// 	repoName: "old-school-2d-racing-game",
	// 	img: {
	// 		src: "/img/web-development/projects/old-school-racing-game-p5-js-vadim-gierko-2.png",
	// 		alt: "",
	// 	},
	// 	link: "/old-school-2d-racing-game",
	// 	skills: [
	// 		"javascript",
	// 		//"p5.js",
	// 		"bootstrap",
	// 		"html",
	// 	],
	// 	features: ["animation", "rwd"],
	// 	description: "Play the old school 2D racing game!",
	// },
	// {
	// 	title: "Let It Snow! Falling Snow Animation",
	// 	public: true,
	// 	repoName: "let-it-snow",
	// 	img: {
	// 		src: "/img/web-development/projects/let-it-snow-p5-javascript-animation-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/let-it-snow",
	// 	skills: [
	// 		"javascript",
	// 		//"p5.js"
	// 	],
	// 	features: ["animation", "rwd"],
	// 	description:
	// 		"Listen to the beautiful Let it snow song while watching animated falling snow!",
	// },
	// {
	// 	title: "Pixel Draw App",
	//  public: true,
	// 	repoName: "PixelDrawApp",
	// 	img: {
	// 		src: "/img/web-development/projects/pixel-draw-app-screen-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/pixel-draw-app",
	// 	skills: ["react", "bootstrap"],
	// 	features: ["crud", "local storage", "rwd"],
	// 	description: "Create, save and edit your first pixel art!",
	// },
	// {
	// 	title: "Snake Game Clone",
	// 	public: true,
	// 	repoName: "snake-game-react",
	// 	img: {
	// 		src: "/img/web-development/projects/snake-game-clone-screen-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/snake-game-clone",
	// 	skills: ["react", "javascript", "css"],
	// 	features: ["game-loop", "rwd"],
	// 	description:
	// 		"Old School 2D Snake Game for desktop & mobile written in React. Enjoy!",
	// },
	//======================================================================================
	// {
	// 	title: "Sudoku Solver",
	// 	img: {
	// 		src: "/img/web-development/projects/sudoku-solver-app-screen-vadim-gierko.png",
	// 		alt: "",
	// 	},
	// 	link: "/sudoku-solver",
	// 	externalLinks: [
	// 		{
	// 			icon: "github",
	// 			link: "https://github.com/vadimgierko/sudoku-solver",
	// 			description: "Zobacz kod na GitHub",
	// 		},
	// 		{
	// 			icon: "global",
	// 			link: "https://codesandbox.io/s/sudoku-solver-ip90ku",
	// 			description: "Strona www projektu",
	// 		},
	// 	],
	// 	skills: ["react", "javascript"],
	// 	features: ["sudoku-solver-algorithm"],
	// 	description:
	// 		"Input easy sudoku into the board & let the algorithm solve it!",
	// },
];
