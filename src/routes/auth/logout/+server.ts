import { auth } from '#lib/server/auth.ts';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	await auth.api.signOut({
		headers: event.request.headers
	});
	return new Response(null, { status: 302, headers: { location: '/' } });
};

export const GET: RequestHandler = async (event) => {
	await auth.api.signOut({
		headers: event.request.headers
	});
	return new Response(null, { status: 302, headers: { location: '/' } });
};
