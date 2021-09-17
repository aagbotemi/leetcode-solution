// const reversedNum = num => {
//     if (num > (Math.pow(2, 31) - 1) || num < -(Math.pow(2, 31))) {
//         return 0;
//     } else {
//         return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
//     }
// }
// // console.log(reversedNum(15342))

// console.log(reversedNum(-2147483648))

console.log(typeof(-Math.pow(2, 31)));
// 8463847412
// 2147483648