const isPalindrome = x => {
    if (x < 0) {
        return false
    }
    let number = x;
    let reverse = 0;

    while (number > 0) {
        reverse = reverse * 10 + number % 10;
        number = parseInt(number / 10)
    }
    return x === reverse;
}

console.log(isPalindrome(-101));
console.log(isPalindrome(121));
console.log(isPalindrome(11));
console.log(isPalindrome(1314));
console.log(isPalindrome(10));