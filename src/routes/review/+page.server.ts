import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { auth } from '#lib/server/auth.ts';
import { db } from '#lib/server/db/index.ts';
import { article } from '#lib/server/db/schema';
import { eq } from 'drizzle-orm';
import { requireEditor } from '#lib/server/auth-helpers.ts';

export const load: PageServerLoad = async (event) => {
	const user = await requireEditor(event);
	const articles = await db
		.select()
		.from(article)
		.where(eq(article.status, 'submitted'))
		.orderBy(article.createdAt);
	return { user, articles };
};

export const actions: Actions = {
	approve: async (event) => {
		const user = await requireEditor(event);
		const formData = await event.request.formData();
		const id = formData.get('id');
		if (!id) return fail(400);
		await db
			.update(article)
			.set({ status: 'approved', reviewedById: user.id, reviewedAt: new Date() })
			.where(eq(article.id, Number(id)));
		return { success: true };
	},
	reject: async (event) => {
		const user = await requireEditor(event);
		const formData = await event.request.formData();
		const id = formData.get('id');
		if (!id) return fail(400);
		await db
			.update(article)
			.set({ status: 'rejected', reviewedById: user.id, reviewedAt: new Date() })
			.where(eq(article.id, Number(id)));
		return { success: true };
	}
};
