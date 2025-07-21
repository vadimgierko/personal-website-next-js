// custom components:
import FieldOfInterests from "@/components/organisms/FieldOfInterests";
import Article from "@/components/organisms/Article";
import Project from "@/components/organisms/Project";
// lib:
import getPageContent from "@/lib/getPageContent";
import { Metadata } from "next";

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
	console.log(pageContent.pageType);

	return (
		<>
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
