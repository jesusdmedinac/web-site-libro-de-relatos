import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const relatos = defineCollection({
	// Load Markdown and MDX files in the `src/content/relatos/` directory.
	loader: glob({ base: './src/content/relatos', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const testimonios = defineCollection({
	loader: glob({ base: './src/content/testimonios', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

export const collections = { relatos, testimonios };
