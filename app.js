function swap(array, start, end) {
    const coreValue = array[end];
    let coreIndex = start; 
    for (let i = start; i < end; i++) {
        if (array[i] < coreValue) {
        [array[i], array[coreIndex]] = [array[coreIndex], array[i]];
        coreIndex++;
        }
    }
    [array[coreIndex], array[end]] = [array[end], array[coreIndex]]; 
    return coreIndex;
};

function quickSort(array) {
    newArray = [];
    newArray.push(0);
    newArray.push(array.length - 1);
    
    while (newArray[newArray.length - 1] >= 0) {
    	end = newArray.pop();
        start = newArray.pop();
        coreIndex = swap(array, start, end);
        
        if (coreIndex - 1 > start) {
        	newArray.push(start);
            newArray.push(coreIndex - 1);
		}
        if (coreIndex + 1 < end) {
        	newArray.push(coreIndex + 1);
            newArray.push(end);
        }
    } 
}
myArray = [-11, 9, 3, 8, -2, 13, 4, -6, 5, 7, -3];
quickSort(myArray);
console.log(myArray)
