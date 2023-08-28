function threeSum(nums) {
    const result = [];

    nums.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue; // Skip duplicate values for i
        }

        for (let j = i + 1; j < nums.length - 1; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue; // Skip duplicate values for j
            }

            for (let k = j + 1; k < nums.length; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) {
                    continue; // Skip duplicate values for k
                }

                const sum = nums[i] + nums[j] + nums[k];
                if (sum === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return result;
}

const nums = [-1, 0, 1, 2, -1, -4];
const result = threeSum(nums);
console.log(result); // Outputs: [[-1, -1, 2], [-1, 0, 1]]