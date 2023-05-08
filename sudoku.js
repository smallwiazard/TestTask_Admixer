function hasDuplicates(arr) {                     // check if array has ducpicates
    return new Set(arr).size !== arr.length;
}

function Check_Solution(solution) {    // check if sudoku solved correctly
	// variebeles for vertical line and square
	let vertical_line = [];
	let square = [];
	// check horizontal lines
	for(let i = 0; i <= 8; i++) {
		if(hasDuplicates(solution[i]) || solution[i].includes(0)) {
			return false;
			break;
		}
	}
	// check vertical lines
	for(let i = 0; i <=8; i++) {
		for(let j = 0; j <=8; j++) {
			if(j == i) 	{vertical_line.push(j[i]);}
		if(hasDuplicates(vertical_line)) {
			return false;
			break;
		}
		vertical_line = []
    }
}
    // check squares
	let step = 0;
	for(let j = 0; j <= 2; j++) {
    for(let i = 0; i <= 8; i++) {
    	let slice = solution.slice(step, step + 3);
    	square.push(slice);
    	slice = [];
    	if((i+1)%3 == 0) {
    		square.flat();
    		if(hasDuplicates(square)) {
    			return false;
    			break;
    			}
    		}
    	
    	}
    	step = step + 3;
	}
    return true;
}

sudoku = [
  [3, 1, 6, 5, 4, 9, 2, 8, 7], 
  [7, 5, 2, 8, 3, 1, 4, 6, 9],
  [4, 8, 9, 6, 7, 2, 3, 5, 1],
  [5, 4, 7, 3, 9, 6, 1, 2, 8],
  [6, 9, 1, 2, 8, 4, 5, 7, 3],
  [2, 3, 8, 1, 5, 7, 9, 4, 6],
  [1, 6, 5, 9, 2, 8, 7, 3, 4],
  [9, 2, 4, 7, 6, 3, 8, 1, 5],
  [8, 7, 3, 4, 1, 5, 6, 9, 2]
 ]
console.log(Check_Solution(sudoku));
