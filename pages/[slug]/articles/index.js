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
import { RiArticleLine } from "react-icons/ri";

export default function ArticlesList({ articles }) {
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
			<h2 className="mb-3">Artykuły (Articles)</h2>
			{articles && articles.length ? (
				<CardsList items={articles} linkText="Czytaj dalej" />
			) : (
				<p>There are no articles yet...</p>
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
	const articles = getPageContent(params.slug).articles
		? getPageContent(params.slug).articles
		: null;

	return {
		props: {
			articles,
		},
	};
}
