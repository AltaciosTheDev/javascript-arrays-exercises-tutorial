let chunkOne = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunkTwo = [ 'Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas' ];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = [...firstArray, ...secondArray]
    // Your code here
    let newArray2 = [].concat(chunkOne, chunkTwo)
    return newArray2
}

console.log(mergeArrays(chunkOne, chunkTwo));
