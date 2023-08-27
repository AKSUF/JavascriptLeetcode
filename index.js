const arr = [1, 2, 3, 4, 5, 1]
console.log(arr);
const duplicate = findDuplicate(arr);

console.log(duplicate);

function findDuplicate(arr) {
    const set = new Set();
    for (let i = 0; arr.length; i++) {
        if (set.has(arr[i])) {

            return arr[i];
        } else {
            set.add(arr[i])
        }
    }
}