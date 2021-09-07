<script lang="ts">
	import { scale } from 'svelte/transition';
	// export let toggleShortcut = '';
	let isOpen = false;
	let searchText = '';
	let inputRef: HTMLInputElement;

	function keydown(e: KeyboardEvent) {
		// console.log(e.key, e);
		if (e.metaKey && e.key === 'k') {
			isOpen = !isOpen;
		}
	}

	$: if (isOpen && inputRef) {
		inputRef.focus();
	}
</script>

<svelte:window on:keydown={keydown} />

{#if isOpen}
	<div
		class="absolute inset-0 bg-white/20"
		style="z-index: 2147483647"
		transition:scale={{ duration: 150, start: 0.95 }}
	>
		<div
			role="dialog"
			aria-modal="true"
			class="w-full max-h-96 min-h-0 overflow-auto max-w-xl drop-shadow-2xl mx-auto mt-36 py-1 bg-white rounded-md"
		>
			<input
				type="text"
				placeholder="What do you need?"
				class="w-full text-lg placeholder-gray-500/80 focus:placeholder-gray-500 border-t-0 border-l-0 border-r-0 border-b border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 transition"
				bind:this={inputRef}
				bind:value={searchText}
			/>

			<ul class="px-4">
				<li>
					<div class="text-xs text-gray-600 py-2">Recents</div>
					<ul class="text-sm -mx-2 space-y-1">
						<li>
							<button
								class="w-full flex items-center px-2 py-3 rounded-lg bg-gray-300/25 text-gray-700"
							>
								<svg
									viewBox="0 0 24 24"
									width="24"
									height="24"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									fill="none"
									shape-rendering="geometricPrecision"
									class="mr-2"
								>
									<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
								</svg>
								Toggle Theme
							</button>
						</li>
						<li>
							<button class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500">
								<svg
									viewBox="0 0 24 24"
									width="24"
									height="24"
									stroke="currentColor"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
									fill="none"
									shape-rendering="geometricPrecision"
									class="mr-2"
								>
									<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
									<path d="M14 2v6h6" />
									<path d="M16 13H8" />
									<path d="M16 17H8" />
									<path d="M10 9H8" />
								</svg>
								Search Docs
							</button>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
{/if}
