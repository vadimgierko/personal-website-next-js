import { allPagesContentArray } from "../allPagesContentArray";
import { allPagesContentObject } from "../allPagesContentObject";

export default function getPageContentExperimental({
	slug,
	from,
}: {
	slug: string;
	from: "array" | "object";
}) {
	const pageContent =
		from === "array"
			? allPagesContentArray.find(
					(page) => page.pageContent.link.slice(1) === slug
			  )
			: allPagesContentObject[slug];

	return pageContent;
}
