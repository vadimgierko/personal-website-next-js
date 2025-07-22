"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../../context/useTheme";
// react-bootstrap:
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// custom components:
// layout:
import Section from "../../layout/Section";
// atoms:
import Icon from "../atoms/Icon";
import MarkdownRenderer from "../atoms/MarkdownRenderer";
// molecules:
import IconsList from "../molecules/IconsList";
// icons:
import { icons } from "../../content/icons";

export default function Project({ project }) {
	const { theme } = useTheme();
	const [windowWidth, setWindowWidth] = useState();

	useEffect(() => {
		setWindowWidth(globalThis.window.innerWidth);
	}, []);

	return (
		<>
			<Container className="article py-3" style={{ maxWidth: 900 }}>
				<header className="text-center">
					<h1>{project.title}</h1>
					<hr />
					<p className="text-center">{project.description}</p>
					<Image src={project.img.src} alt={project.img.alt} fluid />
					{project.externalLinks && (
						<div className="d-flex justify-content-center align-items-center gap-2 my-2">
							{project.externalLinks.map((link) => (
								<Button
									href={link.link}
									variant={theme === "light" ? "outline-dark" : "outline-light"}
									size={windowWidth < 400 ? "sm" : "md"}
									target="_blank"
									rel="noreferrer"
									className="my-3"
									key={link.link}
								>
									{link.description}{" "}
									<Icon
										IconType={icons[link.icon].Icon}
										size={20}
										className="pb-1"
									/>
								</Button>
							))}
						</div>
					)}
				</header>
			</Container>
			{project.skills && (
				<Section>
					<h3>Tech Stack</h3>
					<IconsList skills={project.skills} />
				</Section>
			)}
			{project.content && (
				<Container className="article py-3" style={{ maxWidth: 900 }}>
					<MarkdownRenderer markdown={project.content} />
				</Container>
			)}
		</>
	);
}
