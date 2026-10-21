<script lang="ts">
	import { resolve } from '$app/paths';

	let username = $state('');
	let password = $state('');
	let error = $state('');
	let loading = $state(false);

	async function handleRegister(event: Event) {
		event.preventDefault();
		loading = true;
		error = '';
		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const username = formData.get('username') as string;
		const response = await fetch('/api/auth/sign-up/email', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				email: `${username}@localhost`,
				username: username,
				password: formData.get('password'),
				callbackURL: '/'
			})
		});
		if (!response.ok) {
			const data = await response.json();
			error = data.error?.message || 'Registration failed';
			loading = false;
			return;
		}
		const data = await response.json();
		if (data.redirect && data.url) {
			window.location.href = data.url;
		} else {
			window.location.href = '/';
		}
	}
</script>

<h1>Register</h1>

{#if error}
	<p class="error">{error}</p>
{/if}

<form onsubmit={handleRegister}>
	<div class="form-group">
		<label for="username">Username</label>
		<input
			type="text"
			name="username"
			id="username"
			bind:value={username}
			required
		/>
	</div>
	<div class="form-group">
		<label for="password">Password</label>
		<input
			type="password"
			name="password"
			id="password"
			bind:value={password}
			required
		/>
	</div>
	<button type="submit" disabled={loading}>
		{loading ? 'Registering...' : 'Register'}
	</button>
</form>

<p>
	Already have an account? <a href="{resolve("/auth/login")}">Login</a>
</p>