import { fieldsOfInterests } from "../content/fieldsOfInterests";

export default function getEssentialFieldsData() {
	//if (!fieldsOfInterests || !fieldsOfInterests.length) return;

	const essentialData = fieldsOfInterests.map((field) => ({
		title: field.title,
		description: field.description,
		link: field.link,
		icon: field.icon,
	}));

	return essentialData;
}
