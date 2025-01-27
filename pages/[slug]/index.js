// next.js:
import Head from "next/head";
// custom components:
import FieldOfInterests from "../../components/organisms/FieldOfInterests";
import Article from "../../components/organisms/Article";
import Project from "../../components/organisms/Project";
// lib:
import getAllSlugs from "../../lib/getAllSlugs";
import getPageContent from "../../lib/getPageContent";
import getRepoReadmeFileContentFromGitHub from "../../lib/getRepoReadmeFileContentFromGitHub";
import getRepoDataFromGitHub from "../../lib/getRepoDataFromGitHub";

export default function Page({ pageContent }) {
	return (
		<>
			<Head>
				<title>{pageContent.title} | Vadim Gierko</title>
				<meta name="description" content={pageContent.description} />
				<meta
					property="og:title"
					content={
						pageContent.ogTitle ? pageContent.ogTitle : pageContent.title
					}
				/>
				<meta
					property="og:description"
					content={
						pageContent.ogDescription
							? pageContent.ogDescription
							: pageContent.description
					}
				/>
				<meta
					property="og:image"
					content={
						pageContent.ogImage
							? pageContent.ogImage
							: pageContent.img
							? pageContent.img.src
							: "https://www.vadimgierko.com/vadim-gerko-zdjecie-cv.jpg"
					}
				/>
				<meta
					property="og:type"
					content={pageContent.pageType === "article" ? "article" : "website"}
				/>
				<meta
					property="og:url"
					content={"https://www.vadimgierko.com" + pageContent.link}
				/>
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
	// if (pageContent.pageType === "devProject") {
	// 	// FETCH REPO DATA FROM GITHUB ONLY IF PROJECT IS PUBLIC:
	// 	if (pageContent.public) {
	// 		const repoData = await getRepoDataFromGitHub(pageContent.repoName);
	// 		const readmeMarkdown = await getRepoReadmeFileContentFromGitHub(
	// 			repoData.name
	// 		);
	// 		// replace readme's h1 with h2:
	// 		const fixedMarkdown = readmeMarkdown.replace("#", "##");
	// 		pageContent = {
	// 			...pageContent,
	// 			content: fixedMarkdown,
	// 			description: repoData.description,
	// 			createdAt: repoData.created_at,
	// 			updatedAt: repoData.updated_at,
	// 			externalLinks: [
	// 				{
	// 					icon: "github",
	// 					link: "https://github.com/vadimgierko/" + repoData.name,
	// 					description: "Zobacz kod na GitHub",
	// 				},
	// 				{
	// 					icon: "global",
	// 					link: repoData.homepage,
	// 					description: "Strona www projektu",
	// 				},
	// 			],
	// 		};
	// 	}
	// }
	return {
		props: {
			pageContent,
		},
	};
}
