import { allPagesContentArray } from "../allPagesContentArray";
import { allPagesContentObject } from "../allPagesContentObject";

export default function getAllPagesSlugs(from: "array" | "object") {
	const slugs: string[] =
		from === "array"
			? allPagesContentArray.map((page) => page.pageContent.link.slice(1))
			: Object.keys(allPagesContentObject);

	return slugs;
}
