const nums = [1, 1, 2];
const uniqueCount = removeDuplicants(nums);
console.log(uniqueCount);
console.log(nums.slice(0, uniqueCount));

function removeDuplicants(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}