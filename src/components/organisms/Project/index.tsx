import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Section from "@/layout/Section";
import MarkdownRenderer from "@/components/atoms/MarkdownRenderer";
import IconsList from "@/components/molecules/IconsList";
import ProjectExternalLinkButton from "./ProjectExternalLinkButton";
import { DevProject, Project as IProject } from "@/types";

export default function Project({ project }: { project: IProject }) {
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
								<ProjectExternalLinkButton key={link.link} link={link} />
							))}
						</div>
					)}
				</header>
			</Container>
			{(project as DevProject).skills && (
				<Section>
					<h3>Tech Stack</h3>
					<IconsList skills={(project as DevProject).skills} />
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
