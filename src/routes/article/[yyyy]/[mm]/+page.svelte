<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Articles from {data.year}-{String(data.month).padStart(2, '0')}</h1>

{#each data.articles as article} <!-- TODO: add key-->
	{#if data.articles.length == 0}
		<h2>No articles found!</h2>
	{:else}
	  <h2>{article.title}</h2>
	{/if}
{/each}
