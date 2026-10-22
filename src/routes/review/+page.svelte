<script lang="ts">
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<h1>Review Articles</h1>

{#if data.articles && data.articles.length > 0}
	{#each data.articles as article}
		<div class="article-review">
			<h2>{article.title}</h2>
			<p>{article.content}</p>
			<div class="actions">
				<form method="POST" action="?/approve" use:enhance>
					<input type="hidden" name="id" value={article.id} />
					<button type="submit">Approve</button>
				</form>
				<form method="POST" action="?/reject" use:enhance>
					<input type="hidden" name="id" value={article.id} />
					<button type="submit">Reject</button>
				</form>
			</div>
		</div>
		<hr />
	{/each}
{:else}
	<p>No articles to review.</p>
{/if}
