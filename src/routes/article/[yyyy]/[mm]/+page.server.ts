import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const year = Number(params.yyyy);
	const month = Number(params.mm);

	if (
		!Number.isInteger(year) ||
		!Number.isInteger(month) ||
		month < 1 ||
		month > 12
	) {
		error(404, 'Invalid article date');
	}

	const articles = await getArticlesForMonth(year, month);

	return { year, month, articles };
};
async function getArticlesForMonth(year: number, month: number) {
	return []; //TODO: db
}
