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
import { FieldName } from "@/types";
import { newContent } from "@/scripts/new-content";
import { NewDevProject } from "@/scripts";

type SlugPageParams = { slug: string };

export async function generateMetadata({
	params,
}: {
	params: Promise<SlugPageParams>;
}): Promise<Metadata> {
	const slug = (await params).slug;
	// BEFORE:
	// const pageData = getPageContentExperimental({ slug, from: "array" });
	// =>
	// const pageData = getPageContentExperimental({ slug, from: "object" });

	//=== ❗❗❗ 👇TODO: EXTRACT AS getPageMetadata(slug)👇 ===❗❗❗
	const pageData = newContent.pages[slug];

	if (!pageData) return {};

	const pageMetadata =
		pageData.pageType === "field"
			? newContent.fields[slug as FieldName].metadata
			: newContent.items[pageData.props.itemsType][slug].metadata;
	//=== ❗❗❗ 👆TODO: EXTRACT AS getPageMetadata(slug)👆 ===❗❗❗

	if (!pageMetadata) return {};

	return {
		title: `${pageMetadata.title} | Vadim Gierko`,
		description: `${pageMetadata.description}`,
		openGraph: {
			title: `${pageMetadata.ogTitle || pageMetadata.title} | Vadim Gierko`,
			description: `${pageMetadata.ogDescription || pageMetadata.description}`,
			images: pageMetadata.ogImage
				? pageMetadata.ogImage
				: pageMetadata.img
				? pageMetadata.img.src
				: "https://www.vadimgierko.com/vadim-gerko-zdjecie-cv.jpg",
			type:
				pageData.pageType === "item" && pageData.props.itemType === "article"
					? "article"
					: "website",
			url: "https://www.vadimgierko.com" + pageMetadata.link,
		},
	};
}

export async function generateStaticParams() {
	// BEFORE:
	// const slugs = getAllPagesSlugs("array");
	// =>
	// const slugs = getAllPagesSlugs("object");

	//=== ❗❗❗ 👇TODO: EXTRACT AS getAllPagesSlugs👇 ===❗❗❗
	const slugs = Object.keys(newContent.pages);
	//=== ❗❗❗ 👆TODO: EXTRACT AS getAllPagesSlugs👆 ===❗❗❗

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
	// BEFORE:
	// const pageData = getPageContentExperimental({ slug, from: "array" });
	// =>
	// const pageData = getPageContentExperimental({ slug, from: "object" });

	//=== ❗❗❗ 👇TODO: EXTRACT AS getPageMetadata(slug)👇 ===❗❗❗
	const pageData = newContent.pages[slug];

	if (!pageData) return notFound();

	const page =
		pageData.pageType === "field"
			? newContent.fields[slug as FieldName]
			: newContent.items[pageData.props.itemsType][slug];
	//=== ❗❗❗ 👆TODO: EXTRACT AS getPageMetadata(slug)👆 ===❗❗❗

	const {} = page;

	//================= FOR DEV PROJECTS ==================:
	// const isDevProject: boolean = pageContent.pageType === "devProject";
	// console.log("isDevProject:", isDevProject);

	async function getDevProjectData(
		devProject: NewDevProject
	): Promise<NewDevProject> {
		// FETCH REPO DATA FROM GITHUB ONLY IF PROJECT IS PUBLIC:
		const repoData = await getRepoDataFromGitHub(devProject.props.repoName);
		const readmeMarkdown = await getRepoReadmeFileContentFromGitHub(
			repoData.name
		);
		await checkGithubApiTokenRateLimits();

		// replace readme's h1 with h2:
		const fixedMarkdown = readmeMarkdown.replace("#", "##");

		const updatedDevProject: NewDevProject = {
			fieldName: "web-development",
			itemType: "devProject",
			metadata: {
				...devProject.metadata,
				description: repoData.description,
			},
			props: {
				...devProject.props,
				content: fixedMarkdown,
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
			},
		};

		return updatedDevProject;
	}

	if (pageData.pageType === "field")
		return <FieldOfInterests field={newContent.fields[pageData.slug]} />;

	switch (pageData.props.itemType) {
		case "article":
			return <Article article={newContent.items["articles"][pageData.slug]} />;
		case "project":
			return <Project project={newContent.items["projects"][pageData.slug]} />;
		case "devProject":
			return (
				<Project
					project={await getDevProjectData(
						newContent.items["projects"][pageData.slug] as NewDevProject
					)}
				/>
			);
	}
}
