<script lang="ts">
	//

	import Spotlit from '$lib/Spotlit/Spotlit.svelte';
</script>

<svelte:head>
	<title>Spotlit</title>
</svelte:head>

<div class="flex items-center p-4 space-x-1">
	<kbd
		class="text-base font-mono rounded border bg-gray-100 text-gray-600 grid place-items-center w-6 h-6"
	>
		⌘
	</kbd>
	<kbd
		class="text-sm font-mono rounded border bg-gray-100 text-gray-600 grid place-items-center w-6 h-6"
	>
		K
	</kbd>
	<span class="text-gray-700">for happiness</span>
</div>

<Spotlit />
