function findMaxConsecutiveOnes(arr) {
    let maxOnes = 0;
    let currentOnes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            currentOnes++;

        } else {
            currentOnes = 0;
        }
        maxOnes = Math.max(maxOnes, currentOnes);
    }
    return maxOnes;
}

const arr = [1, 1, 1, 0, 1, 1, 1, 0, 1];

const maxOnes = findMaxConsecutiveOnes(arr);
console.log(maxOnes);