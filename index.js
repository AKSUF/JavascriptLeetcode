const arr = [-4, -1, 0, 3, 10];
const squres = findSquare(arr);
console.log(squres);

function findSquare(arr) {
    const squares = [];

    for (let i = 0; i < arr.length; i++) {
        squares.push(arr[i] * arr[i]);

    }

    squares.sort((a, b) => a - b);
    return squares;
}