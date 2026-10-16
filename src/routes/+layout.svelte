<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();

	const now = new Date();
	const options = { month: 'short', year: 'numeric', timeZone: 'UTC' };
	let formattedDate = new Intl.DateTimeFormat('en-US', options).format(now);
	formattedDate = formattedDate.toUpperCase();
</script>

<svelte:head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="/css/style.css"/>
</svelte:head>
<header>
	A MONTHLY NEWSLETTER FOR SUBSCRIBERS OF JOHN CONWAY'S GAME OF LIFE AND RELATED CELLULAR AUTOMATA
	<div class="wordmark">
	<pre>
O     OOOOO OOOOO OOOOO O     OOOOO O   O OOOOO
O       O   O     O     O       O   O  O  O    
O       O   OOO   OOO   O       O   OOO   OOO  
O       O   O     O     O       O   O  O  O    
OOOOO OOOOO O     OOOOO OOOOO OOOOO O   O OOOOO
	</pre>
</div>

<div class="issue-date-row">
	<div class="left">NUMBER 0</div>
	<div class="right">{formattedDate}</div>
</div>
</header>
<div class="credits">
	<div class="publisher">Chief Editor and Publisher - NNlk05</div>
	<!-- More credits here if needed -->
</div>
<main>
	{@render children()}
</main>
<footer>

</footer>