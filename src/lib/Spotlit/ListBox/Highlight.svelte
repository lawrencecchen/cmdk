<script lang="ts">
	import { beforeUpdate, onDestroy, onMount } from 'svelte';
	import { lastScrollTop } from './store';

	export let activeOption: HTMLElement;
	export let listboxRef: HTMLElement;

	$: ({ height } = activeOption.getBoundingClientRect());
	$: y = activeOption.offsetTop;
	$: isOutOfView = y + height > listboxRef.clientHeight || y < listboxRef.scrollTop;

	let isMounted = false;

	$: if (isMounted && isOutOfView) {
		activeOption.scrollIntoView({ behavior: 'smooth', block: 'center' });
	}

	onMount(() => {
		console.log($lastScrollTop);
		$lastScrollTop && listboxRef.scrollBy({ top: $lastScrollTop, behavior: 'auto' });
		isMounted = true;
		// $lastScrollTop && listboxRef.scrollBy({ top: $lastScrollTop, behavior: 'auto' });
		// isOutOfView && activeOption.scrollIntoView({ behavior: 'auto', block: 'center' });
	});

	onDestroy(() => {
		// $lastScrollTop = listboxRef.scrollTop;
	});

	// beforeUpdate(() => {
	// 	isOutOfView && activeOption.scrollIntoView({ behavior: 'auto', block: 'center' });
	// });
</script>

<div
	class="bg-gray-300/25 text-gray-700 absolute top-0 inset-x-2 transition rounded-lg pointer-events-none"
	style="height: {height}px; transform: translateY({y}px)"
/>
