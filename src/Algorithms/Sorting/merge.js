//merge the two arrays: left and right
function merge(left, right) {
	let resultArray = [];
	let leftIndex = 0;
	let rightIndex = 0;

	//We will concatenate the values into the resultArray in order
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			resultArray.push(left[leftIndex]);
			leftIndex++; //move left array cursor
		} else {
			resultArray.push(right[rightIndex]);
			rightIndex++; //move right array cursor
		}
	}

	//We will concatenate here because there will be one element remaining from either the left OR the right
	return resultArray
		.concat(left.slice(leftIndex))
		.concat(right.slice(rightIndex));
}

//Here is our main function where we will be implementing Merge Sort with recursion
const mergeAlgorithm = (array) => {
	//If the array only has one element or is empty, there is no need to sort
	if (array.length <= 1) {
		return array;
	}

	//In order to divide the array in half, we need to figure out the middle
	const middle = Math.floor(array.length / 2);

	//This is where we will be dividing the array into left and right
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	//Use recursion to combine the left and right
	return merge(mergeAlgorithm(left), mergeAlgorithm(right));
};

export default mergeAlgorithm;
