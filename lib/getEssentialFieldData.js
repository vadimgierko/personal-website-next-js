import { fieldsOfInterests } from "../content/fieldsOfInterests";

export default function getEssentialFieldsData() {
	if (!fieldsOfInterests || !fieldsOfInterests.length) return;
	let essentialData = [];
	fieldsOfInterests.forEach((field) =>
		essentialData.push({
			title: field.title,
			description: field.description,
			link: field.link,
			icon: field.icon,
		})
	);
	return essentialData;
}
