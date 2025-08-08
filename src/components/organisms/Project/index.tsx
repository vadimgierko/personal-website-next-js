import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Section from "@/layout/Section";
import MarkdownRenderer from "@/components/atoms/MarkdownRenderer";
import IconsList from "@/components/molecules/IconsList";
import ProjectExternalLinkButton from "./ProjectExternalLinkButton";
import { Project as IProject } from "@/types";

export default function Project({ project }: { project: IProject }) {
	return (
		<>
			<Container className="article py-3" style={{ maxWidth: 900 }}>
				<header className="text-center">
					<h1>{project.metadata.title}</h1>
					<hr />
					<p className="text-center">{project.metadata.description}</p>
					<Image
						src={project.metadata.img.src}
						alt={project.metadata.img.alt}
						fluid
					/>
					{project.props.externalLinks && (
						<div className="d-flex justify-content-center align-items-center gap-2 my-2">
							{project.props.externalLinks.map((link) => (
								<ProjectExternalLinkButton key={link.link} link={link} />
							))}
						</div>
					)}
				</header>
			</Container>
			{project.itemType === "devProject" && project.props.skills && (
				<Section>
					<h3>Tech Stack</h3>
					<IconsList skills={project.props.skills} />
				</Section>
			)}
			{project.props.content && (
				<Container className="article py-3" style={{ maxWidth: 900 }}>
					<MarkdownRenderer markdown={project.props.content} />
				</Container>
			)}
		</>
	);
}
