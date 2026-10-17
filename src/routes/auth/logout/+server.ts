import { auth } from '#lib/server/auth.ts';
import { signOut } from 'better-auth/svelte-kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async (event) => {
	await signOut({ auth, event });
	return new Response(null, { status: 302, headers: { location: '/' } });
};

export const GET: RequestHandler = async (event) => {
	await signOut({ auth, event });
	return new Response(null, { status: 302, headers: { location: '/' } });
};
