export function load() {
	const width = 100;
	const height = 100;
	const pctTargeted = 0.3;
	const grid: Array<Array<boolean>> = [];
	let targetedOnLeft = 0;
	let targetedOnRight = 0;

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

	return {
		width,
		height,
		pctTargeted,
		grid,
		targetedOnLeft,
		targetedOnRight
	};
}
