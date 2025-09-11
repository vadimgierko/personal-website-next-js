"use client";

import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Icon from "@/components/atoms/Icon";
import { icons } from "@/content/icons";
import { cms } from "@/content/cms";
import { websiteConfig } from "../../../../website.config";

const { localStorageThemeKey } = cms.domains.values[websiteConfig.domainName];

export default function ProjectExternalLinkButton({
	link,
}: {
	link: { link: string; description: string; icon: string };
}) {
	const [windowWidth, setWindowWidth] = useState<number>();
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		setWindowWidth(globalThis.window.innerWidth);

		const savedTheme = localStorage.getItem(localStorageThemeKey);

		if (savedTheme) {
			setTheme(savedTheme);
			document.documentElement.setAttribute("data-bs-theme", savedTheme);
		} else {
			localStorage.setItem(localStorageThemeKey, "dark");
			document.documentElement.setAttribute("data-bs-theme", "dark");
		}
	}, []);

	return (
		<Button
			href={link.link}
			variant={`outline-${theme === "dark" ? "light" : "dark"}`}
			size={windowWidth && windowWidth < 400 ? "sm" : "lg"}
			target="_blank"
			rel="noreferrer"
			className="my-3"
		>
			{link.description}{" "}
			<Icon IconType={icons[link.icon].Icon} size={20} className="pb-1" />
		</Button>
	);
}
