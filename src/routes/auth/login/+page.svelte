<script lang="ts">
	import { resolve } from "$app/paths";

	let username = $state('');
	let password = $state('');
	let error = $state('');
	let loading = $state(false);

	async function handleLogin(event: Event) {
		event.preventDefault();
		loading = true;
		error = '';
		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const response = await fetch('/api/auth/sign-in/username', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			credentials: 'include',
			body: JSON.stringify({
				username: formData.get('username'),
				password: formData.get('password'),
				callbackURL: '/'
			})
		});
		if (!response.ok) {
			const data = await response.json();
			error = data.error?.message || 'Login failed';
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

<h1>Login</h1>

{#if error}
	<p class="error">{error}</p>
{/if}

<form onsubmit={handleLogin}>
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
		{loading ? 'Logging in...' : 'Login'}
	</button>
</form>

<p>
	Don't have an account? <a href={resolve("/auth/register")}>Register</a>
</p>