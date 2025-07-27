import getAllPagesContent from "./getAllPagesContent";

export default function getAllSlugs() {
	const pages = getAllPagesContent();
	const slugs: {
		params: {
			slug: string;
		};
	}[] = []; // slugs of fieldsOfInterests, articles, projects ( + o-mnie )
	// to get slug we need to remove / from link using slice(1):
	// TODO: consider removing / from all the links in content...
	pages.forEach(
		(page) =>
			slugs.push({
				params: {
					slug: page.pageContent.link.slice(1),
				},
			})
		// why store slugs in objects {params: {slug: ""}} => see next.js docs
	);

	return slugs;
}
