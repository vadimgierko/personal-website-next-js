// react-bootstrap:
import Container from "react-bootstrap/Container";
// content:
import { icons } from "../content/icons";
// custom components:
import Section from "../layout/Section";
import CardsList from "./CardsList";
import MarkdownRenderer from "./MarkdownRenderer";
import IconsList from "./IconsList";
import Icon from "./Icon";
// react-icons:
import { AiOutlineFolder } from "react-icons/ai";
import { RiArticleLine } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
// next.js:
import Link from "next/link";

export default function FieldOfInterests({ field }) {
	return (
		<div>
			<header>
				<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
					{field.icon && <Icon IconType={icons[field.icon].Icon} size={100} />}
					<h1>{field.title}</h1>
					<hr />
					<p>{field.description}</p>
				</Container>
			</header>
			<main>
				{field.content && (
					<Section>
						<MarkdownRenderer markdown={field.content} />
					</Section>
				)}
				{field.skills && (
					<Section>
						<FaGraduationCap size={80} />
						<h2 className="text-center my-3">Umiejętności</h2>
						<IconsList skills={field.skills} />
					</Section>
				)}
				{field.projects && (
					<Section>
						<AiOutlineFolder size={80} />
						<h2 className="text-center my-3">Projekty</h2>
						<CardsList
							items={field.projects.slice(0, 3)}
							linkText="Więcej info"
						/>
						<Link href={field.link + "/projects"}>Więcej projektów</Link>
					</Section>
				)}
				{field.articles && (
					<Section>
						<RiArticleLine size={80} />
						<h2 className="text-center my-3">Artykuły</h2>
						<CardsList
							items={field.articles.slice(0, 3)}
							linkText="Czytaj dalej"
						/>
						<Link href={field.link + "/articles"}>Więcej artykułów</Link>
					</Section>
				)}
			</main>
		</div>
	);
}
