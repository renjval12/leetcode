
// var reverse = function (x) {
//     let negativeNum = x < 0
//     let newReversedNum = 0
//     if (negativeNum == true) {
//         x *= -1
//     }

//     while (x > 0) {
//         newReversedNum = (newReversedNum * 10) + (x % 10)
//         x = Math.floor(x / 10)
//     }
//     if (newReversedNum > (2 ** 31 - 1)) {
//         return 0
//     }
//     if (negativeNum) {
//         return newReversedNum * -1
//     } else {
//         return newReversedNum
//     }
// };
// console.log(reverse(-345))

//breakdown of function using multiple variables
// var reverse = function (x) {
//     let negativeNum = x < 0
//     let negNums
//     let newReversedNum = 0
//     if (negativeNum == true) {
//         negNums = x * -1
//     }
//     console.log("value of x: " + x)
//     console.log("value of negNums: " + negNums)
//     let newNum = negNums.toString()
//     console.log("string value of negNums: " + newNum)
//     newNum = newNum.split('')
//     console.log("value of newNum when .split() used: " + newNum)
//     newNum = newNum.reverse()
//     console.log("value of newNum when .reverse() used: " + newNum)
//     newNum = newNum.join('')
//     console.log("value of newNum when .join() used: " + newNum)
//     newNum = parseInt(newNum)
//     console.log("new type of newNum: " + typeof newNum)
//     console.log(newNum)

//     x = newNum * -1
//     console.log("new value of x: " + x)
//     return x
// };
// reverse(-345)



//additional solution
// var reverse = (x) => {
//     let negativeNum = x < 0;
//     let negNums = 0;
//     let nums;
//     if (negativeNum) {
//         negNums = x * -1
//         negNums = negNums.toString().split('').reverse().join('')
//         x = negNums * -1
//         if (x < (2 ** 31 - 1) * -1) {
//             return 0
//         } else {
//             return x
//         }
//     }
//     if (!negativeNum) {
//         nums = parseInt(x.toString().split('').reverse().join(''))
//         x = nums
//         if (x > (2 ** 31 - 1)) {
//             return 0
//         } else {
//             return x
//         }
//     }
// }
// console.log(reverse(-321))
