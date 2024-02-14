import { z } from 'zod';
import type { CollectionEntry } from 'astro:content';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export function formatDate(date: Date) {
	return date.toLocaleDateString('pt-BR', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
}

export function sortPosts(
	posts: CollectionEntry<'blog'>[]
): CollectionEntry<'blog'>[] {
	return posts.sort((a, b) => {
		return (
			new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
		);
	});
}
