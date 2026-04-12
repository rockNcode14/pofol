<script lang="ts">
	import '$lib/styles/global.css';
	import { Navbar } from '$lib';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
{@render children()}
