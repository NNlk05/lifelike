import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { db } from '#lib/server/db/index.ts';
import { user } from '#lib/server/db/auth.schema';
import { eq } from 'drizzle-orm';
import { requireAdmin } from '#lib/server/auth-helpers.ts';

export const load: PageServerLoad = async (event) => {
	const currentUser = await requireAdmin(event);
	const users = await db.select().from(user).orderBy(user.createdAt);
	return { currentUser, users };
};

export const actions: Actions = {
	promote: async (event) => {
		const admin = await requireAdmin(event);
		const formData = await event.request.formData();
		const userId = formData.get('userId') as string;
		if (!userId) return fail(400);
		await db.update(user).set({ role: 'editor' }).where(eq(user.id, userId));
		return { success: true };
	}
};
