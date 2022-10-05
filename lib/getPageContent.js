import { fieldsOfInterests } from "../content/fieldsOfInterests";

export default function getPageContent(slug) {
	let pages = [];
	// we need to iterate through all of fields
	// to get every field, every field article & every field project,
	// because all of them are independent pages,
	// so need to be in one array:
	fieldsOfInterests.forEach((field) => {
		if (field) {
			pages.push(field);
			if (field.articles) {
				pages.push(field.articles);
			}
			if (field.projects) {
				pages.push(field.projects);
			}
		}
	});

	return pages.find((page) => page.link === "/" + slug);
}
