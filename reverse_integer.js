
var reverse = function (x) {
    let negativeNum = x < 0
    let newReversedNum = 0
    if (negativeNum == true) {
        x *= -1
    }

    while (x > 0) {
        newReversedNum = (newReversedNum * 10) + (x % 10)
        x = Math.floor(x / 10)
    }
    if (newReversedNum > (2 ** 31 - 1)) {
        return 0
    }
    if (negativeNum) {
        return newReversedNum * -1
    } else {
        return newReversedNum
    }
};
console.log(reverse(-345))
// for (i = 0; i < num.length; i++) {
//  
//         let negativeNum = num<0
//         num = num * -1
//         newNum.push(num % 10)
//     } 

//     // if (negativeNum === false) {
//     //     newNum.push(num % 10)
//     // 
// }
// console.log(newNum)
// console.log(num)
