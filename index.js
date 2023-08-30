function permutate(nums) {
    const result = [];

    function generatePermutations(index) {
        if (index === nums.length - 1) {
            result.push([...nums]);
            return;
        }
        for (let i = index; i < nums.length; i++) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
            generatePermutations(index + 1);
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }
    generatePermutations(0);
    return result;
}

const nums = [1, 2, 3];
const permutations = permutate(nums);
console.log(permutations);