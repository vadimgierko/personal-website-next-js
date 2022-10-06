import { useRouter } from "next/router";
// next.js:
import Head from "next/head";
// custom components:
import Layout from "../../layout";
import FieldOfInterests from "../../components/FieldOfInterests";
import Article from "../../components/Article";
import Project from "../../components/Project";
// lib:
import getAllSlugs from "../../lib/getAllSlugs";
import getPageContent from "../../lib/getPageContent";

export default function Page({ pageContent }) {
	//console.log("pageContent:", pageContent);
	const router = useRouter();
	//const { slug } = router.query;

	return (
		<>
			<Head>
				<title>Vadim Gierko | {pageContent.title}</title>
				<meta name="description" content={pageContent.description} />
			</Head>
			{pageContent.pageType === "field" && (
				<FieldOfInterests field={pageContent} />
			)}
			{pageContent.pageType === "article" && <Article article={pageContent} />}
			{pageContent.pageType === "project" && <Project project={pageContent} />}
		</>
	);
}

export async function getStaticPaths() {
	const paths = getAllSlugs();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	return {
		props: {
			pageContent: getPageContent(params.slug),
		},
	};
}
