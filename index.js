function nextPermutation(nums) {
    let i = nums.length - 1;
    while (i > 0 && nums[i - 1] >= nums[i]) {
        i--;
    }
    if (i == 0) {
        nums.reverse();
        return;
    }
    let j = nums.length - 1;
    while (nums[j] <= nums[i - 1]) {
        j--;
    }
    let temp = nums[i - 1];
    nums[i - 1] = nums[j];
    nums[j] = temp;

    let start = i;
    let end = nums.length - 1;
    while (start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        start++;
        end--;
    }

}


nums = [1, 2, 3];

nextPermutation(nums);

console.log(nums);