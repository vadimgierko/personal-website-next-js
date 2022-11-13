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
		{
			name: "icon",
			type: "string",
			title: "Icon name (from my icons list)",
		},
		{
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		},
	],
	orderings: [
		{
			title: "Manual order",
			name: "manualOrder",
			by: [{ field: "order", direction: "asc" }],
		},
	],
};
