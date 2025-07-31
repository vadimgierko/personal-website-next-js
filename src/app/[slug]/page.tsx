import { notFound } from "next/navigation";

// custom components:
import FieldOfInterests from "@/components/organisms/FieldOfInterests";
import Article from "@/components/organisms/Article";
import Project from "@/components/organisms/Project";
// lib:
import { Metadata } from "next";
import getRepoReadmeFileContentFromGitHub from "@/lib/github/getRepoReadmeFileContentFromGitHub";
import getRepoDataFromGitHub from "@/lib/github/getRepoDataFromGitHub";
import checkGithubApiTokenRateLimits from "@/lib/github/checkGithubApiTokenRateLimits";
import { Article as IArticle, FieldOfInterest } from "@/types";
import getAllPagesSlugs from "@/content/experimental-static-cms/lib/getAllPagesSlugs";
import getPageContentExperimental from "@/content/experimental-static-cms/lib/getPageContentExperimental";

type SlugPageParams = { slug: string };

export async function generateMetadata({
	params,
}: {
	params: Promise<SlugPageParams>;
}): Promise<Metadata> {
	const slug = (await params).slug;
	const pageData = getPageContentExperimental(slug);

	if (!pageData) return {};

	const { pageContent } = pageData;

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
			type: pageData.pageType === "article" ? "article" : "website",
			url: "https://www.vadimgierko.com" + pageContent.link,
		},
	};
}

export async function generateStaticParams() {
	const slugs = getAllPagesSlugs();

	const params: SlugPageParams[] = slugs.map((slug) => ({
		slug,
	}));

	return params;
}

export default async function Page({
	params,
}: {
	params: Promise<SlugPageParams>;
}) {
	const slug = (await params).slug; // ❗❗❗
	const pageData = getPageContentExperimental(slug);

	if (!pageData) return notFound();

	const { pageContent, pageType } = pageData;

	//================= FOR DEV PROJECTS ==================:
	// const isDevProject: boolean = pageContent.pageType === "devProject";
	// console.log("isDevProject:", isDevProject);

	async function getDevProjectData() {
		if (pageType !== "devProject") return pageContent;
		// Type guard: ensure pageContent is DevProject before accessing 'public'
		if (!("public" in pageContent) || !pageContent.public) return pageContent; // update additional data in projects

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
			{pageType === "field" && (
				<FieldOfInterests field={pageContent as FieldOfInterest} />
			)}
			{pageType === "article" && <Article article={pageContent as IArticle} />}
			{pageType === "project" && <Project project={pageContent} />}
			{pageType === "devProject" && (
				<Project project={await getDevProjectData()} />
			)}
		</>
	);
}
