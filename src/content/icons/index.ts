// react icons:
import {
	AiOutlineBulb,
	AiOutlineLaptop,
	AiOutlineGithub,
	AiOutlineGlobal,
	AiOutlineInstagram,
} from "react-icons/ai";
import { RiMindMap } from "react-icons/ri";
import { MdDraw, MdOutlineFacebook } from "react-icons/md";
import { GiMusicalNotes } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { Icon } from "@/types";

export const icons: {[key: string]: Icon} = {
	laptop: {
		Icon: AiOutlineLaptop,
	},
	bulb: {
		Icon: AiOutlineBulb,
	},
	musicalNotes: {
		Icon: GiMusicalNotes,
	},
	cap: {
		Icon: FaGraduationCap,
	},
	draw: {
		Icon: MdDraw,
	},
	mindMap: {
		Icon: RiMindMap,
	},
	github: {
		Icon: AiOutlineGithub,
	},
	global: {
		Icon: AiOutlineGlobal,
	},
	instagram: {
		Icon: AiOutlineInstagram,
	},
	facebook: {
		Icon: MdOutlineFacebook,
	},
};
