import { Skill } from "@/types";
import {
	SiReact,
	SiJavascript,
	SiRedux,
	SiFirebase,
	SiBootstrap,
	SiNextdotjs,
	SiReactrouter,
	SiHtml5,
	SiCss3,
	SiStyledcomponents,
	SiMui,
	SiMarkdown,
	SiSass,
	SiJquery,
	SiGithub,
	SiVercel,
	SiTypescript,
	SiStripe,
	SiSvelte,
	SiAstro,
} from "react-icons/si";

export const skills: {[key: string]: Skill} = {
	svelte: {
		Icon: SiSvelte,
		title: "Svelte",
	},
	react: {
		Icon: SiReact,
		title: "React",
	},
	javascript: {
		Icon: SiJavascript,
		title: "JavaScript (ES6+)",
	},
	typescript: {
		Icon: SiTypescript,
		title: "TypeScript",
	},
	redux: {
		Icon: SiRedux,
		title: "Redux (Toolkit)",
	},
	bootstrap: {
		Icon: SiBootstrap,
		title: "Bootstrap",
	},
	next_js: {
		Icon: SiNextdotjs,
		title: "Next.js",
	},
	react_router: {
		Icon: SiReactrouter,
		title: "React Router",
	},
	firebase: {
		Icon: SiFirebase,
		title: "Firebase",
	},
	stripe: {
		Icon: SiStripe,
		title: "Stripe",
	},
	mui: {
		Icon: SiMui,
		title: "MUI",
	},
	css: {
		Icon: SiCss3,
		title: "CSS",
	},
	html: {
		Icon: SiHtml5,
		title: "HTML",
	},
	styled_components: {
		Icon: SiStyledcomponents,
		title: "Styled Components",
	},
	markdown: {
		Icon: SiMarkdown,
		title: "Markdown",
	},
	sass: {
		Icon: SiSass,
		title: "Sass",
	},
	jquery: {
		Icon: SiJquery,
		title: "jQuery",
	},
	// vsc: {
	// 	Icon: SiVisualstudiocode,
	// 	title: "Visual Studio Code",
	// },
	github: {
		Icon: SiGithub,
		title: "GitHub",
	},
	vercel: {
		Icon: SiVercel,
		title: "Vercel",
	},
	astro: {
		Icon: SiAstro,
		title: "Astro",
	},
};
