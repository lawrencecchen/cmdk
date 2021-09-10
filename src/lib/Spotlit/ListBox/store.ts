import { writable, derived } from 'svelte/store';

export const options = writable<NodeListOf<Element>>(null);
export const optionsList = derived(options, ($options) => $options && [...$options]);
export const activeDescendantIndex = writable(0);
export const activeOption = derived(
	[options, activeDescendantIndex],
	([$options, $activeDescendentIndex]) => $options?.[$activeDescendentIndex] as HTMLElement
);
export const lastScrollTop = writable(null);
