<script lang="ts">
	import DemoLinks from './demo/DemoLinks.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

{@render children()}
<DemoLinks />
