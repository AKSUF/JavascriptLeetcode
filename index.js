const nums = [1, 2, 3, 4, 5, 6, 7]
let target = 5;
let result = insertposition(nums, target);
console.log(result);

function insertposition(nums, target) {
    let i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] >= target)
            break;
    }
    return i;
}