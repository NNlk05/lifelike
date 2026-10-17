<script lang="ts">
	import type { LayoutProps } from './$types';
	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Auth | LIFELIKE</title>
</svelte:head>

<main class="auth-container">
	{@render children()}
</main>

<style>
	.auth-container {
		max-width: 400px;
		margin: 2rem auto;
		padding: 2rem;
		text-align: center;
	}
</style>
