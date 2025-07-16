import { fieldsOfInterests } from "../content/fieldsOfInterests";

export default function getAllPagesContent() {
	let pages = [];
	// we need to iterate through all of fields
	// to get every field, every field article & every field project,
	// because all of them are independent pages,
	// so need to be in one array:
	fieldsOfInterests.forEach((field) => {
		if (field) {
			pages.push({ ...field, pageType: "field" });
			if (field.articles) {
				field.articles.forEach((article) =>
					pages.push({ ...article, pageType: "article" })
				);
			}
			if (field.projects) {
				if (field.link === "/web-development") {
					field.projects.forEach((project) =>
						pages.push({ ...project, pageType: "devProject" })
					);
				} else {
					field.projects.forEach((project) =>
						pages.push({ ...project, pageType: "project" })
					);
				}
			}
		}
	});

	return pages;
}
