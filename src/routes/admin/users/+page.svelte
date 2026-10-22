<script lang="ts">
	import { enhance } from '$app/forms';
	let { data } = $props();
</script>

<h1>Manage Users</h1>

<table>
	<thead>
		<tr>
			<th>Username/Email</th>
			<th>Role</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each data.users as user}
			<tr>
				<td>{user.username || user.email}</td>
				<td>{user.role}</td>
				<td>
					{#if user.role === 'user'}
						<form method="POST" action="?/promote" use:enhance>
							<input type="hidden" name="userId" value={user.id} />
							<button type="submit">Promote to Editor</button>
						</form>
					{/if}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
