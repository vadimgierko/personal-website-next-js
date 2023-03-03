export default {
	name: "home",
	type: "document",
	title: "Home",
	fields: [
		{
			name: "title",
			type: "string",
			title: "Title",
		},
		{
			name: "description",
			type: "text",
			title: "Description",
		},
		{
			name: "avatar",
			title: "Avatar",
			type: "image",
		},
		{
			name: "fieldsOfInterests",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "fieldOfInterests" }],
				},
			],
		},
		// meta:
		{
			name: "metaTitle",
			type: "string",
			title: "Meta title",
			options: {
				maxLength: 60,
			},
		},
		{
			name: "metaDescription",
			type: "string",
			title: "Meta description",
			options: {
				maxLength: 160,
			},
		},
		// og:
		{
			name: "ogTitle",
			type: "string",
			title: "OG title",
			options: {
				maxLength: 60,
			},
		},
		{
			name: "ogDescription",
			type: "string",
			title: "OG description",
			options: {
				maxLength: 160,
			},
		},
		{
			name: "ogImage",
			type: "image",
			title: "OG image",
		},
	],
};
