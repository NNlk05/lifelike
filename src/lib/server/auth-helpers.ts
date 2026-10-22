import { redirect } from '@sveltejs/kit';
import { auth } from '#lib/server/auth.ts';

export async function getSessionUser(event: any) {
	const session = await auth.api.getSession({ headers: event.request.headers });
	if (!session) {
		throw redirect(302, '/auth/login');
	}
	return session.user;
}

export async function requireEditor(event: any) {
	const user = await getSessionUser(event);
	if (user.role !== 'editor' && user.role !== 'admin') {
		throw redirect(302, '/');
	}
	return user;
}

export async function requireAdmin(event: any) {
	const user = await getSessionUser(event);
	if (user.role !== 'admin') {
		throw redirect(302, '/');
	}
	return user;
}
