<script lang="ts">
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #ffffff;
		font-family: 'Courier Prime', 'Courier New', Courier, monospace;
		font-size: 1rem;
		line-height: 1.4;
		color: #000;
		
		display: grid;;
		place-items: center;
		
		text-align: justify;
		hyphens: auto;
		text-wrap: pretty;
	}
	
	main {
		max-width: 67ch; 
	}

	header {
		text-align: center;
		border: 1px solid #000;
		margin: 1ch;
		padding: 1ch;
		font-size: 1.25rem;
		/*max-width: 65ch;*/
	}
	
	.wordmark {
		width: 100%;
		overflow: hidden;
	}
	
	.wordmark pre {
		margin: 3rem;
		text-align: center;
	}

	.issue-date-row {
		display: flex;
		justify-content: space-between;
		font-size: 0.8rem;
	}

	.issue-date-row .left {
		text-align: left;
	}

	.issue-date-row .right {
		text-align: right;
	}

	.credits {
		margin-top: 1.5rem;
		margin-bottom: 1.5rem;
	}

	p {
		text-align: justify;
		margin-bottom: 12px;
		line-height: 1.5;
	}
	
	.divider {
		border-bottom: 1px solid #000;
		margin: 20px 0;
	}
</style>
</svelte:head>
<header>
	A MONTHLY NEWSLETTER FOR SUBSCRIBERS OF THE JOHN CONWAY'S GAME OF LIFE AND RELATED CELLULAR AUTOMATA
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
	<div class="left">NUMBER 1</div>
	<div class="right">JAN 2027</div>
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