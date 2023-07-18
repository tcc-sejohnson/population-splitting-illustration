<script lang="ts">
	import { invalidateAll } from '$app/navigation';

	export let data;
	$: ({ width, height, pctTargeted, grid, targetedOnLeft, targetedOnRight } = data);
</script>

<div class="wrapper">
	<div class="legend">
		<p>Percentage targeted: {pctTargeted * 100}%</p>
		<p>Population: {width * height}</p>
		<p>Number targeted: {width * height * pctTargeted}</p>
		<p>Number targeted on left: {targetedOnLeft}</p>
		<p>Number targeted on right: {targetedOnRight}</p>
		<button on:click={() => invalidateAll()}>Reset population</button>
	</div>
	<svg viewBox="0 0 {width} {height}">
		{#each grid as row, x}
			{#each row as targeted, y}
				<rect width="1" height="1" fill={targeted ? 'red' : 'white'} {x} {y} />
			{/each}
		{/each}
		<line x1={width / 2} x2={width / 2} y1="0" y2={height} stroke="black" stroke-width="1" />
	</svg>
</div>

<style>
	.wrapper {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
	}

	.legend {
		display: flex;
		flex-direction: column;
		padding: 16px;
		max-width: max-content;
		gap: 4px;
	}

	p {
		margin: 0;
	}
</style>
