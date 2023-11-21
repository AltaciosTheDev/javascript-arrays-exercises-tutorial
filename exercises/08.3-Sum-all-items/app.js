function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(let i=0; i<theArray.length; i++){
		let item = theArray[i]
		total += item
	}
	return total;
}
console.log(sumTheElements([7,13,34,0]))