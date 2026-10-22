<script lang="ts">
	import { enhance } from '$app/forms';
	let { form } = $props();
</script>

<h1>Submit Article</h1>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

<form method="POST" use:enhance>
	<div class="form-group">
		<label for="title">Title</label>
		<input type="text" name="title" id="title" required />
	</div>
	<div class="form-group">
		<label for="content">Content</label>
		<textarea name="content" id="content" rows="10"></textarea>
	</div>
	<button type="submit">Submit</button>
</form>
