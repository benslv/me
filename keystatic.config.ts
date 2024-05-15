import { collection, config, fields } from "@keystatic/core";

export default config({
	storage: {
		kind: "local",
	},
	collections: {
		posts: collection({
			label: "Posts",
			slugField: "title",
			path: "app/content/posts/*",
			format: { contentField: "body" },
			schema: {
				title: fields.slug({ name: { label: "Title" } }),
				publishedDate: fields.date({ label: "Published Date" }),
				description: fields.text({ label: "Description" }),
				tags: fields.array(fields.text({ label: "Tag" })),
				body: fields.document({
					label: "Body",
				}),
			},
		}),
	},
});
