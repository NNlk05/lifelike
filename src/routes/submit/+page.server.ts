import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { auth } from '#lib/server/auth.ts';
import { db } from '#lib/server/db/index.ts';
import { article } from '#lib/server/db/schema';

export const load: PageServerLoad = async (event) => {
	const session = await auth.api.getSession({ headers: event.request.headers });
	if (!session?.user) {
		throw redirect(302, '/auth/login');
	}
	return { user: session.user };
};

export const actions: Actions = {
	default: async (event) => {
		const session = await auth.api.getSession({ headers: event.request.headers });
		if (!session?.user) {
			throw redirect(302, '/auth/login');
		}

		const formData = await event.request.formData();
		const title = formData.get('title') as string;
		const content = formData.get('content') as string;

		if (!title?.trim()) {
			return fail(400, { error: 'Title is required' });
		}

		try {
			await db.insert(article).values({
				title: title.trim(),
				content: content?.trim() || '',
				userId: session.user.id,
				status: 'submitted'
			});
			throw redirect(302, '/dashboard');
		} catch (err: any) {
			if (err?.status === 302) throw err;
			return fail(500, { error: 'Failed to submit article' });
		}
	}
};
