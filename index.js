function findMedian(nums1, nums2) {
    const m = nums1.length;
    const n = nums2.length;

    if (m == 0) {
        return nums2[Math.floor(n / 2)]

    }

    if (n == 0) {
        return nums1[Math.floor(m / 2)]
    }
    const mid1 = Math.floor(m / 2);
    const mid2 = Math.floor(n / 2);

    const x = nums1[mid1];
    const y = nums2[mid2];


    if (x <= y) {
        return findMedian(nums1.slice(mid1 + 1), nums2);
    } else {
        return findMedian(nums2, nums2.slice(mid2 + 1));
    }
}
const nums1 = [1, 3];
const nums2 = [3];

const median = findMedian(nums1, nums2);
console.log(median);


let z = Math.round(4.4)
let k = Math.ceil(4.3);
console.log(k);
console.log(z);