<script lang="ts">
	const width = 100;
	const height = 100;
	const pctTargeted = 0.3;

	let grid: Array<Array<boolean>>;
	let targetedOnLeft = 0;
	let targetedOnRight = 0;

	function reset() {
		grid = [];
		targetedOnLeft = 0;
		targetedOnRight = 0;
		for (let i = 0; i < height; i++) {
			grid[i] = [];
			for (let j = 0; j < width; j++) {
				const targeted = Math.random() <= pctTargeted;
				grid[i][j] = targeted;
				if (j < width / 2 && targeted) {
					targetedOnLeft++;
				} else if (targeted) {
					targetedOnRight++;
				}
			}
		}
	}

	reset();
</script>

<div class="wrapper">
	<div class="legend">
		<p>Percentage targeted: {pctTargeted * 100}%</p>
		<p>Population: {width * height}</p>
		<p>Number targeted: {width * height * pctTargeted}</p>
		<p>Number targeted on left: {targetedOnLeft}</p>
		<p>Number targeted on right: {targetedOnRight}</p>
		<button on:click={reset}>Reset population</button>
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
