<script lang="ts">
	import { activeOption } from './store';

	let className = '';
	let optionRef: HTMLButtonElement;
	export let activeClass = '';

	$: highlighted = $activeOption === optionRef;

	// function mousemove() {
	// 	$activeDescendantIndex = $optionsList.indexOf(optionRef);
	// }

	// function focus() {
	// 	//
	// }

	export { className as class };
</script>

<button role="option" class="{className} {highlighted ? activeClass : ''}" bind:this={optionRef}>
	<slot />
</button>
