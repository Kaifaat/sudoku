module.exports = function solveSudoku(matrix) {
  // your solution
    //   [5, 3, 4, 6, 7, 8, 9, 0, 0],
    //   [6, 7, 2, 1, 9, 5, 3, 4, 8],
    //   [1, 9, 8, 3, 4, 2, 5, 6, 7],
    //   [8, 5, 9, 7, 6, 1, 4, 2, 3],
    //   [4, 2, 6, 8, 5, 3, 7, 9, 1],
    //   [7, 1, 3, 9, 2, 4, 8, 5, 6],
    //   [9, 6, 1, 5, 3, 7, 2, 8, 4],
    //   [2, 8, 7, 4, 1, 9, 6, 3, 5],
    //   [3, 4, 5, 2, 8, 6, 1, 7, 9]

    //    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    //    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    //    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    //    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    //    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    //    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    //    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    //    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    //    [1, 6, 5, 3, 9, 0, 4, 7, 0]

    let ind = 0;
    let zeros = [];
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numbersDetector = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < 9; j++) {
            if ((matrix[i])[j] === 0){
                 zeros = [];
                 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                 numbersDetector = [];
                for (let k = 0; k < 9; k++) {
                   numbers[matrix[i][k] - 1] = 0;
                }
                for (let k = 0; k < 9; k++) {
                    if (numbers[k] !== 0) {
                        numbersDetector.push(numbers[k]);
                    }
                }
                 ind = 0;
                for (let k = 0; k < numbersDetector.length; k++) {
                    for (let l = 0; l < 9; l++) {
                        if (numbersDetector[k] === matrix[l][j]){
                            ind = 1
                        }
                    }
                    if (ind !== 1){
                        matrix[i][j] = numbersDetector[k];
                        ind = 0;
                    }
                }
            }
        }
    }
return matrix
}



