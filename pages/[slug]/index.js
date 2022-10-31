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
import getRepoDataFromGitHub from "../../lib/getRepoDataFromGitHub";

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

	//======================================== for dev projects:
	if (pageContent.pageType === "devProject") {
		const repoData = await getRepoDataFromGitHub(pageContent.repoName);
		const readmeMarkdown = await getRepoReadmeFileContentFromGitHub(
			repoData.name
		);
		// replace readme's h1 with h2:
		const fixedMarkdown = readmeMarkdown.replace("#", "##");
		pageContent = {
			...pageContent,
			content: fixedMarkdown,
			description: repoData.description,
			createdAt: repoData.created_at,
			updatedAt: repoData.updated_at,
			externalLinks: [
				{
					icon: "github",
					link: "https://github.com/vadimgierko/" + repoData.name,
					description: "Zobacz kod na GitHub",
				},
				{
					icon: "global",
					link: repoData.homepage,
					description: "Strona www projektu",
				},
			],
		};
	}
	return {
		props: {
			pageContent,
		},
	};
}
