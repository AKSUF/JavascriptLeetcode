const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let target = 8;


let result = searchRange(nums, target);

console.log(result);

function searchRange(nums, target) {
    let firstOcurrencr = findFirstOccurnce(nums, target);

    if (firstOcurrencr === -1) {
        return [-1, -1];
    }
    const lastOccuurence = findLastOccurence(nums, target);
    return [firstOcurrencr, lastOccuurence];
}

function findFirstOccurnce(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

function findLastOccurence(nums, target) {
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}