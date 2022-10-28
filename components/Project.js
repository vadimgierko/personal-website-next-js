import { useCallback, useEffect, useState } from "react";
import { useTheme } from "../contexts/useTheme";
// react-bootstrap:
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
// custom components:
import MarkdownRenderer from "./MarkdownRenderer";
import IconsList from "./IconsList";
import Section from "../layout/Section";
import Icon from "./Icon";
// icons:
import { icons } from "../content/icons";
import getRepoReadmeFileContentFromGitHub from "../lib/getRepoReadmeFileContentFromGitHub";

export default function Project({ project }) {
	const { theme } = useTheme();
	const [windowWidth, setWindowWidth] = useState();

	const [loading, setLoading] = useState(false);
	const [repoMarkdown, setRepoMarkdown] = useState();

	const getReadmeMd = useCallback(async () => {
		setLoading(true);
		const md = await getRepoReadmeFileContentFromGitHub(
			project.externalLinks[0].link.slice(31)
		);
		setRepoMarkdown(md);
		setLoading(false);
	}, [project]);

	useEffect(() => {
		setWindowWidth(globalThis.window.innerWidth);
	}, []);

	useEffect(() => {
		getReadmeMd();
	}, [getReadmeMd]);

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
					<MarkdownRenderer
						markdown={
							project.skills
								? loading
									? null
									: repoMarkdown
									? repoMarkdown
									: null
								: project.content
						}
					/>
				</Container>
			)}
		</>
	);
}
