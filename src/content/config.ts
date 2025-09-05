import { defineCollection, z } from "astro:content";

const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	formattedTitle: z.string().optional().default("⁖ lutefd"),
	date: z.string().transform((str) => new Date(str)),
	isDraft: z.boolean().optional().default(false),
});

const blog = defineCollection({
	type: "content",
	schema: blogSchema,
});

const workBlog = defineCollection({
	type: "content",
	schema: blogSchema,
});

export const collections = { blog, "work-blog": workBlog };
