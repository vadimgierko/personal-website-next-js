import { allPagesContent } from "../allPagesContent";

export default function getAllPagesSlugs() {
	const slugs: string[] = allPagesContent.map((page) =>
		page.pageContent.link.slice(1)
	);

	return slugs;
}
