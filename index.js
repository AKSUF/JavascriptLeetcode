function isPalindrome(x) {
    if (x < 0) {
        return false;
    }

    const numStr = x.toString();
    const n = numStr.length;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (numStr[i] !== numStr[n - 1 - i]) {
            return false;
        }
    }
    return true;
}

const x = 121;
const result = isPalindrome(x);
console.log(result);