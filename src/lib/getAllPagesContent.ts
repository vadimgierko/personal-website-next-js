import { Page } from "@/types";
import { fieldsOfInterests } from "../content/fieldsOfInterests";

export default function getAllPagesContent() {
	const pages: Page[] = [];
	// we need to iterate through all of fields
	// to get every field, every field article & every field project,
	// because all of them are independent pages,
	// so need to be in one array:
	fieldsOfInterests.forEach((field) => {
		if (field) {
			pages.push({ pageContent: field, pageType: "field" });
			if (field.articles) {
				field.articles.forEach((article) =>
					pages.push({ pageContent: article, pageType: "article" })
				);
			}
			if (field.projects) {
				if (field.link === "/web-development") {
					field.projects.forEach((project) =>
						pages.push({ pageContent: project, pageType: "devProject" })
					);
				} else {
					field.projects.forEach((project) =>
						pages.push({ pageContent: project, pageType: "project" })
					);
				}
			}
		}
	});

	return pages;
}
