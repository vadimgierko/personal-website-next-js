import getAllPagesContent from "./getAllPagesContent";

export default function getPageContent(slug) {
	const allPagesContent = getAllPagesContent();
	const pageContent = allPagesContent
		? allPagesContent.find((page) => page.link === "/" + slug)
		: null;
	return pageContent;
}
