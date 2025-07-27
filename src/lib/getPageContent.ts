import getAllPagesContent from "./getAllPagesContent";

export default function getPageContent(slug: string) {
	const allPagesContent = getAllPagesContent();
	// const pageContent = allPagesContent
	// 	? allPagesContent.find((page) => page.link === "/" + slug)
	// 	: null;
	const pageContent = allPagesContent.find(
		(page) => page.pageContent.link === "/" + slug
	);
	return pageContent;
}
