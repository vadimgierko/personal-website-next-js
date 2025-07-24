// custom components:
import FieldOfInterests from "@/components/organisms/FieldOfInterests";
import Article from "@/components/organisms/Article";
import Project from "@/components/organisms/Project";
// lib:
import getPageContent from "@/lib/getPageContent";
import { Metadata } from "next";
import getRepoReadmeFileContentFromGitHub from "@/lib/github/getRepoReadmeFileContentFromGitHub";
import getRepoDataFromGitHub from "@/lib/github/getRepoDataFromGitHub";
import checkGithubApiTokenRateLimits from "@/lib/github/checkGithubApiTokenRateLimits";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const slug = (await params).slug;
	const pageContent = getPageContent(slug);

	return {
		title: `${pageContent.title} | Vadim Gierko`,
		description: `${pageContent.description}`,
		openGraph: {
			title: `${pageContent.ogTitle || pageContent.title} | Vadim Gierko`,
			description: `${pageContent.ogDescription || pageContent.description}`,
			images: pageContent.ogImage
				? pageContent.ogImage
				: pageContent.img
					? pageContent.img.src
					: "https://www.vadimgierko.com/vadim-gerko-zdjecie-cv.jpg",
			type: pageContent.pageType === "article" ? "article" : "website",
			url: "https://www.vadimgierko.com" + pageContent.link,
		},
	};
}

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const slug = (await params).slug; // ❗❗❗
	const pageContent = getPageContent(slug);
	// console.log(pageContent);

	//================= FOR DEV PROJECTS ==================:
	// const isDevProject: boolean = pageContent.pageType === "devProject";
	// console.log("isDevProject:", isDevProject);

	async function getDevProjectData() {
		if (pageContent.pageType !== "devProject") return pageContent;
		if (!pageContent.public) return pageContent; // update additional data in projects

		// FETCH REPO DATA FROM GITHUB ONLY IF PROJECT IS PUBLIC:
		const repoData = await getRepoDataFromGitHub(pageContent.repoName);
		const readmeMarkdown = await getRepoReadmeFileContentFromGitHub(
			repoData.name
		);
		await checkGithubApiTokenRateLimits();

		// replace readme's h1 with h2:
		const fixedMarkdown = readmeMarkdown.replace("#", "##");

		return {
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

	return (
		<>
			{pageContent.pageType === "field" && (
				<FieldOfInterests field={pageContent} />
			)}
			{pageContent.pageType === "article" && <Article article={pageContent} />}
			{pageContent.pageType === "project" && <Project project={pageContent} />}
			{pageContent.pageType === "devProject" && (
				<Project project={await getDevProjectData()} />
			)}
		</>
	);
}
