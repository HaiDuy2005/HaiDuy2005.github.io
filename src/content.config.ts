import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Hải Duy'),
    category: z.string(),
    tags: z.array(z.string()),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Web', 'Cloud', 'AI', 'Other']),
    tags: z.array(z.string()),
    thumbnail: z.string().optional(),
    problem: z.string(),
    role: z.string(),
    githubUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    status: z.enum(['Completed', 'In Progress', 'Archived']).default('Completed'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { posts, projects };
