const arr = [1, 2, 3, 4, 5];
console.log(arr);
const maximum = findthirdMaxinumber(arr);
console.log(maximum);

function findthirdMaxinumber(arr) {
    let max1 = arr[0];
    let max2 = arr[0];
    let max3 = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i]
        } else {
            max3 = max2;
            max2 = arr[i];
        }
    }
    return max3;

}