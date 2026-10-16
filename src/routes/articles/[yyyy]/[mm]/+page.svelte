<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Articles from {data.year}-{String(data.month).padStart(2, '0')}</h1>

{#each data.articles as article} <!-- TODO: add key-->
	<h2>{article.title}</h2>
{/each}
