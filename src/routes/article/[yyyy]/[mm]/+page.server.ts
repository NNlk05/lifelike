import { error } from '@sveltejs/kit';
import { and, gte, lt, desc } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { db } from '#lib/server/db/index.ts';
import { article } from '#lib/server/db/schema';

export const load: PageServerLoad = async ({ params }) => {
	const year = Number(params.yyyy);
	const month = Number(params.mm);

	if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12) {
		error(404, 'Invalid article date');
	}

	const articles = await getArticlesForMonth(year, month);

	return { year, month, articles };
};

async function getArticlesForMonth(year: number, month: number) {
	const start = new Date(Date.UTC(year, month - 1, 1));
	const end = new Date(Date.UTC(year, month, 1));

	return db
		.select({
			id: article.id,
			title: article.title,
			createdAt: article.createdAt
		})
		.from(article)
		.where(and(gte(article.createdAt, start), lt(article.createdAt, end)))
		.orderBy(desc(article.createdAt));
}
