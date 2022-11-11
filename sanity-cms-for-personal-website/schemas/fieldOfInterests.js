export default {
	name: "fieldOfInterests",
	type: "document",
	title: "Field of interests",
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
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
		},
	],
};
