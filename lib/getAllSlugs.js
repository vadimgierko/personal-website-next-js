import { fieldsOfInterests } from "../content/fieldsOfInterests";

export default function getAllSlugs() {
	let slugs = [];
	// to get slug we need to remove / from link using slice(1):
	// TODO: consider removing / from all the links in content...
	fieldsOfInterests.forEach(
		(field) => slugs.push({ params: { slug: field.link.slice(1) } })
		// why store slugs in objects {params: {slug: ""}} => see next.js docs
	);
	// TODO: map all content categories (fields, articles, projects) to slugs
	return slugs;
}
