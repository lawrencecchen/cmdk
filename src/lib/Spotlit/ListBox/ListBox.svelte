<script lang="ts">
	import { onMount } from 'svelte';
	import Highlight from './Highlight.svelte';
	import { activeDescendantIndex, activeOption, options } from './store';

	export let cycle = false;
	export let label = '';
	let className = '';

	let listboxRef: HTMLDivElement;

	onMount(() => {
		$options = listboxRef.querySelectorAll('[role=option]');
	});

	function next() {
		if (cycle) {
			$activeDescendantIndex = ($activeDescendantIndex + 1) % $options.length;
		} else {
			$activeDescendantIndex = Math.min($activeDescendantIndex + 1, $options.length - 1);
		}
	}

	function prev() {
		if (cycle) {
			$activeDescendantIndex = ($options.length + $activeDescendantIndex - 1) % $options.length;
		} else {
			$activeDescendantIndex = Math.max($activeDescendantIndex - 1, 0);
		}
	}

	function keydown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowUp':
				prev();
				break;
			case 'p':
				e.ctrlKey && prev();
				break;
			case 'ArrowDown':
				next();
				break;
			case 'n':
				e.ctrlKey && next();
				break;
		}
	}

	export { className as class };
</script>

<svelte:window on:keydown={keydown} />

<div
	bind:this={listboxRef}
	class="custom-scrollbar {className}"
	role="listbox"
	tabindex="0"
	aria-label={label}
	aria-activedescendant=""
>
	{#if $activeOption && listboxRef}
		<Highlight activeOption={$activeOption} {listboxRef} />
	{/if}
	<slot />
</div>

<style>
	.custom-scrollbar::-webkit-scrollbar {
		width: 3px;
	}

	.custom-scrollbar::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0);
	}
	.custom-scrollbar::-webkit-scrollbar-thumb {
		background: rgba(212, 212, 212, 0.521);
	}
</style>
