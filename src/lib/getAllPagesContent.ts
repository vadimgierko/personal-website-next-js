import { Page } from "@/types";
import { fieldsOfInterests } from "../content/fieldsOfInterests";

function getAllPagesContentArray(): Page[] {
	const pagesArray: Page[] = [];
	// we need to iterate through all of fields
	// to get every field, every field article & every field project,
	// because all of them are independent pages,
	// so need to be in one array:
	fieldsOfInterests.forEach((field) => {
		if (field) {
			pagesArray.push({ pageContent: field, pageType: "field" });
			if (field.articles) {
				field.articles.forEach((article) =>
					pagesArray.push({ pageContent: article, pageType: "article" })
				);
			}
			if (field.projects) {
				field.projects.forEach((project) =>
					pagesArray.push({
						pageContent: project,
						pageType:
							field.link === "/web-development" ? "devProject" : "project",
					})
				);
			}
		}
	});

	return pagesArray;
}

export function getAllPagesContentObject(): {
	[key: string]: Page;
} {
	const pagesObject: { [key: string]: Page } = {};

	// we need to iterate through all of fields
	// to get every field, every field article & every field project,
	// because all of them are independent pages
	fieldsOfInterests.forEach((field) => {
		if (field) {
			//pagesArray.push({ pageContent: field, pageType: "field" });
			pagesObject[field.link.slice(1)] = {
				pageContent: field,
				pageType: "field",
			};

			if (field.articles) {
				field.articles.forEach(
					(article) =>
						//pagesArray.push({ pageContent: article, pageType: "article" })
						(pagesObject[article.link.slice(1)] = {
							pageContent: article,
							pageType: "article",
						})
				);
			}
			if (field.projects) {
				field.projects.forEach(
					(project) =>
						//pagesArray.push({ pageContent: project, pageType: "devProject" })
						(pagesObject[project.link.slice(1)] = {
							pageContent: project,
							pageType:
								field.link === "/web-development" ? "devProject" : "project",
						})
				);
			}
		}
	});

	return pagesObject;
}
