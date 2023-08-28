function removeElement(nums, val) {
    let k = 0; // Index to place the next element that is not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

const nums = [3, 2, 2, 3];
const val = 3;
const remainingCount = removeElement(nums, val);
console.log(remainingCount); // Outputs: 2
console.log(nums.slice(0, remainingCount)); // Outputs: [2, 2]