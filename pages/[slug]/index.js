// next.js:
import Head from "next/head";
// custom components:
import FieldOfInterests from "../../components/FieldOfInterests";
import Article from "../../components/Article";
import Project from "../../components/Project";
// lib:
import getAllSlugs from "../../lib/getAllSlugs";
import getPageContent from "../../lib/getPageContent";
import getRepoReadmeFileContentFromGitHub from "../../lib/getRepoReadmeFileContentFromGitHub";

export default function Page({ pageContent }) {
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
			{pageContent.pageType === "devProject" && (
				<Project project={pageContent} />
			)}
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
	// get content as it is for all pages (including dev projects pages):
	let pageContent = await getPageContent(params.slug);
	// for dev projects pages get repo readme content & add it as a "content" prop:
	if (pageContent.pageType === "devProject") {
		const readmeMarkdown = await getRepoReadmeFileContentFromGitHub(
			pageContent.externalLinks[0].link.slice(31)
		);
		// replace readme's h1 with h2:
		const fixedMarkdown = readmeMarkdown.replace("#", "##");
		pageContent = { ...pageContent, content: fixedMarkdown };
	}
	return {
		props: {
			pageContent,
		},
	};
}
