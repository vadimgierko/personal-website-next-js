import { allPagesContent } from "../allPagesContent";

export default function getPageContentExperimental(slug: string) {
	console.log("getPageContentExperimental(slug) RUNS...");

	const pageContent = allPagesContent.find(
		(page) => page.pageContent.link.slice(1) === slug
	);

	return pageContent;
}
