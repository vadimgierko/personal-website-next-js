import { useEffect, useState } from "react";
import { skills as SKILLS } from "../content/skills";

export default function IconsList({ skills = [], size }) {
	const [windowSize, setWindowSize] = useState();

	useEffect(() => {
		window.addEventListener("resize", () => {
			const size = globalThis.window.innerWidth;
			setWindowSize(size);
		});
	}, []);

	function getIcons(skills) {
		if (skills) {
			let icons = [];
			skills.forEach((skill) => icons.push(SKILLS[skill]));
			return icons;
		}
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
					<item.Icon size={windowSize > 576 ? 80 : 60} />
					<p>
						<strong>{item.title}</strong>
					</p>
					{item.description && <p>{item.description}</p>}
				</div>
			))}
		</div>
	);
}
