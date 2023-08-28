function fourSum(nums, target) {
    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }

            for (let k = j + 1; k < nums.length - 1; k++) {
                if (k > j + 1 && nums[k] === nums[k - 1]) {
                    continue;
                }

                for (let l = k + 1; l < nums.length; l++) {
                    if (l > k + 1 && nums[l] === nums[l - 1]) {
                        continue;
                    }

                    const sum = nums[i] + nums[j] + nums[k] + nums[l];
                    if (sum === target) {
                        result.push([nums[i], nums[j], nums[k], nums[l]]);
                    }
                }
            }
        }
    }

    return result;
}

const nums = [1, 0, -1, 0, -2, 2];
const target = 0;
const result = fourSum(nums, target);
console.log(result); // Outputs: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]