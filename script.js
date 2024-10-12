/*Make a function that returns the value multiplied by 50 and increased by 6. 
If the value entered is a string it should return "Error".*/

function problem(x) {
	let res;
	if (x === String(x)) {
		return "Error"
	} else {
		res = x * 50 + 6;
	}
	return res;
}