<script lang="ts">
	import { scale } from 'svelte/transition';
	import ListBox from './ListBox/ListBox.svelte';
	import ListBoxOption from './ListBox/ListBoxOption.svelte';
	// export let toggleShortcut = '';

	let isOpen = false;
	let searchText = '';
	let inputRef: HTMLInputElement;

	function keydown(e: KeyboardEvent) {
		if (e.metaKey && e.key === 'k') {
			isOpen = !isOpen;
		}
		if (e.key === 'Escape') {
			isOpen = false;
		}
	}

	$: if (isOpen && inputRef) {
		inputRef.focus();
	}
</script>

<svelte:window on:keydown={keydown} />

{#if isOpen}
	<div
		class="absolute inset-0 bg-white/40"
		style="z-index: 2147483647"
		transition:scale={{ duration: 75, start: 0.95 }}
		on:click={() => (isOpen = false)}
	>
		<div
			role="dialog"
			aria-modal="true"
			class="flex flex-col cursor-auto w-full max-h-[26rem] max-w-xl border border-gray-100/50 drop-shadow-2xl mx-auto mt-36 pt-1 bg-white rounded-md"
			on:click|stopPropagation
		>
			<input
				type="text"
				placeholder="What do you need?"
				class="w-full text-lg placeholder-gray-500/80 focus:placeholder-gray-500 border-t-0 border-l-0 border-r-0 border-b border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 transition"
				bind:this={inputRef}
				bind:value={searchText}
			/>

			<ListBox class="relative flex-grow max-h-full overflow-auto px-4 space-y-2 pt-1 pb-4 ">
				<div
					class="block h-4 pointer-events-none fixed inset-x-0 bottom-0 bg-gradient-to-t from-white"
				/>
				<dl>
					<dt class="text-xs text-gray-600 pb-1">Recents</dt>
					<dd class="text-sm -mx-2 space-y-1">
						<ListBoxOption
							class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500 hover:bg-gray-300/25 duration-75 transition"
							activeClass="text-gray-900"
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
								class="mr-2 opacity-80"
							>
								<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
							</svg>
							Toggle Theme
						</ListBoxOption>
						<ListBoxOption
							class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500 hover:bg-gray-300/25 duration-75 transition"
							activeClass="text-gray-900"
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
								class="mr-2 opacity-80"
							>
								<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
								<path d="M14 2v6h6" />
								<path d="M16 13H8" />
								<path d="M16 17H8" />
								<path d="M10 9H8" />
							</svg>
							Search Docs
						</ListBoxOption>
					</dd>
				</dl>
				<dl>
					<dt class="text-xs text-gray-600 pb-1">Help</dt>
					<dd class="text-sm -mx-2 space-y-1">
						<ListBoxOption
							class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500 hover:bg-gray-300/25 duration-75 transition"
							activeClass="text-gray-900"
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
								class="mr-2 opacity-80"
							>
								<path
									d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
								/>
							</svg>
							Send Feedback
						</ListBoxOption>
						<ListBoxOption
							class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500 hover:bg-gray-300/25 duration-75 transition"
							activeClass="text-gray-900"
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
								class="mr-2 opacity-80"
							>
								<path
									d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
								/>
								<path d="M22 6l-10 7L2 6" />
							</svg>
							Contact Support
						</ListBoxOption>
					</dd>
				</dl>
				<dl>
					<dt class="text-xs text-gray-600 pb-1">General</dt>
					<dd class="text-sm -mx-2 space-y-1">
						<ListBoxOption
							class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500 hover:bg-gray-300/25 duration-75 transition"
							activeClass="text-gray-900"
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
								class="mr-2 opacity-80"
							>
								<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
							</svg>
							Toggle Theme
						</ListBoxOption>
					</dd>
				</dl>
				<dl>
					<dt class="text-xs text-gray-600 pb-1">Account</dt>
					<dd class="text-sm -mx-2 space-y-1">
						<ListBoxOption
							class="w-full flex items-center px-2 py-3 rounded-lg text-gray-500 hover:bg-gray-300/25 duration-75 transition"
							activeClass="text-gray-900"
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
								class="mr-2 opacity-80"
							>
								<path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
								<path d="M16 17l5-5-5-5" />
								<path d="M21 12H9" />
							</svg>
							Sign Out
						</ListBoxOption>
					</dd>
				</dl>
			</ListBox>
		</div>
	</div>
{/if}
