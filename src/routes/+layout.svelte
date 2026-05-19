<script lang="ts">
	import '$lib/styles/global.css';
	import { Navbar } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>이원기의 포트폴리오</title>
</svelte:head>

<Navbar />
{@render children()}
