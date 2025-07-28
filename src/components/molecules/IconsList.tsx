"use client";

import { useEffect, useState } from "react";
import { skills as SKILLS } from "../../content/skills";
import { Skill } from "@/types";
import Icon from "../atoms/Icon";

export default function IconsList({ skills }: { skills: string[] }) {
	const [windowSize, setWindowSize] = useState<number>();

	useEffect(() => {
		window.addEventListener("resize", () => {
			const size = globalThis.window.innerWidth;
			setWindowSize(size);
		});
	}, []);

	function getIcons(skills: string[]) {
		const icons: Skill[] = [];

		if (skills) {
			skills.forEach((skill) => icons.push(SKILLS[skill]));
		}

		return icons;
	}

	if (!skills) return null;

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				textAlign: "center",
				justifyContent: "center",
			}}
		>
			{getIcons(skills).map((item) => (
				<div key={item.title} className="text-center m-2 m-md-3">
					<Icon
						IconType={item.Icon}
						size={windowSize && windowSize > 576 ? 80 : 60}
					/>
					<p>
						<strong>{item.title}</strong>
					</p>
				</div>
			))}
		</div>
	);
}
