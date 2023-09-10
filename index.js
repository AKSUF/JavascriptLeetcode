function rotate(matrix) {
    const n = matrix.length;
    const result = new Array(n).fill(null).map(() => new Array(n));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = matrix[n - j - 1][i];
        }
    }

    return result;
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedMatrix = rotate(matrix);
console.log(rotatedMatrix);