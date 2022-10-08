import { useEffect, useState } from "react";
// next.js:
import { useRouter } from "next/router";
// custom components:
import Container from "react-bootstrap/Container";
import CardsList from "../../../components/CardsList";
import Icon from "../../../components/Icon";
// lib:
import getPageContent from "../../../lib/getPageContent";
// content:
import { icons } from "../../../content/icons";
import { fieldsOfInterests } from "../../../content/fieldsOfInterests";

export default function ProjectsList({ projects }) {
	const router = useRouter();
	const [pageContent, setPageContent] = useState();

	useEffect(() => {
		setPageContent(getPageContent(router.query.slug));
	}, [router.query]);

	if (!pageContent) return null;

	return (
		<Container className="py-3 text-center" style={{ maxWidth: 900 }}>
			{pageContent.icon && (
				<Icon IconType={icons[pageContent.icon].Icon} size={100} />
			)}
			<h1>{pageContent.title}</h1>
			<hr />
			<h2 className="mb-3">Projekty (Projects)</h2>
			{projects && projects.length ? (
				<CardsList items={projects} linkText="Więcej info" />
			) : (
				<p>There are no projects yet...</p>
			)}
		</Container>
	);
}

export async function getStaticPaths() {
	const fieldsSlugs = [];
	fieldsOfInterests.forEach((field) =>
		fieldsSlugs.push({ params: { slug: field.link.slice(1) } })
	);
	const paths = fieldsSlugs;

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const projects = getPageContent(params.slug).projects
		? getPageContent(params.slug).projects
		: null;

	return {
		props: {
			projects,
		},
	};
}
