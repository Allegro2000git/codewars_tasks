/*There was a test in your class and you passed it.
You receive an array with your peers' test scores. Now calculate the average and compare your score*/
function betterThanAverage(classPoints, yourPoints) {
	let average = 0;
	for (let i = 0; i < classPoints.length; i++) {
		average += classPoints[i];
	}
	average = average / classPoints.length;

	return average < yourPoints
}